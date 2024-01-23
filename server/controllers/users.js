import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

// --- Read ---
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        // console.log(`Users.js - USER - ${user}`);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
// Get User Friends API Call
export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({
                _id,
                firstName,
                lastName,
                occupation,
                location,
                picturePath,
                recipesPosted,
                totalRecipeLikes,
            }) => {
                return {
                    _id,
                    firstName,
                    lastName,
                    occupation,
                    location,
                    picturePath,
                    recipesPosted,
                    totalRecipeLikes,
                };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Get User Recipes API Response
export const getUserRecipes = async (req, res) => {
    try {
        const { userId } = req.params;

        // Grab the list of all user recipes
        const recipes = await Recipe.find({ userId });

        // Return Successful Request
        res.status(200).json(recipes);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// --- Update ---
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({
                _id,
                firstName,
                lastName,
                occupation,
                location,
                picturePath,
                recipesPosted,
                recipesLikes,
            }) => {
                return {
                    _id,
                    firstName,
                    lastName,
                    occupation,
                    location,
                    picturePath,
                    recipesPosted,
                    recipesLikes,
                };
            }
        );

        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
