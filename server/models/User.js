import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            default: "",
        },
        backgroundThemeImg: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
        // TEMP
        recipesPosted: Number,
        totalRecipeLikes: Number,
        userRecipeList: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

// Pass User Schema into Mongoose DB
const User = mongoose.model("User", UserSchema);
export default User;
