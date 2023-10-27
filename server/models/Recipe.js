import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userPicturePath: String,
    recipeTitle: {
        type: String,
        required: true,
    },
    picturePath: {
        type: String,
        default: "",
    },
    ingredients: {
        type: Array,
        default: [
            {
                qty: {
                    type: String,
                    required: true,
                },
                element: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    // ingredientNum: Number,
    equipment: {
        type: Array,
        default: [],
    },
    prepTime: { type: String, default: "" },
    cookTime: { type: String, default: "" },
    servings: {
        type: Number,
        default: "",
        required: true,
    },
    spiceLevel: {
        type: Number,
        default: "",
    },
    steps: {
        type: Array,
        default: [
            {
                stepNum: Number,
                stepMethod: String,
                required: true,
            },
        ],
    },

    notes: {
        type: String,
        default: "",
    },
    tags: {
        type: Array,
        default: [],
    },

    likes: {
        // type: Number,
        type: Map,
        default: "",
        of: Boolean,
    },
    recommendations: {
        // type: Number,
        type: Map,
        default: "",
        of: Boolean,
    },
    saves: {
        // type: Number,
        type: Map,
        default: "",
        of: Boolean,
    },
    shares: Number,
    comments: {
        type: Array,
        default: [
            {
                userId: String,
                commentText: String,
            },
        ],
    },
});

// Pass User Schema into Mongoose DB
const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;
