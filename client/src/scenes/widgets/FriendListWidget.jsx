// React Hooks
import { useEffect } from "react";

// MUI Components
import { Box, Typography, useTheme, Divider } from "@mui/material";

import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";

// Redux
import { useDispatch, useSelector } from "react-redux";

// State
import { setFriends } from "../../state";

const FriendListWidget = ({ userId, themeColors }) => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const { headingText } = themeColors || {};

    const getUserFriends = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}/friends`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    useEffect(() => {
        getUserFriends();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // if (friends.length > 0) {

    // }

    console.log("FRIENDS TEST:", friends);
    return (
        <WidgetWrapper sx={{ minWidth: "16.7915rem" }}>
            <Typography
                color={headingText}
                variant="h4"
                fontWeight="bold"
                fontSize="1rem"
                fontFamily="Montserrat"
            >
                Following
            </Typography>

            <Divider sx={{ margin: "0.5rem 0" }} />

            {friends.length > 0 ? (
                <Box display="flex" flexDirection="column" gap="1.5rem">
                    {friends.map((friend) => (
                        <Friend
                            key={friend._id}
                            friendId={friend._id}
                            name={`${friend.firstName} ${friend.lastName}`}
                            occupation={friend.occupation}
                            userPicturePath={friend.picturePath}
                            themeColors={themeColors}
                        />
                    ))}
                </Box>
            ) : (
                <Box display="flex" flexDirection="column" gap="1.5rem">
                    <Typography>You aren't following anybody, yet..</Typography>
                </Box>
            )}
        </WidgetWrapper>
    );
};

export default FriendListWidget;
