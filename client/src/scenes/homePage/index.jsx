import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";
import CreateRecipeWidget from "../widgets/CreateRecipeWidget";
import RecipesFeedWidget from "../widgets/RecipesFeedWidget";
import AdvertWidget from "../widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";
import { useTheme } from "@emotion/react";

const HomePage = () => {
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
        widgetBorder,
        navbarMain,
    };

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

    // Local State
    const { _id, picturePath } = useSelector((state) => state.user);
    // console.log("BG_ID:", _id);
    // console.log("BG_PICPATH:", picturePath);

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
                        : isMediumScreen
                        ? "4rem 1rem 0 1rem"
                        : "2.75rem 0.5rem 0 0.5rem"
                }
                display="flex"
                gap="0.5rem"
                justifyContent={isDesktopScreen ? "space-between" : "center"}
            >
                {/* User Column */}
                <Box
                    display={isDesktopScreen ? "26%" : "none"}
                    flexBasis="26%"
                    width="300px"
                    maxWidth="300px"
                    minWidth="10%"
                >
                    <UserWidget
                        userId={_id}
                        picturePath={picturePath}
                        themeColors={themeColors}
                    />
                    <Box m="2rem 0" />
                    <AdvertWidget themeColors={themeColors} />
                </Box>

                {/* Feed Column */}
                <Box
                    flexBasis={isDesktopScreen ? "42%" : "none"}
                    maxWidth={isDesktopScreen ? "730px" : "100%"}
                    mt={isDesktopScreen ? undefined : "2rem"}
                >
                    <CreateRecipeWidget
                        picturePath={picturePath}
                        themeColors={themeColors}
                        isDesktopScreen={isDesktopScreen}
                        isMediumScreen={isMediumScreen}
                        isSmallScreen={isSmallScreen}
                    />
                    <RecipesFeedWidget userId={_id} themeColors={themeColors} />
                </Box>

                {/* Following */}
                {isDesktopScreen && (
                    <Box
                        display={isDesktopScreen ? "flex" : "none"}
                        flexDirection="column"
                        justifyContent="right"
                        width="300px"
                        minWidth="270px"
                        height="100%"
                    >
                        <Box sx={{ display: "flex", justifyContent: "right" }}>
                            <FriendListWidget
                                userId={_id}
                                themeColors={themeColors}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default HomePage;
