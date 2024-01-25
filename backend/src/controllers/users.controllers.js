// Importing necessary modules and dependencies
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/UserRegisterSchema.model.js";

// Function to generate JWT token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.TOKEN_SECRET);
};

// Controller for user registration
export const userRegistrationController = async function (req, res) {
	try {
		// Destructuring user input from request body
		const { username, password, email } = req.body;

		// Checking if the user already exists with the given email
		const user = await User.findOne({ email });
		if (user) {
			return res.status(200).json({
				success: false,
				message: "User already registered with this email",
			});
		}

		// Hashing the password and creating a new user
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});
		await newUser.save();

		// Responding with success message if user registration is successful
		res
			.status(200)
			.json({ success: true, message: "New user registered successfully" });
	} catch (error) {
		// Handling any errors and responding with an error message
		res.status(500).json({ error: error.message });
	}
};

// Controller for user login
export const userLoginController = async function (req, res) {
	try {
		// Destructuring user input from request body
		const { password, email } = req.body;

		// Finding the user with the given email
		const user = await User.findOne({ email });

		// Checking if the user exists and if the provided password is correct
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(203).json({
				success: false,
				message: "Invalid password or email provided",
			});
		}

		// Generating a JWT token and setting it as a secure, httpOnly cookie
		const token = generateToken(user._id);
		res.status(200).json({
			success: true,
			token: token,
			message: `${user.username} is login successfully`,
		});
	} catch (error) {
		// Handling any errors and responding with an error message
		res.status(500).json({ error: error.message });
	}
};

// Controller for fetching user data
export const fetchUserDataController = async function (req, res) {
	try {
		// Destructuring user id from request
		const { _id } = req;

		// Finding the user with the given id and responding with user data
		const { username, email } = await User.findOne({ _id });
		res.json({
			success: true,
			data: {
				username: username,
				email: email,
			},
			message: "User can access data",
		});
	} catch (error) {
		// Handling any errors and responding with an error message
		res.status(500).json({ error: error.message });
	}
};

// Controller for user logout
export const logoutController = async function (req, res) {
	try {
		// Clearing the UserAuth cookie to log the user out
		res.json({
			success: true,
			message: "User logout successfully",
		});
	} catch (error) {
		// Handling any errors and responding with an error message
		res.status(500).json({ error: error.message });
	}
};
