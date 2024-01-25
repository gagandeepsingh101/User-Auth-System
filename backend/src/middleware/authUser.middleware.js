import jwt from "jsonwebtoken";
import { parse } from "cookie";

export const authUser = async function (req, res, next) {
	try {
		// Extracting the token from the "UserAuth" cookie in the request headers
		const cookies = parse(req.headers.cookie || "");
		const token = cookies.UserAuth;

		// Checking if the token is missing
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized: Token not found",
			});
		}

		// Verifying the token using the secret key and extracting user data
		const data = jwt.verify(token, process.env.TOKEN_SECRET);

		// Adding the user ID to the request object for future use in controllers
		req._id = data.id;

		// Proceeding to the next middleware or route handler
		return next();
	} catch (error) {
		// Handling JWT verification errors
		console.error("Error in authorization of User:", error.message);

		if (error.name === "TokenExpiredError") {
			return res.status(401).json({
				success: false,
				message: "Unauthorized: Token has expired",
			});
		}

		// Responding with a 401 Unauthorized status and an error message
		return res.status(401).json({
			success: false,
			message: "Unauthorized: Invalid token",
		});
	}
};
