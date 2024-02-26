// React Packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// MUI Components
import { Box, useMediaQuery, useTheme } from "@mui/material";

// Custom Components
import CreateRecipeWidget from "../widgets/CreateRecipeWidget";
import RecipesFeedWidget from "../widgets/RecipesFeedWidget";
import TopUserRecipesWidget from "../widgets/TopUserRecipesWidget";
import FriendListWidget from "../widgets/FriendListWidget";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";

const ProfilePage = () => {
    // ---------------------------
    // ---------- Theme ----------
    // ---------------------------

    const { palette } = useTheme();

    const primary = palette.default.primary.main; // ---- ! Need to remove, superseded

    // Text
    const whiteText = palette.default.neutralGrey.white; // Delete
    const headingText = palette.default.neutralGrey.white; // Text Color
    const textHover = palette.default.neutralGrey.fade; // Text Hover Color
    const textMain = palette.default.neutralGrey.white; // Text Color
    const recipeText = palette.default.neutral.main;

    // Follower Icon
    const followerIconOutline = palette.default.neutralGrey.icon;
    const followerIconBack = palette.default.primaryOne.main;
    const followerIconBackHover = palette.default.primaryOne.light;

    // Button Main
    const buttonLight = palette.default.primaryTwo.light;
    const buttonLight2 = palette.default.primaryTwo.light2;
    const buttonLight3 = palette.default.primaryTwo.light3;
    const buttonHover = palette.default.primaryTwo.dark; // Button Hover Color

    // Background Main Color
    const backgroundPrimary = palette.default.primaryOne.main;
    const backgroundMain = palette.default.primaryOne.dark;
    const navbarMain = palette.default.primaryOne.navbar;

    // Panel / Subsection Main
    const recipeTextPanel = palette.default.neutral.main;
    const mainBackPanel = palette.default.neutral.main;
    const recipeStepsPanel = palette.default.primary.light;
    const panelMain = palette.default.primary.light;

    // Panel / Subsection Hover
    const recipeStepsPanelHover = palette.default.primaryTwo.light;
    const panelMainHover = palette.default.primaryTwo.light;

    // Border
    const widgetBorder = palette.default.neutralGrey.borderNeutral;

    const themeColors = {
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
        navbarMain,
        widgetBorder,
    };

    // Params
    const { userId } = useParams();

    // State
    const [user, setUser] = useState(null);

    // Redux State
    const { _id, picturePath } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);

    // Media Query
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    // GET User API Request
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
    };

    // Run Once On Page Load
    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) return null;

    return (
        <Box>
            <Navbar
                userId={_id}
                picturePath={picturePath}
                themeColors={themeColors}
            />
            <Box
                width="100%"
                padding={
                    isDesktopScreen
                        ? "6.5rem 1rem 0 1rem"
                        : "4.5rem 1rem 0 1rem"
                }
                display="flex"
                gap="2rem"
                justifyContent={isDesktopScreen ? "space-between" : "center"}
            >
                {/* User Column */}
                <Box
                    // flexBasis={isDesktopScreen ? "26%" : undefined}
                    display={isDesktopScreen ? "26%" : "none"}
                    flexBasis="26%"
                    width="300px"
                    maxWidth="300px"
                    minWidth="10%"
                >
                    <UserWidget
                        userId={userId}
                        picturePath={user.picturePath}
                        themeColors={themeColors}
                    />
                    <Box m="2rem 0" />
                    <TopUserRecipesWidget themeColors={themeColors} />
                </Box>

                {/* Feed Column */}
                <Box
                    flexBasis={isDesktopScreen ? "42%" : "none"}
                    maxWidth="730px"
                    minWidth="30%"
                    mt={isDesktopScreen ? undefined : "2rem"}
                    sx={{ justifyContent: "center" }}
                >
                    {/* <CreateRecipeWidget
                        picturePath={user.picturePath}
                        themeColors={themeColors}
                    /> */}
                    <Box m="0rem 0" />
                    <RecipesFeedWidget
                        userId={userId}
                        isProfile
                        themeColors={themeColors}
                    />
                </Box>

                {/* Friends & Ad Column */}
                <Box
                    display={isDesktopScreen ? "flex" : "none"}
                    justifyContent="right"
                    width="300px"
                    minWidth="270px"
                    height="100%"
                    mt={isDesktopScreen ? undefined : "2rem"}
                >
                    <FriendListWidget
                        userId={userId}
                        themeColors={themeColors}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
