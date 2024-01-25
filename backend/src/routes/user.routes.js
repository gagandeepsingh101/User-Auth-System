// Importing the Express framework
import express from "express";

// Importing user controllers and authentication middleware
import {
    userLoginController,
    userRegistrationController,
    fetchUserDataController,
    logoutController,
} from "../controllers/users.controllers.js";
import { authUser } from "../middleware/authUser.middleware.js";

// Creating an instance of Express Router
const router = express.Router();

// Route for user registration (POST /register)
router.post("/register", userRegistrationController);

// Route for user login (POST /login)
router.post("/login", userLoginController);

// Route for fetching user data (GET /userData)
// Uses the authUser middleware for authentication before accessing the data
router.get("/userData", authUser, fetchUserDataController);

// Route for user logout (GET /logout)
router.get("/logout", logoutController);

// Exporting the router for use in other parts of the application
export default router;