import express from "express";
import {
    getFeedRecipes,
    getUserRecipes,
    likeRecipe,
    recommendRecipe,
} from "../controllers/recipes.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedRecipes);
router.get("/", verifyToken, getMainRecipes); // TEST ROUTE
router.get("/:userId/recipes", verifyToken, getUserRecipes);

/* Update */
router.patch("/:id/like", verifyToken, likeRecipe);
router.patch("/:id/recommend", verifyToken, recommendRecipe);

export default router;
