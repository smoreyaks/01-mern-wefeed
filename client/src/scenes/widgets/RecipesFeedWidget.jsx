// React Components

import { useState, useEffect } from "react";

// Redux & Local State
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes, setRecipe, setPosts } from "../../state";

// MUI Components
import { Box, Typography } from "@mui/material";

// Custom Components
import RecipePostWidget from "./RecipePostWidget";

const RecipesFeedWidget = ({
    userId,
    isProfile = false,
    themeColors,
    // user,
}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    // Theme Destructure
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

    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState(null);

    const recipes = useSelector((state) => state.recipes);
    console.log("STATE - Recipes:", recipes);
    // Testing State
    const [userTest, setUserTest] = useState(null);
    const [userRecipesTest, setUserRecipesTest] = useState(null);
    const [recipesTest, setRecipesTest] = useState(null);
    const [allRecipesTest, setAllRecipesTest] = useState(null);

    // Retrieves All Recipe Data -  ✅ Works Correctly
    const getRecipes = async () => {
        const response = await fetch(
            "https://server-vukx.onrender.com/recipes",
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setAllRecipes({ recipes: data }));
    };

    // Retrieves User Data for Selected User -  ✅ Works Correctly
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

    // Retrieves Recipe Data for Selected User -  ✅ Works Correctly
    const getUserRecipes = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setAllRecipes({ recipes: data }));
    };

    // Renders either All Recipes or select Profile Recipes
    useEffect(() => {
        if (isProfile) {
            getUser();
            getUserRecipes();
        } else {
            getUser();
            getRecipes();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // API Testing
    console.log("getRecipesTest", recipesTest); // ✅
    console.log("getUserTest", userTest || "No Data Found"); // ✅
    console.log("getUserRecipesTest", userRecipesTest); // ✅

    return (
        <>
            {user ? (
                <Box>
                    {recipes.map(
                        ({
                            _id,
                            user,
                            userId,
                            firstName,
                            lastName,
                            occupation,
                            userPicturePath,
                            recipeTitle,
                            picturePath,
                            ingredients,
                            equipment,
                            prepTime,
                            cookTime,
                            servings,
                            spiceLevel,
                            steps,
                            notes,
                            tags,
                            likes,
                            recommendations,
                            saves,
                            shares,
                            comments,
                        }) => (
                            <RecipePostWidget
                                key={_id}
                                user={user}
                                recipeId={_id}
                                recipeUserId={userId}
                                name={`${firstName} ${lastName}`}
                                userPicturePath={userPicturePath}
                                occupation={occupation}
                                recipeTitle={recipeTitle}
                                picturePath={picturePath}
                                ingredients={ingredients}
                                equipment={equipment}
                                prepTime={prepTime}
                                cookTime={cookTime}
                                servings={servings}
                                spiceLevel={spiceLevel}
                                steps={steps}
                                notes={notes}
                                tags={tags}
                                likes={likes}
                                recommendations={recommendations}
                                saves={saves}
                                shares={shares}
                                comments={comments}
                                themeColors={themeColors}
                            />
                        )
                    )}
                </Box>
            ) : (
                <Box
                    backgroundColor={backgroundMain}
                    borderRadius="0.75rem 0.75rem 0.75rem 0.75rem"
                    p="1.5rem"
                    my="1rem"
                >
                    <Typography
                        fontWeight="bold"
                        fontSize="1rem"
                        color={headingText}
                        textAlign="center"
                        borderRadius="0.75rem 0.75rem 0.75rem 0.75rem"
                        backgroundColor={recipeStepsPanel}
                        p="1rem"
                        // m="1rem"
                    >
                        Error: No User Found
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default RecipesFeedWidget;
