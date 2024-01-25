import { config } from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/db/connectDB.db.js";
config();

// Establishing a connection to the MongoDB database
// Assuming connectDB returns a promise
connectDB()
	.then(() => {
		// Starting the Express server and listening on a specified port or defaulting to 8080
		const PORT = process.env.PORT || 8080;
		app.listen(PORT, () => {
			// Logging the server's address upon successful start
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		// Logging an error message if the database connection fails
		console.error("Error connecting to the database:", err);
	});