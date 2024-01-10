import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../state";
import { useState } from "react";

// RecipePost
import RecipePostWidget from "./RecipePostWidget";

const RecipesFeedWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    // const friends = useSelector((state) => state.user.friends);

    const [user, setUser] = useState(null);
    const recipes = useSelector((state) => state.recipes);

    // ORIGINAL UNCHANGED API CALL - getRecipes
    // const getRecipes = async () => {
    //     const response = await fetch(
    //         "https://server-vukx.onrender.com/recipes",
    //         {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${token}` },
    //         }
    //     );
    //     const data = await response.json();
    //     dispatch(setRecipes({ recipes: data }));
    // };
    const getRecipes = async () => {
        const response = await fetch(
            "https://server-vukx.onrender.com/recipes",
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setRecipes({ recipes: data }));
    };

    // ORIGINAL UNCHANGED API CALL - getUser
    // const getUser = async () => {
    //     const response = await fetch(
    //         `https://server-vukx.onrender.com/users/${userId}`,
    //         {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${token}` },
    //         }
    //     );
    //     const data = await response.json();
    //     setUser(data);
    // };

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

    // ORIGINAL UNCHANGED API CALL - getUserRecipes
    // const getUserRecipes = async () => {
    //     const response = await fetch(
    //         `https://server-vukx.onrender.com/recipes/${userId}/recipes`,
    //         {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${token}` },
    //         }
    //     );
    //     const data = await response.json();
    //     dispatch(setRecipes({ recipes: data }));
    // };

    const getUserRecipes = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setRecipes({ recipes: data }));
    };

    // Renders either All Recipes or select Profile Recipes
    useEffect(() => {
        if (isProfile) {
            // getUserRecipes(); // Doesn't function - Original
            // getUserRecipes();
            getUser();
        } else {
            // getRecipes(); // Doesn't function - Original
            // getUser();
            getUser(); // Works as intended
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) return null;

    // const { formattedFriends } = friends || {};
    console.log("USER FEED USER:", user);
    // console.log("USER FEED FRIEND:", friends);

    return (
        <>
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
                    />
                )
            )}
        </>
    );
};

export default RecipesFeedWidget;
