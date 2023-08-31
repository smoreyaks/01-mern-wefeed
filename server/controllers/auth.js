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
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });

        // Understand Save() Function  & Res Status
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Send user back '201' - Something has been created
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* Logging In */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Mongoose tries to find specified email
        const user = await User.findOne({ email: email });

        // User Error Handling
        if (!user)
            return res.status(400).json({ msg: "User does not exist. " });

        // Validates user Email & Password Credentials
        const isMatch = await bcrypt.compare(password, user.password);

        // Password Error Handling
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
