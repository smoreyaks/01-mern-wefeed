// React Components
import { useState, useEffect } from "react";

// Redux & Local State
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes, setRecipe, setPosts } from "../../state";
import { setFilter } from "../../state/filterReducer";
import { connect } from "react-redux";

// MUI Components
import { Box, Typography, CircularProgress } from "@mui/material";

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

    // State
    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState(null);

    // Local State
    const recipes = useSelector((state) => state.recipes);
    const filter = useSelector((state) => state.filter);
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
    // TESTING  FUNCTIOn
    // Retrieves All Recipe Data -  ✅ Works Correctly
    const getMainRecipes = async () => {
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

    // FILTER TESTING
    console.log("STATE RECIPES:", recipes);

    const applyFilter = (recipeList, filter) => {
        console.log(`RECIPES: ${recipeList}`);
        switch (filter) {
            case "all":
                console.log(`FILTER - ${filter}`);
                return recipeList;

            case "main":
                console.log(`FILTER - ${filter}`);
                const updatedRecipes = recipeList.map((recipe) => {
                    console.log("RECIPE TYPE:", recipe.recipeType);
                    if (recipe.recipeType === filter) {
                        return recipe;
                    }
                    return recipe;
                });
            // console.log("RECIPETYPE:", recipe);
            // state.recipes = updatedRecipes;
            // return state.recipes;

            case "appetiser":
                console.log(`FILTER - ${filter}`);
                return recipeList;

            case "breakfast":
                console.log(`FILTER - ${filter}`);
                return recipeList;

            case "dessert":
                console.log(`FILTER - ${filter}`);
                return recipeList;

            case "drink":
                console.log(`FILTER - ${filter}`);
                return recipeList;

            default:
                return recipeList;
        }
    };
    applyFilter(recipes, filter);

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
                            getMainRecipes,
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
                                getMainRecipes={getMainRecipes}
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
        </>
    );
};

export default RecipesFeedWidget;
