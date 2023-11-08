import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({
    friendId,
    name,
    occupation,
    userPicturePath,
    themeColors,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    // Theme
    const { palette } = useTheme();
    const primaryLight = palette.default.primary.light;
    const primaryDark = palette.default.primary.dark;
    // const main = palette.default.neutral.main;

    const medium = palette.default.neutral.medium;

    const {
        headingText,
        textHover,
        recipeStepsPanel,
        whiteText,
        recipeStepsPanelHover,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        recipeText,
        mainBackPanel,
    } = themeColors || {};

    const isFriend = friends.find((friend) => friend._id === friendId);

    const patchFriend = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${_id}/${friendId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box
                    onClick={() => {
                        navigate(`/profile/${friendId}`);
                        navigate(0);
                    }}
                >
                    <Typography
                        color={headingText}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: textHover,
                                cursor: "pointer",
                            },
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color={headingText} fontSize="0.75rem">
                        {occupation}
                    </Typography>
                </Box>
            </FlexBetween>
            <Button
                onClick={() => patchFriend()}
                fullwidth
                size="small"
                sx={{
                    backgroundColor: recipeStepsPanel,
                    color: headingText,
                    p: "0.5rem",
                    m: "0.5rem",

                    borderRadius: "3rem",
                    "&:hover": {
                        backgroundColor: textHover,
                    },
                }}
            >
                {isFriend ? (
                    <FlexBetween>
                        <PersonRemoveOutlined />
                    </FlexBetween>
                ) : (
                    <PersonAddOutlined />
                )}
            </Button>
        </FlexBetween>
    );
};

export default Friend;
