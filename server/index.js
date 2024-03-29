import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Route Imports
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import recipeRoutes from "./routes/recipes.js";

// Controller Imports
import { register } from "./controllers/auth.js";
import { createRecipe } from "./controllers/recipes.js";
import { verifyToken } from "./middleware/auth.js";

// Models
import User from "./models/User.js";
import Post from "./models/Post.js";
import Recipe from "./models/Recipe.js";

// Data
import { users, posts, recipes } from "./data/index.js";

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

/* Middleware */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // Sets directory of where we are keeping assets

/* File Storage Configuration */
/* User Upload Storage Handling */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

/* Auth Register Function */

/* Routes with Files */
app.post("/auth/register", upload.single("picture"), register);
app.post("/recipes", verifyToken, upload.single("picture"), createRecipe);

/* ------------- Routes ------------- */
// ---- /auth/register Routes ----
app.use("/auth", authRoutes);
// /login                   - login

// ---- /users Routes ----
app.use("/users", userRoutes);

/* -- READ -- */
// /:id                     - verifyToken, getUser
// /:id/friends             - verifyToken, getUserFriends
// /:id/recipes             - verifyToken, getUserRecipes

/* -- UPDATE -- */
// /:id/:friendId           - verifyToken, addRemoveFriend

// ---- /recipes Routes ----
app.use("/recipes", recipeRoutes);

/* -- READ -- */
// /                        - verifyToken, getFeedRecipes
// /:userId/recipes         - verifyToken, getUserRecipes

/* -- UPDATE -- */
// /:id/like                -  verifyToken, likeRecipe
// /:id/recommendation      -  verifyToken, recommendRecipe

/* Mongoose Setup */
const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        // Data Only Added Once
        // User.insertMany(users);
        // Post.insertMany(posts);
        Recipe.insertMany(recipes);

        // const recipesData = require("./data/index.js");
        // console.log("Data read from file:", recipesData);
        // for (const recipe of recipesData) {
        //     try {
        //         await Recipe.updateOne(
        //             { _id: recipe._id },
        //             { $set: { occupation: recipe.occupation } },
        //             { upsert: true } // Create the 'occupation' field if it doesn't exist
        //         );
        //         console.log(
        //             `Occupation field updated for recipe with _id ${recipe._id}`
        //         );
        //     } catch (error) {
        //         console.error("Error updating document:", error);
        //     }
        // }

        // console.log(
        //     "Occupation field updated for all documents in the 'recipes' collection."
        // );
    })
    .catch((error) => console.log(`${error} did not connect`));
