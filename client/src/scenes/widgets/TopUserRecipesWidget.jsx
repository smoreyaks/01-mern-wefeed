// React Packages
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import RecipeScore from "../../components/RecipeScore.js";
// MUI
import {
    Box,
    Typography,
    Divider,
    Icon,
    useTheme,
    CircularProgress,
    Tooltip,
    Zoom,
} from "@mui/material";

// MUI Icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const TopUserRecipesWidget = ({ themeColors }) => {
    // ID
    const { userId } = useParams();

    // State
    const [userRecipes, setUserRecipes] = useState(null);
    const [user, setUser] = useState(null);

    /// Redux State
    const recipes = useSelector((state) => state.recipes);
    const mode = useSelector((state) => state.mode);
    const token = useSelector((state) => state.token);

    // Theme Colors
    const { palette } = useTheme();

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

    // Trophy Colors
    const gold = palette.trophy.gold;
    const silver = palette.trophy.silver;
    const bronze = palette.trophy.bronze;

    // API Calls
    // Get User Data

    // getUserRecipes API Call

    // Typically have loading component while user waits

    const { recipeTitle, likes, recommendations, recipeType } = recipes;
    // const firstRecipe = recipes[0];
    // const secondRecipe = recipes[1];
    // const thirdRecipe = recipes[2];

    let newArr = [];
    // const likeCount = Object.keys(likes).length;
    const likeCount = 0;
    // const recommendationCount = Object.keys(recommendations).length;
    let newScoreArr = [];

    for (let i = 0; i < recipes.length; i++) {
        newArr.push(recipes[i].recipeTitle);
    }

    console.log("NEW ARR:", newArr);

    console.log("USER RECIPE LIST:", recipes);
    return (
        <WidgetWrapper borderColor={widgetBorder}>
            {/* Top Recipe Stat Title */}
            {recipes ? (
                <Box sx={{ width: "100%", height: "100%" }}>
                    <FlexBetween gap="0.5rem" pb="0rem">
                        <FlexBetween gap="1rem">
                            <Box>
                                <Typography
                                    variant="h4"
                                    color={headingText}
                                    fontWeight="bold"
                                    fontSize="1rem"
                                    fontFamily="Montserrat"
                                    sx={{
                                        color: followerIconOutline,
                                        "&:hover": {
                                            color: followerIconOutline,
                                        },
                                        mb: "0.5rem",
                                    }}
                                >
                                    Most Popular
                                </Typography>
                            </Box>
                        </FlexBetween>
                    </FlexBetween>

                    <Divider />

                    {/* Top Recipe Stats */}
                    <Box p="0rem 0">
                        {/* First Place */}
                        {/* {console.log("RECIPES")} */}

                        {/* {newArr.push(recipes[0].recipeTitle)} */}

                        {/* {recipes.map((r) => (
                            <Typography _id={recipeTitle}>{}</Typography>
                        ))} */}
                        {recipes.length > 0 ? (
                            recipes.map(
                                ({
                                    recipeTitle,
                                    likes,
                                    recommendations,
                                    recipes,
                                }) => (
                                    <RecipeScore
                                        themeColors={themeColors}
                                        recipeTitle={recipeTitle}
                                        likes={likes}
                                        recommendations={recommendations}
                                        recipes={recipes}
                                    />
                                )
                            )
                        ) : (
                            <Box
                                backgroundColor={backgroundMain}
                                borderRadius="0.75rem 0.75rem 0.75rem 0.75rem"
                                p="0rem"
                                // my="0.5rem"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // minWidth: "452px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        p: "0.5rem 0.5rem 0rem 0.5rem",
                                        borderRadius:
                                            "0.75rem 0.75rem 0.75rem 0.75rem",
                                        // backgroundColor:
                                        //     mode === "dark"
                                        //         ? recipeStepsPanel
                                        //         : backgroundPrimary,
                                        color: followerIconOutline,
                                        width: "100%",
                                        // width: "auto",
                                        textAlign: "center",
                                    }}
                                >
                                    No recipes posted yet.
                                    {/* <Typography
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Come back another time!
                                    </Typography> */}
                                </Typography>
                            </Box>
                        )}
                        {/* Second Place */}
                        {/* <FlexBetween pb="0.5rem">
                            <FlexBetween gap="0.5rem">
                                <EmojiEventsIcon sx={{ color: silver }} />
                                <Typography color={followerIconOutline}>
                                    Second Recipe
                                </Typography>
                            </FlexBetween>
                            <Typography sx={{ color: followerIconOutline }}>
                                2ND
                            </Typography>
                        </FlexBetween> */}

                        {/* Third Place */}
                        {/* <FlexBetween pb="0.5rem">
                            <FlexBetween gap="0.5rem">
                                <EmojiEventsIcon sx={{ color: bronze }} />
                                <Typography sx={{ color: followerIconOutline }}>
                                    Third Recipe
                                </Typography>
                            </FlexBetween>
                            <Typography sx={{ color: followerIconOutline }}>
                                3RD
                            </Typography>
                        </FlexBetween> */}
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
                        }}
                    />
                </Box>
            )}
        </WidgetWrapper>
    );
};

export default TopUserRecipesWidget;
