import User from "../models/User";

/* Read */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
// Get User Friends API CAll
export const getUserFriends = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return {
                _id,
                firstName,
                lastName,
                occupation,
                location,
                picturePath,
            };
        }
    );
};
