import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import UserLogin from "./pages/Login.page.jsx";
import UserProfile from "./pages/Profile.page.jsx";
import UserRegistration from "./pages/Registration.page.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/register",
				element: <UserRegistration />,
			},
			{
				path: "/login",
				element: <UserLogin />,
			},
			{
				path: "/profile",
				element: <UserProfile />,
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	<RouterProvider router={router}></RouterProvider>

	</React.StrictMode>
);
