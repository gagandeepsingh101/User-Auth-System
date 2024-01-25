// Importing necessary React hooks and components
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../utils/useLoginUser"; // Assuming this is a custom hook for handling user login logic

// UserLogin component definition
const UserLogin = () => {
	// State for storing user login information (email and password)
	const [loginUser, setLoginUser] = useState({
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

	// Custom hook for handling user login logic
	const loginUserHandler = useLoginUser;

	// Form submit handler
	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Call the loginUserHandler function to handle user login
		loginUserHandler(loginUser, navigate, setLoginUser);
	};

	// Render the UserLogin component
	return (
		<div className="w-full h-full flex flex-col justify-center items-center relative">
			{/* Back button for navigation */}
			<IoIosArrowBack
				className="h-10 w-10 absolute top-0 left-0 text-yellow-400 hover:text-yellow-600 cursor-pointer"
				onClick={() => {
					navigate("/");
				}}
			/>

			{/* Login heading */}
			<h1 className="text-center text-4xl font-bold w-fit h-[10%]">Login</h1>

			{/* Login form */}
			<form
				onSubmit={handleFormSubmit}
				className="w-full h-[80%] flex flex-col justify-evenly items-center">
				{["email", "password"].map((field) => (
					// Input fields for email and password
					<div
						key={field}
						className="flex flex-col justify-evenly w-7/12 mx-auto h-[20%]">
						<label htmlFor={field} className="text-lg">
							{field === "email" ? "Email" : "Password"}
						</label>
						<input
							value={loginUser[field]}
							onChange={(e) =>
								setLoginUser((prevState) => ({
									...prevState,
									[field]: e.target.value,
								}))
							}
							name={field}
							type={field === "email" ? "email" : "password"}
							className="border border-black rounded-lg p-2"
						/>
					</div>
				))}

				{/* Login button */}
				<button
					type="submit"
					className="w-3/12 flex justify-center items-center mx-auto h-[10%] my-6 bg-green-200 p-3 text-lg transition-all ease-linear duration-300 rounded-lg hover:bg-green-600 hover:text-white">
					Login
				</button>
			</form>
		</div>
	);
};

// Exporting the UserLogin component for use in other parts of the application
export default UserLogin;