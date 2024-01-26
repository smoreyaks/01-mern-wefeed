import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    StarHalf,
    StarOutline,
    PersonRemoveOutlined,
    PersonAddOutlined,
} from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";

// MUI Comnponents
import {
    Box,
    Typography,
    Divider,
    Tooltip,
    Button,
    useTheme,
} from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

// Local State
import { setFriends } from "../../state";

const UserWidget = ({ userId, picturePath, themeColors }) => {
    // State
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

    // Local State
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.user);
    const friends = useSelector((state) => state.user.friends);
    const isFriend = friends.find((friend) => friend._id === friends.id);

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const main = palette.default.neutral.main;

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
    } = themeColors || {};

    const getUser = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUser(data);
        // console.log("UserWidget.js - DATA - ", data);
    };

    const patchFriend = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${_id}/${friends.id}`,
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

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        // friends,
    } = user;

    return (
        <WidgetWrapper>
            {/* First Row */}

            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => {
                    navigate(`/profile/${userId}`);
                }}
            >
                <FlexBetween gap="1rem">
                    <Box>
                        <UserImage image={picturePath} />
                    </Box>

                    <Box>
                        <Typography
                            variant="h4"
                            color={whiteText}
                            fontWeight="bold"
                            fontSize="1rem"
                            sx={{
                                "&:hover": {
                                    color: whiteText,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                    </Box>
                </FlexBetween>
            </FlexBetween>
            {/* Add Friend Button */}
            {/* {console.log("UW FRIEND ID:", friends._id)}
            {console.log("UW USER ID:", _id)}

            {friends.id === _id ? (
                <Box display="none" />
            ) : (
                <Button
                    onClick={() => patchFriend()}
                    fullwidth
                    size="small"
                    sx={{
                        backgroundColor: buttonLight2,
                        color: headingText,
                        width: "100%",
                        // p: "0.5rem",
                        // m: "0.5rem",
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
                            <Tooltip title="Unfollow User" enterDelay="500">
                                <PersonRemoveOutlined />
                            </Tooltip>
                        </FlexBetween>
                    ) : (
                        <FlexBetween>
                            <Tooltip title="Follow User" enterDelay="500">
                                <PersonAddOutlined />
                            </Tooltip>
                        </FlexBetween>
                    )}
                </Button>
            )} */}
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                // py="0.5rem"
                gap="0.5rem"
                mb="0.5rem"
            >
                <Typography color={whiteText}>
                    Following {friends.length}
                </Typography>
                <Typography color={whiteText}>
                    Followers {Math.ceil(Math.random() * 100)}
                </Typography>
            </Box>
            <Divider />
            {/* Reputation Stars */}
            <Tooltip title="Reputation" enterDelay="500">
                <Box
                    fontSize="medium"
                    my="0.5rem"
                    sx={{
                        color: headingText,
                        width: "100%",
                        display: "flex-start",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <StarRateIcon fontSize="1rem" />
                    <StarRateIcon fontSize="1rem" />
                    <StarRateIcon fontSize="1rem" />
                </Box>
            </Tooltip>
            <Divider />

            {/* Second Row */}
            <Box p="0.5rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined
                        fontSize="small"
                        sx={{ color: whiteText }}
                    />
                    <Typography color={whiteText}>{location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                    <WorkOutlineOutlined
                        fontSize="small"
                        sx={{ color: whiteText }}
                    />
                    <Typography color={whiteText}>{occupation}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Third Row */}
            <Box p="0.5rem 0">
                <FlexBetween mb="0.5rem">
                    <Typography color={whiteText}>Profile Views</Typography>
                    <Typography color={whiteText} fontWeight="500">
                        {viewedProfile}
                    </Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={whiteText}>
                        Total Recipe Views
                    </Typography>
                    <Typography color={whiteText} fontWeight="500">
                        {Math.ceil(Math.random() * 100)}
                    </Typography>
                </FlexBetween>
            </Box>

            {/* <Divider /> */}

            {/* Fourth Row */}
            {/* <Box p="1rem 0">
                <Typography
                    fontSize="1rem"
                    color={whiteText}
                    fontWeight="bold"
                    mb="1rem"
                >
                    Social Profiles
                </Typography>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography color={whiteText} fontWeight="500">
                                Twitter
                            </Typography>
                            <Typography color={whiteText}>
                                Social Network
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/linkedin.png" alt="linkedin" />
                        <Box>
                            <Typography color={whiteText} fontWeight="500">
                                LinkedIn
                            </Typography>
                            <Typography color={whiteText}>
                                Network Platform
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>
            </Box> */}
        </WidgetWrapper>
    );
};

export default UserWidget;
