// Importing the Axios library for making HTTP requests and custom toast functions
import axios from "axios";
import { errorToast, successToast } from "./customToast";

// Custom hook for handling user registration
export const useRegisterUser = async (userData, navigate, setRegisterUser) => {
	try {
		// Extracting username, password, and email from the userData object
		const { username, password, email } = userData;

		// Checking if username, password, and email are provided
		if (username && password && email) {
			// Constructing the API URL based on the environment variable or defaulting to "http://localhost:8080"
			const apiUrl = `${
				import.meta.env.VITE_APP_SERVER_URL || "http://localhost:8080"
			}/api/users/register`;

			// Making a POST request to the register endpoint with user data and JSON content type

			// Checking if the password is at least 8 characters long
			if (password.length >= 8) {
				const { data } = await axios.post(apiUrl, userData, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				// If registration is successful, display a success toast, reset register user state, and navigate to the login page after a delay
				if (data.success) {
					successToast(data.message);
					setTimeout(() => {
						setRegisterUser({
							username: "",
							email: "",
							password: "",
						});
						navigate("/login");
					}, 2000);
				} else {
					// Displaying an error toast with the message from the server in case of unsuccessful registration
					errorToast(data.message);
				}
			} else {
				// Displaying an error toast if the password is not at least 8 characters long
				errorToast("Password must be at least 8 characters");
			}
		} else {
			// Handling different cases of missing user input and displaying an appropriate error toast
			let message = "";
			if (!username && !email && !password) {
				message = "Please provide your username, email, and password";
			} else if (!username && !email) {
				message = "Please provide your username and email";
			} else if (!username && !password) {
				message = "Please provide your username and password";
			} else if (!email && !password) {
				message = "Please provide your email and password";
			} else if (!username) {
				message = "Please provide your username";
			} else if (!email) {
				message = "Please provide your email";
			} else if (!password) {
				message = "Please provide your password";
			}
			// Displaying an error toast with the appropriate message
			errorToast(message);
		}
	} catch (error) {
		// Displaying an error toast in case of an error during the registration process
		errorToast("Error in registration process: " + error.message);
	}
};