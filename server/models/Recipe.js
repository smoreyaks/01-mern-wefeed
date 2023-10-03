import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
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
    equipment: String,
    prepTime: String,
    cookTime: String,
    servings: Number,
    cookMethod: {
        type: Array,
        default: [],
    },
    spiceLevel: String,
    steps: Number,
    notes: String,
    recommendations: Number,
});

// Pass User Schema into Mongoose DB
const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;
