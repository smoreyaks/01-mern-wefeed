// React Packages
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

// MUI
import {
    Box,
    Typography,
    Divider,
    Icon,
    useTheme,
    CircularProgress,
} from "@mui/material";

// MUI Icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const TopUserRecipesWidget = ({ themeColors }) => {
    // ID
    const { userId } = useParams();

    // State
    const [userRecipes, setUserRecipes] = useState(null);
    const [user, setUser] = useState(null);

    // Token
    const token = useSelector((state) => state.token);

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const light = palette.default.primary.light;

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

    // Trophy Colors
    const gold = palette.trophy.gold;
    const silver = palette.trophy.silver;
    const bronze = palette.trophy.bronze;
    const main = palette.default.neutral.main;

    // API Calls
    // Get User Data
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

    // getUserRecipes API Call
    const getUserRecipes = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUserRecipes(data);
    };

    useEffect(() => {
        getUser();
        getUserRecipes();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!user) {
        return null;
    }

    const { totalRecipeLikes, recipesPosted } = user;
    console.log("totalRecipeLikes:", user);
    return (
        // <>
        <WidgetWrapper>
            {/* Top Recipe Stat Title */}
            {user ? (
                <Box>
                    <FlexBetween gap="0.5rem" pb="1.1rem">
                        <FlexBetween gap="1rem">
                            <Box>
                                <Typography
                                    variant="h4"
                                    color={headingText}
                                    fontWeight="bold"
                                    fontSize="1rem"
                                    fontFamily="Montserrat"
                                    sx={{
                                        "&:hover": {
                                            color: headingText,
                                        },
                                        mb: "0.5rem",
                                    }}
                                >
                                    Most Popular
                                </Typography>
                                <FlexBetween gap="0.5rem">
                                    <Typography color={headingText}>
                                        Recipe Impressions {totalRecipeLikes}
                                    </Typography>
                                    <Box
                                        color={headingText}
                                        display="flex"
                                        justifyContent="flex-start"
                                        gap="1rem"
                                    >
                                        Recipes
                                        <Typography color={headingText}>
                                            {recipesPosted}
                                        </Typography>
                                    </Box>
                                </FlexBetween>
                            </Box>
                        </FlexBetween>
                    </FlexBetween>

                    <Divider />

                    {/* Top Recipe Stats */}
                    <Box p="1rem 0">
                        {/* First Place */}
                        <FlexBetween pb="0.5rem">
                            <FlexBetween gap="0.5rem">
                                <Icon>
                                    <EmojiEventsIcon sx={{ color: gold }} />
                                </Icon>
                                <Typography color={headingText}>
                                    First Recipe
                                </Typography>
                            </FlexBetween>
                            <Typography>1ST</Typography>
                        </FlexBetween>

                        {/* Second Place */}
                        <FlexBetween pb="0.5rem">
                            <FlexBetween gap="0.5rem">
                                <EmojiEventsIcon sx={{ color: silver }} />
                                <Typography color={headingText}>
                                    Second Recipe
                                </Typography>
                            </FlexBetween>
                            <Typography>2ND</Typography>
                        </FlexBetween>

                        {/* Third Place */}
                        <FlexBetween pb="0.5rem">
                            <FlexBetween gap="0.5rem">
                                <EmojiEventsIcon sx={{ color: bronze }} />
                                <Typography color={headingText}>
                                    Third Recipe{" "}
                                </Typography>
                            </FlexBetween>
                            <Typography>3RD</Typography>
                        </FlexBetween>
                    </Box>
                </Box>
            ) : (
                <Box
                    backgroundColor={backgroundMain}
                    borderRadius="0.75rem 0.75rem 0.75rem 0.75rem"
                    p="1.5rem"
                    my="1rem"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress
                        size="4rem"
                        thickness={18}
                        sx={{
                            color: buttonHover,
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                        }}
                    />
                </Box>
            )}
        </WidgetWrapper>
        // </>
    );
};

export default TopUserRecipesWidget;
