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
    const followerIconOutline = palette.default.primaryTwo.main;
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

    // Panel / Subsection Main
    const recipeTextPanel = palette.default.neutral.main;
    const mainBackPanel = palette.default.neutral.main;
    const recipeStepsPanel = palette.default.primary.light;
    const panelMain = palette.default.primary.light;

    // Panel / Subsection Hover
    const recipeStepsPanelHover = palette.default.primaryTwo.light;
    const panelMainHover = palette.default.primaryTwo.light;

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
    };

    // Media Query
    const isDesktopScreen = useMediaQuery("(min-width:1000px)");

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
                padding="7rem 6% 0 6%"
                display={isDesktopScreen ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box display={isDesktopScreen ? "26%" : "none"}>
                    <UserWidget
                        userId={_id}
                        picturePath={picturePath}
                        themeColors={themeColors}
                    />
                </Box>
                <Box
                    flexBasis={isDesktopScreen ? "42%" : "none"}
                    mt={isDesktopScreen ? undefined : "2rem"}
                >
                    <CreateRecipeWidget
                        picturePath={picturePath}
                        themeColors={themeColors}
                    />
                    <RecipesFeedWidget userId={_id} themeColors={themeColors} />
                </Box>
                {isDesktopScreen && (
                    <Box flexBasis="26%">
                        <AdvertWidget themeColors={themeColors} />
                        <Box m="2rem 0" />
                        <FriendListWidget
                            userId={_id}
                            themeColors={themeColors}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default HomePage;
