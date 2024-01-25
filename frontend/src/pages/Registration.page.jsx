// Importing necessary React hooks, components, and icons
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../utils/useRegisterUser";

// UserRegistration component definition
const UserRegistration = () => {
	// State for storing user registration information (username, email, and password)
	const [registerUser, setRegisterUser] = useState({
		username: "",
		email: "",
		password: "",
	});

	// Hook for programmatic navigation
	const navigate = useNavigate();

	// useEffect to check if the user is already logged in and redirect to the profile page
	useEffect(() => {
		if (document.cookie.split("=")[0]) {
			navigate("/profile");
		}
	}, [navigate]);

	// Custom hook for handling user registration logic
	const registerUserHandler = useRegisterUser;

	// Form submit handler
	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Call the registerUserHandler function to handle user registration
		registerUserHandler(registerUser, navigate, setRegisterUser);
	};

	// Render the UserRegistration component
	return (
		<div className="w-full h-full flex flex-col justify-center items-center relative">
			{/* Back button for navigation */}
			<IoIosArrowBack
				className="h-10 w-10 absolute top-0 left-0 text-yellow-400 hover:text-yellow-600 cursor-pointer"
				onClick={() => {
					navigate("/");
				}}
			/>

			{/* Sign Up heading */}
			<h1 className="text-center text-2xl font-bold w-fit h-[10%] md:text-3xl lg:text-4xl">
				Sign Up
			</h1>

			{/* Registration form */}
			<form
				onSubmit={handleFormSubmit}
				className="w-full h-[80%] flex flex-col justify-evenly items-center">
				{["username", "email", "password"].map((field) => (
					// Input fields for username, email, and password
					<div
						key={field}
						className="flex flex-col gap-1 w-9/12 justify-evenly mx-auto lg:w-7/12 lg:h-[20%]">
						<label htmlFor={field} className="text-md lg:text-lg">
							{field === "username"
								? "Name"
								: field === "email"
								? "Email"
								: "Password"}
						</label>
						<input
							value={registerUser[field]}
							onChange={(e) =>
								setRegisterUser((prevState) => ({
									...prevState,
									[field]: e.target.value,
								}))
							}
							name={field}
							type={
								field === "email"
									? "email"
									: field === "username"
									? "text"
									: "password"
							}
							className="border border-black rounded-lg p-2"
						/>
					</div>
				))}

				{/* Sign Up button */}
				<button
					type="submit"
					className=" flex justify-center items-center mx-auto h-[10%] my-6 bg-green-200 p-3 text-lg transition-all ease-linear duration-300 rounded-lg hover:bg-green-600 hover:text-white lg:p-5">
					Sign Up
				</button>
			</form>
		</div>
	);
};

// Exporting the UserRegistration component for use in other parts of the application
export default UserRegistration;
