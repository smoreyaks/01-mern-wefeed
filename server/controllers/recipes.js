import Post from "../models/Post.js";
import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

/* Create */
export const createRecipe = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newRecipe = new Recipe({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        });
        // Save Recipe
        await newRecipe.save();

        // Grab the list of all the recipes
        const recipe = await Recipe.find();
        // Return Created Recipe List
        res.status(201).json(recipe);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/* Read */
export const getFeedRecipes = async (req, res) => {
    try {
        // Grab the list of all the recipes
        const recipe = await Recipe.find();
        // Return Successful Request
        res.status(200).json(recipe);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// TEST FUNCTION

export const getUserRecipes = async (req, res) => {
    try {
        const { userId } = req.params;
        // Grab the list of all the recipes
        const recipe = await Recipe.find({ userId });

        // Return Successful Request
        res.status(200).json(recipe);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* Update */
// Update Likes
export const likeRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const recipe = await Recipe.findById(id);
        const isLiked = recipe.likes.get(userId);

        if (isLiked) {
            recipe.likes.delete(userId);
        } else {
            recipe.likes.set(userId, true);
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            id,
            { likes: recipe.likes },
            { new: true }
        );

        // Return Successful Request
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Update Recommendations
export const recommendRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const recipe = await Recipe.findById(id);
        const isRecommended = recipe.recommendations.get(userId);

        if (isRecommended) {
            recipe.recommendations.delete(userId);
        } else {
            recipe.recommendations.set(userId, true);
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            id,
            { recommendations: recipe.recommendations },
            { new: true }
        );

        // Return Successful Request
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
