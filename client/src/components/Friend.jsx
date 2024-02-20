// React Packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Icons
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1";
// import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1";
// import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1Outlined";

// Custom Components
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

// Mui Components
import {
    Box,
    Button,
    Typography,
    useTheme,
    Tooltip,
    Zoom,
} from "@mui/material";

// Redux - Local State
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../state";

const Friend = ({
    friendId,
    name,
    occupation,
    userPicturePath,
    themeColors,
    isProfile = false,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);

    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const loggedInFriends = useSelector((state) => state.loggedInUser.friends);

    // Theme
    // const { palette } = useTheme();
    // const primaryLight = palette.default.primary.light;
    // const primaryDark = palette.default.primary.dark;
    // const main = palette.default.neutral.main;

    const {
        primary,
        whiteText,
        headingText,
        textHover,
        textMain,
        recipeText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        buttonLight,
        buttonLight2,
        buttonLight3,
        buttonHover,
        backgroundPrimary,
        backgroundMain,
        recipeTextPanel,
        mainBackPanel,
        recipeStepsPanel,
        panelMain,
        recipeStepsPanelHover,
        panelMainHover,
        widgetBorder,
    } = themeColors || {};

    const isFriend = friends.find((friend) => friend._id === friendId);

    const isEqual = (friends, loggedInUser) =>
        JSON.stringify(friends) === JSON.stringify(loggedInUser);

    console.log("IS EQUAL:", isEqual());

    console.log("FRIEND - friends:", friends);
    console.log("FRIEND - isFriend:", isFriend);
    console.log("FRIEND ID:", friendId);
    console.log("USER OBJECT:", loggedInFriends);

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

    {
        console.log(
            `https://server-vukx.onrender.com/users/${_id}/${friendId}`
        );
    }

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
                        color={followerIconOutline}
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            "&:hover": {
                                color: textHover,
                                cursor: "pointer",
                            },
                            fontSize: "0.8rem",
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color={followerIconOutline} fontSize="0.75rem">
                        {occupation}
                    </Typography>
                </Box>
            </FlexBetween>
            {friendId === _id ? (
                <Box display="none" />
            ) : (
                <Button
                    onClick={() => patchFriend()}
                    // fullwidth
                    size="small"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: buttonLight2,
                        color: followerIconOutline,
                        p: "0.5rem",
                        m: "0.5rem",
                        minWidth: "3rem",
                        // border: `1px solid ${buttonLight}`,
                        borderRadius: "3rem",
                        "&:hover": {
                            // border: `1px solid ${buttonHover}`,
                            backgroundColor: buttonHover,
                        },
                    }}
                >
                    {isFriend ? (
                        <FlexBetween>
                            <Tooltip
                                TransitionComponent={Zoom}
                                placement="top"
                                title="Unfollow User"
                                enterDelay="500"
                                sx={{ fontSize: "1rem" }}
                            >
                                <PersonRemoveAlt1OutlinedIcon
                                    fontSize="small"
                                    sx={{ color: followerIconOutline }}
                                />
                            </Tooltip>
                        </FlexBetween>
                    ) : (
                        <FlexBetween>
                            <Tooltip
                                TransitionComponent={Zoom}
                                placement="top"
                                title="Follow User"
                                enterDelay="500"
                                sx={{ fontSize: "1rem" }}
                            >
                                <PersonAddAlt1OutlinedIcon
                                    fontSize="small"
                                    sx={{ color: followerIconOutline }}
                                />
                            </Tooltip>
                        </FlexBetween>
                    )}
                </Button>
            )}
        </FlexBetween>
    );
};

export default Friend;
