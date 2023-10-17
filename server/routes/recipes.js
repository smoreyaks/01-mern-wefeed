import express from "express";
import {
    getFeedRecipes,
    getUserRecipes,
    likeRecipe,
} from "../controllers/recipes.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedRecipes);
router.get("/:userId/recipes", verifyToken, getUserRecipes);

/* Update */
router.patch("/:id/like", verifyToken, likeRecipe);

export default router;
