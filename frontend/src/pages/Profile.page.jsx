// Importing necessary React hooks, components, and icons
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchUserDetail } from "../utils/useFetchUserDetail";
import { BsFilePerson } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useLogOutUser } from "../utils/useLogOutUser";

// UserProfile component definition
const UserProfile = () => {
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // State for storing user data
    const [userData, setUserData] = useState(null);

    // Custom hook for fetching user data
    const fetchUserData = useFetchUserDetail;

    // Custom hook for handling user logout logic
    const logoutUser = useLogOutUser;

    // useEffect to fetch user data when the component mounts
    useEffect(() => {
        // Checking if the user is logged in based on the existence of cookies
        if (document.cookie && document.cookie.split("=")[1]) {
            // Fetching user data and updating the state
            fetchUserData(setUserData);
        } else {
            // If not logged in, redirect to the login page
            navigate("/");
        }
    }, [fetchUserData, setUserData, navigate]);

    // Render the UserProfile component
    return (
        <div className="w-full h-full p-3 flex flex-col justify-evenly relative">
            {/* Back button for navigation */}
            <IoIosArrowBack
                className="h-10 w-10 absolute top-0 left-0 text-yellow-400 hover:text-yellow-600 cursor-pointer "
                onClick={() => {
                    navigate("/");
                }}
            />

            {/* UserProfile heading */}
            <h1 className="text-center text-4xl font-bold w-full h-[10%]">
                User Profile
            </h1>

            {/* User icon */}
            <BsFilePerson className="w-10/12 mx-auto h-[50%] text-yellow-600" />

            {/* User details */}
            <div className="w-full h-[20%]">
                <p className="w-fit mx-auto my-2">
                    <span className="border-b-2 border-yellow-600 p-1 text-lg">
                        {userData && userData.username}
                    </span>
                </p>
                <p className="w-fit mx-auto my-2">
                    <span className="border-b-2 border-yellow-600 p-1 text-lg">
                        {userData && userData.email}
                    </span>
                </p>
            </div>

            {/* Logout button */}
            <button
                onClick={() => {
                    // Call the logoutUser function to handle user logout
                    logoutUser(setUserData, navigate, userData?.username);
                }}
                className="w-3/12 flex justify-center items-center mx-auto h-[10%] my-6 bg-green-200 p-3 text-lg transition-all ease-linear duration-300 rounded-lg hover:bg-green-600 hover:text-white">
                Logout
            </button>
        </div>
    );
};

// Exporting the UserProfile component for use in other parts of the application
export default UserProfile;