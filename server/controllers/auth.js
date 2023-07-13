import bcrypt from "bcrypt"; // Allows Password Encryption
import jwt from "jsonwebtoken"; // Grants web token for auth
import User from "../models/User.js";

/* Register User */
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create new user
        // Reigster Function Flow
        // Encrypt password
        // Save password
        // After password is saved, on user login, user provides password
        // Salt password
        // Make sure password is correct
        // Give JSON Web Token
        const newUser = new User({});
    } catch (err) {}
};
