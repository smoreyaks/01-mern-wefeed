import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";
import FriendListWidget from "../widgets/FriendListWidget";

// Posts
// import CreatePostWidget from "../widgets/CreatePostWidget";
// import PostsFeedWidget from "../widgets/PostsFeedWidget";

// Recipes
import RecipesFeedWidget from "../widgets/RecipesFeedWidget";
import CreateRecipeWidget from "../widgets/CreateRecipeWidget";
import RecipePostWidget from "../widgets/RecipePostWidget";

import TopUserRecipesWidget from "../widgets/TopUserRecipesWidget";

const ProfilePage = () => {
    // ---------- Theme ----------

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
    const backgroundMain = palette.default.primaryOne.navbar;

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
        widgetBorder,
    };

    const { _id, picturePath } = useSelector((state) => state.user);

    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

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
                padding="7rem 6% 0 6%"
                display={isDesktopScreen ? "flex" : "block"}
                gap="2rem"
                justifyContent="center"
            >
                <Box
                    // flexBasis={isDesktopScreen ? "26%" : undefined}
                    display={isDesktopScreen ? "26%" : "none"}
                >
                    <UserWidget
                        userId={userId}
                        picturePath={user.picturePath}
                        themeColors={themeColors}
                    />
                    <Box m="2rem 0" />
                    <TopUserRecipesWidget themeColors={themeColors} />
                </Box>
                <Box
                    flexBasis={isDesktopScreen ? "42%" : undefined}
                    mt={isDesktopScreen ? undefined : "2rem"}
                >
                    <CreateRecipeWidget
                        picturePath={user.picturePath}
                        themeColors={themeColors}
                    />
                    <Box m="2rem 0" />
                    <RecipesFeedWidget
                        userId={userId}
                        isProfile
                        themeColors={themeColors}
                    />
                    {/* <RecipePostWidget userId={userId} isProfile /> */}
                </Box>
                <Box
                    display={isDesktopScreen ? "26%" : "none"}
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
