// Importing the Axios library for making HTTP requests and the custom errorToast function
import axios from "axios";
import { errorToast } from "./customToast";

// Custom hook for fetching user details
export const useFetchUserDetail = async (setUserData) => {
	try {
		// Making a GET request to fetch user data from the server
		const { data } = await axios.get(
			`${
				import.meta.env.VITE_APP_SERVER_URL || "http://localhost:8080"
			}/api/users/userData`,
			{
				withCredentials: true, // Sending credentials (cookies) with the request
				headers: {
					Authorization: "Bearer " + document.cookie.split("=")[1],
				},
			}
		);

		// Checking if the request was successful
		if (data.success) {
			// Updating the user data using the provided setUserData function
			setUserData(data.data);
		}
	} catch (error) {
		// Displaying an error toast in case of an error
		console.log(error);
		errorToast("Error while fetching user data: " + error);
	}
};
