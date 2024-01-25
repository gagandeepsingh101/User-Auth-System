// Importing the Axios library for making HTTP requests and custom toast functions
import axios from "axios";
import { errorToast, successToast } from "./customToast";

// Custom hook for handling user logout
export const useLogOutUser = async (setUserData, navigate, username) => {
	try {
		// Constructing the API URL based on the environment variable or defaulting to "http://localhost:8080"
		const apiUrl = `${
			import.meta.env.VITE_APP_SERVER_URL || "http://localhost:8080"
		}/api/users/logout`;

		// Making a GET request to the logout endpoint with credentials (cookies) included in the request
		const { data } = await axios.get(apiUrl, {
			withCredentials: true,
		});

		// Checking if the logout was successful (data.success is true)
		if (data.success) {
			// Displaying a success toast with the modified message and navigating to the home page after a delay
			successToast(data.message.replace("User", username));
			setTimeout(() => {
				// Resetting the user data state and navigating to the home page
				document.cookie = "UserAuth=";
				setUserData(null);
				navigate("/");
			}, 2000);
		} else {
			// Displaying an error toast with the message from the server
			errorToast(data.message);
		}
	} catch (error) {
		// Displaying an error toast in case of an error during the logout process
		errorToast("Error in logout process: " + error.message);
	}
};
