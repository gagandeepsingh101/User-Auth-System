// Importing the mongoose library for MongoDB interaction and the DB_NAME constant
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Function to connect to MongoDB
export const connectDB = async () => {
    try {
        // Attempting to establish a connection to the MongoDB database
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        // Logging a success message if the connection is established
        console.log(`Connecting to MongoDB on ${connectionInstance.connection.host}`);
    } catch (error) {
        // Logging an error message if there's an issue connecting to the database
        console.log(
            `Error connecting to MongoDB: ${error.message}`
        );
    }
};