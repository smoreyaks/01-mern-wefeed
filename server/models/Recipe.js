import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    recipeId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        default: [],
        min: 1,
    },
    // ingredientNum: Number,
    recipeImage: {
        type: String,
        default: "",
    },
    equipment: String,
    prepTime: String,
    cookTime: String,
    servings: {
        type: Number,
        required: true,
    },
    cookMethod: {
        type: Array,
        default: [],
        required: true,
    },
    spiceLevel: String,
    steps: {
        type: Array,
        default: [],
        stepNum: Number,
        stepMethod: String,
        required: true,
    },
    notes: String,
    tags: {
        type: Array,
        default: [],
    },

    recommendations: Number,
});

// Pass User Schema into Mongoose DB
const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;
