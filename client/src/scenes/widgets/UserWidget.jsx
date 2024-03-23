import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// MUI Icons
import {
    ManageAccountsOutlined,
    EditOutlined,
    // LocationOnIcon,
    WorkOutlineOutlined,
    StarHalf,
    StarOutline,
    PersonAddOutlined,
} from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// MUI Comnponents
import {
    Box,
    Typography,
    Divider,
    Tooltip,
    Zoom,
    Button,
    useTheme,
} from "@mui/material";

// Custom Compponents
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

// Custom Icons
import ChefHatIcon from "../../components/svg/ChefHatIcon";
import RecipeIcon from "../../components/svg/RecipeIcon";
import RepStarIcon from "../../components/svg/RepStarIcon";

// Local State
import { setFriends } from "../../state";

const UserWidget = ({ userId, picturePath, themeColors }) => {
    // State
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

    // Local State
    const dispatch = useDispatch();
    const loggedInUserObject = useSelector((state) => state.user);

    const { _id } = useSelector((state) => state.user);
    const friends = useSelector((state) => state.user.friends);
    const isFriend = friends.find((friend) => friend._id === friends.id);

    // Theme Colors

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

    // Destructure Fetch User Data

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        totalRecipeLikes,
        userRecipeList,
    } = user;
    const recipesPosted = userRecipeList.length;

    return (
        <WidgetWrapper borderColor={widgetBorder}>
            {/* First Row */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => {
                    navigate(`/profile/${userId}`);
                    navigate(0);
                }}
                // sx={{ width: "100%" }}
                width="100%"
            >
                <Box
                    gap="1rem"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <UserImage image={picturePath} />

                    <FlexBetween
                        sx={{
                            // display: "flex",
                            // justifyContent: "flex-start",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            variant="h4"
                            color={followerIconOutline}
                            fontWeight="bold"
                            fontSize="1rem"
                            pl="0.25rem"
                            sx={{
                                "&:hover": {
                                    color: followerIconOutline,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>

                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Reputation"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
                            <Box
                                fontSize="medium"
                                p="0.5rem 0.5rem 0.5rem 0rem"
                                // mt="0.25rem"
                                sx={{
                                    // gap: "0.25rem",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    width: "100%",
                                    color: followerIconOutline,
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    p="0.25rem"
                                >
                                    <RepStarIcon
                                        fontSize="3rem"
                                        fill={followerIconOutline}
                                    />
                                </Box>

                                <Box
                                    display="flex"
                                    alignItems="center"
                                    p="0.25rem"
                                >
                                    <RepStarIcon
                                        fontSize="3rem"
                                        fill={followerIconOutline}
                                    />
                                </Box>

                                <Box
                                    display="flex"
                                    alignItems="center"
                                    p="0.25rem"
                                >
                                    <RepStarIcon
                                        fontSize="3rem"
                                        fill={followerIconOutline}
                                    />
                                </Box>
                            </Box>
                        </Tooltip>
                    </FlexBetween>
                </Box>
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
                        color: followerIconOutline,
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
                            <Tooltip TransitionComponent={Zoom} placement="top" title="Unfollow User" enterDelay="500" >
                                <PersonRemoveOutlined />
                            </Tooltip>
                        </FlexBetween>
                    ) : (
                        <FlexBetween>
                            <Tooltip TransitionComponent={Zoom} placement="top" title="Follow User" enterDelay="500" >
                                <PersonAddOutlined />
                            </Tooltip>
                        </FlexBetween>
                    )}
                </Button>
            )} */}

            <FlexBetween mb="0.5rem">
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Following"
                    enterDelay="500"
                    sx={{ fontSize: "1rem" }}
                >
                    <Box
                        color={followerIconOutline}
                        display="flex"
                        justifyContent="flex-start"
                        gap="1rem"
                    >
                        <PersonIcon fontSize="small" />
                        <Typography fontWeight="bold">
                            {friends.length}
                        </Typography>
                    </Box>
                </Tooltip>
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Followers"
                    enterDelay="500"
                    sx={{ fontSize: "1rem" }}
                >
                    <Box
                        color={followerIconOutline}
                        display="flex"
                        justifyContent="flex-start"
                        gap="1rem"
                    >
                        <GroupsIcon fontSize="small" />
                        <Typography fontWeight="bold">
                            {Math.ceil(Math.random() * 100)}
                        </Typography>
                    </Box>
                </Tooltip>
            </FlexBetween>

            <Divider />

            {/* Third Row */}
            <Box p="0.75rem 0">
                <FlexBetween>
                    <Typography fontWeight="bold" color={followerIconOutline}>
                        Visitors
                    </Typography>
                    <Typography
                        fontWeight="bold"
                        color={followerIconOutline}
                        // fontWeight="500"
                    >
                        {viewedProfile}
                    </Typography>
                </FlexBetween>
            </Box>

            <Divider />
            {/* Reputation Stars */}
            <Box>
                {/* Recipes Posted */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Recipes Posted"
                    enterDelay="500"
                    sx={{ fontSize: "1rem" }}
                >
                    <FlexBetween
                        display="flex"
                        justifyContent="flex-start"
                        gap="1rem"
                        py="0.75rem"
                    >
                        <RecipeIcon
                            sx={{
                                width: "1rem",
                                height: "1rem",
                                fill: followerIconOutline,
                            }}
                        />
                        <Typography
                            fontWeight="bold"
                            color={followerIconOutline}
                        >
                            {recipesPosted}
                        </Typography>
                    </FlexBetween>
                </Tooltip>
                {/* Repuation Score */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Reputation Score"
                    enterDelay="500"
                    sx={{ fontSize: "1rem" }}
                >
                    <FlexBetween
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="1rem"
                        pb="0.75rem"
                    >
                        <ChefHatIcon
                            color={followerIconOutline}
                            sx={{
                                width: "1rem",
                                height: "1rem",
                                fill: followerIconOutline,
                            }}
                        />
                        <Typography
                            fontWeight="bold"
                            color={followerIconOutline}
                        >
                            {totalRecipeLikes || 0}
                        </Typography>
                    </FlexBetween>
                </Tooltip>
            </Box>

            <Divider />

            {/* Second Row */}
            <Box p="0.75rem 0 0rem 0 ">
                <Box display="flex" alignItems="center" gap="1rem" pb="0.5rem">
                    <LocationOnOutlinedIcon
                        fontSize="small"
                        sx={{ color: followerIconOutline }}
                    />
                    <Typography fontWeight="bold" color={followerIconOutline}>
                        {location}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                    <WorkOutlineOutlined
                        fontSize="small"
                        sx={{ color: followerIconOutline }}
                    />
                    <Typography fontWeight="bold" color={followerIconOutline}>
                        {occupation}
                    </Typography>
                </Box>
            </Box>

            {/* <Divider /> */}

            {/* Fourth Row */}
            {/* <Box p="1rem 0">
                <Typography
                    fontSize="1rem"
                    color={followerIconOutline}
                    fontWeight="bold"
                    mb="1rem"
                >
                    Social Profiles
                </Typography>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography color={followerIconOutline} fontWeight="500">
                                Twitter
                            </Typography>
                            <Typography color={followerIconOutline}>
                                Social Network
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/linkedin.png" alt="linkedin" />
                        <Box>
                            <Typography color={followerIconOutline} fontWeight="500">
                                LinkedIn
                            </Typography>
                            <Typography color={followerIconOutline}>
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
