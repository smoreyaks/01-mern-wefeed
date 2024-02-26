// React Components
import { useState, useEffect } from "react";

// Redux & Local State
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes, setRecipe, setPosts, setFriends } from "../../state";
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
        widgetBorder,
    } = themeColors || {};

    // State
    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState(null);

    // Local State
    const recipes = useSelector((state) => state.recipes);
    const filter = useSelector((state) => state.filter);
    const mode = useSelector((state) => state.mode);

    // Testing State
    // const [userTest, setUserTest] = useState(null);
    // const [userRecipesTest, setUserRecipesTest] = useState(null);
    // const [recipesTest, setRecipesTest] = useState(null);
    // // const [allRecipesTest, setAllRecipesTest] = useState(null);

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
    // TESTING  FUNCTION
    // Retrieves All Recipe Data -  ✅ Works Correctly

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
    let filteredRecipes = [];
    const applyFilter = (recipeList, recipeFilter) => {
        filteredRecipes = []; // Reset Filtered List before filter call

        const recipeTypeFilterFunction = () => {
            console.log(`FILTER - ${recipeFilter}`);
            recipeList.filter((recipe) => {
                recipe.recipeType.forEach((rt) => {
                    if (rt === recipeFilter) {
                        console.log("RECIPE TYPE:", recipe.recipeType);
                        filteredRecipes.push(recipe);
                        return filteredRecipes;
                    }
                });
            });
            console.log("NEW LIST RECIPE:", filteredRecipes);
        };

        switch (recipeFilter) {
            // Returns Updated Feed with all recipes
            case "all":
                console.log(`FILTER - ${recipeFilter}`);
                filteredRecipes = recipeList;
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Main Dishes
            case "main":
                recipeTypeFilterFunction();
                return filteredRecipes;

            // Returns updated feed with Appetisers
            case "appetiser":
                recipeTypeFilterFunction();
                return filteredRecipes;

            // Returns updated feed with Breakfast Dishes
            case "breakfast":
                recipeTypeFilterFunction();
                return filteredRecipes;

            // Returns updated feed with Dessert Dishes
            case "dessert":
                recipeTypeFilterFunction();
                return filteredRecipes;

            // Returns updated feed with Drinks & Cocktails
            case "drink":
                recipeTypeFilterFunction();
                return filteredRecipes;

            default:
                recipeTypeFilterFunction();
                return filteredRecipes;
        }
    };
    applyFilter(recipes, filter);

    // API Testing
    // console.log("getRecipesTest", recipesTest); // ✅
    // console.log("getUserTest", userTest || "No Data Found"); // ✅
    // console.log("getUserRecipesTest", userRecipesTest); // ✅

    // console.log("RFW - APPLY FILTER:", applyFilter(recipes, filter));
    // console.log("STATE RECIPES:", recipes.recipeId);
    return (
        <>
            {user ? (
                <Box>
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map(
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
                                    firstName={firstName}
                                    lastName={lastName}
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
                        )
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
                                minWidth: "452px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    p: "1rem",
                                    borderRadius:
                                        "0.75rem 0.75rem 0.75rem 0.75rem",
                                    backgroundColor:
                                        mode === "dark"
                                            ? recipeStepsPanel
                                            : backgroundPrimary,
                                    color: followerIconOutline,
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                Sorry! We couldn't find any{" "}
                                {filter === "all"
                                    ? ""
                                    : filter[0].toUpperCase() +
                                      filter.substring(1)}{" "}
                                recipes. Come back another time!
                            </Typography>
                        </Box>
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
                        minWidth: "452px",
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
        </>
    );
};

export default RecipesFeedWidget;
