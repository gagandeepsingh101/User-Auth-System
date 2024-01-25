// Importing necessary modules from React Router and react-hot-toast
import { Link, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Main App component
function App() {
	// Using useLocation hook from React Router to get the current pathname
	const { pathname } = useLocation();

	return (
		<div className="h-screen w-screen bg-yellow-50 overflow-hidden flex justify-center items-center">
			{/* Toast container from react-hot-toast */}
			<Toaster position="top-right" reverseOrder={true} />

			{/* Main content container */}
			<div className=" h-5/6 w-5/6 flex flex-col justify-evenly items-center py-2 bg-white  rounded-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] md:w-1/2 md:h-3/4  lg:h-2/3 lg:w-1/3">
				{/* Conditional rendering based on the current pathname */}
				{pathname === "/" ? (
					// If the current pathname is "/", render the main content
					<>
						<p className=" text-xl font-bold text-center md:text-2xl lg:text-3xl">
							Authentication System
						</p>

						{/* Navigation links for registering, logging in, and accessing the user profile */}
						<Link
							to={"/register"}
							className="flex justify-center items-center text-lg w-8/12 h-1/6 font-bold text-black transition-all duration-300 ease-linear my-3 rounded-xl bg-green-200 hover:bg-green-500 hover:text-white md:w-7/12 md:h-1/6  mx-auto md:text-xl lg:w-5/12">
							<span> Register User</span>
						</Link>

						<Link
							to={"/login"}
							className="flex justify-center items-center text-lg w-8/12 h-1/6 font-bold text-black transition-all duration-300 ease-linear my-3 rounded-xl bg-green-200 hover:bg-green-500 hover:text-white md:w-7/12 md:h-1/6  mx-auto md:text-xl lg:w-5/12">
							<span> Login User</span>
						</Link>

						<Link
							to={"/profile"}
							className="flex justify-center items-center text-lg w-8/12 h-1/6 font-bold text-black transition-all duration-300 ease-linear my-3 rounded-xl bg-green-200 hover:bg-green-500 hover:text-white md:w-7/12 md:h-1/6  mx-auto md:text-xl lg:w-5/12">
							<span>User Profile</span>
						</Link>
					</>
				) : (
					// If the current pathname is not "/", render the Outlet (nested routes)
					<Outlet></Outlet>
				)}
			</div>
		</div>
	);
}

export default App;
