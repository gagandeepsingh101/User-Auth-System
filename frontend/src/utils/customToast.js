// Importing the 'toast' component from 'react-hot-toast' library
import toast from "react-hot-toast";

// Function to display a success toast
export const successToast = (message) => {
    toast.success(message, {
        style: {
            border: "1px solid #fefce8",
            padding: "16px",
            fontWeight: "bold",
            color: "#ca8a04",
        },
        iconTheme: {
            primary: "#fefce8",
            secondary: "#ca8a04",
        },
    });
};

// Function to display an error toast
export const errorToast = (message) => {
    toast.error(message, {
        style: {
            border: "1px solid #fefce8",
            padding: "16px",
            fontWeight: "bold",
            color: "#ca8a04",
        },
        iconTheme: {
            primary: "#fefce8",
            secondary: "#ca8a04",
        },
    });
};