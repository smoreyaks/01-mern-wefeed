import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: String,
    ingredients: {
        type: Array,
        default: [],
        min: 1,
    },
    prepTime: String,
    cookTime: String,
    servings: Number,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
