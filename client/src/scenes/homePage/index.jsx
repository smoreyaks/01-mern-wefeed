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
    // Theme
    const { palette } = useTheme();
    const whiteText = palette.default.neutralGrey.white;
    const textHover = palette.default.primaryTwo.main;
    const primary = palette.default.primary.main;
    const headingText = palette.default.neutralGrey.white;
    const recipeText = palette.default.neutral.main;
    const recipeStepsPanel = palette.default.primary.light;
    const followerIconOutline = palette.default.primaryTwo.main;
    const followerIconBack = palette.default.primaryOne.main;
    const followerIconBackHover = palette.default.primaryOne.light;
    const recipeTextPanel = palette.default.neutral.main;
    const mainBackPanel = palette.default.neutral.main;

    const themeColors = {
        headingText,
        recipeText,
        recipeStepsPanel,
        textHover,
        whiteText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
    };

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);
    // console.log("BG_IMAGE:", backgroundThemeImg);
    console.log("BG_ID:", _id);
    console.log("BG_PICPATH:", picturePath);

    return (
        <Box>
            <Navbar userId={_id} picturePath={picturePath} />
            <Box
                width="100%"
                padding="7rem 6% 0 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget
                        userId={_id}
                        picturePath={picturePath}
                        themeColors={themeColors}
                    />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <CreateRecipeWidget
                        picturePath={picturePath}
                        themeColors={themeColors}
                    />
                    <RecipesFeedWidget userId={_id} />
                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis="26%">
                        <AdvertWidget />
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
