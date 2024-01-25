// Importing the Express framework
import express from "express";

// Importing the user routes, CORS, and cookie-parser middleware
import router from "./routes/user.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Creating an instance of the Express application
const app = express();

// CORS middleware to handle Cross-Origin Resource Sharing
app.use(
	cors({
		credentials: true,
		origin: true,
		exposedHeaders: ["Set-cookie"],
	})
);
// Middleware to parse JSON data in the request body
app.use(express.json());

// Middleware to parse cookies in the request
app.use(cookieParser());

app.use(function (req, res, next) {
	res.header("Content-Type", "application/json;charset=UTF-8");
	res.header("Access-Control-Allow-Credentials", true);
	// res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

// Using the user routes defined in user.routes.js
app.use("/api/users", router);

// Exporting the configured Express application for use in other parts of the application
export default app;
