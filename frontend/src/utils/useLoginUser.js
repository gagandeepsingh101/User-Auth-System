// Importing the Axios library for making HTTP requests and custom toast functions
import axios from "axios";
import { errorToast, successToast } from "./customToast";
import { useSetCookie } from "./useSetCookie";

// Custom hook for handling user login
const setCookie = useSetCookie;
export const useLoginUser = async (userData, navigate, setLoginUser) => {
	try {
		// Constructing the API URL based on the environment variable or defaulting to "http://localhost:8080"
		const apiUrl = `${
			import.meta.env.VITE_APP_SERVER_URL || "http://localhost:8080"
		}/api/users/login`;

		// Making a POST request to the login endpoint with user data
		const { data } = await axios.post(apiUrl, userData, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		// Checking if the login was successful (data.success is true)
		if (data.success) {
			// Displaying a success toast and navigating to the profile page after a delay
			successToast(data.message);
			setTimeout(() => {
				// Resetting the login user state and setting the UserAuth cookie with the received token
				setLoginUser({
					email: "",
					password: "",
				});
				setCookie("UserAuth", data.token, 7);
				// Navigating to the profile page
				navigate("/profile");
			}, 2000);
		} else {
			// Handling different error cases and displaying an appropriate error toast
			let message = "Please provide your ";
			if (!userData.email) {
				message = message + "email ";
			}
			if (!userData.password) {
				if (!userData.password && !userData.email) {
					message = message + "and password ";
				} else {
					message = message + "password ";
				}
			}
			if (userData.password && userData.password.length < 8) {
				message = "Password should be at least 8 characters long. ";
			}

			// Displaying an error toast with the appropriate error message
			errorToast(
				message === "Please provide your " || message === ""
					? data.message
					: message
			);
		}
	} catch (error) {
		// Displaying an error toast in case of an error during the login process
		errorToast("Error in login process: " + error.message);
	}
};
