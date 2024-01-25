// Importing the mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Defining the user schema using Mongoose
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensuring email uniqueness in the database
    },
    password: {
        type: String,
        required: true,
    },
});

// Creating a Mongoose model based on the defined schema
export const User = mongoose.model("User", UserSchema);

// Exporting the connection from Mongoose
export const connection = mongoose.connection;