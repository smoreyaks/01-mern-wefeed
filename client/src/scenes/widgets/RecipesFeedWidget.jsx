import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../state";
import PostWidget from "./PostWidget";

// RecipePost
import RecipePostWidget from "./RecipePostWidget";

const RecipesFeedWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const token = useSelector((state) => state.token);

    const getRecipes = async () => {
        const response = await fetch("http://localhost:3005/recipes", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setRecipes({ recipes: data }));
    };

    const getUserRecipes = async () => {
        const response = await fetch(
            `http://localhost:3005/recipes/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setRecipes({ recipes: data }));
    };

    useEffect(() => {
        if (isProfile) {
            getUserRecipes();
        } else {
            getRecipes();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {recipes.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    userPicturePath,
                    title,
                    picturePath,
                    ingredients,
                    equipment,
                    prepTime,
                    cookTime,
                    servings,
                    spiceLevel,
                    // steps,
                    notes,
                    tags,
                    likes,
                    recommendations,
                    saves,
                    shares,
                    comments,
                }) => (
                    <RecipePostWidget
                        // <PostWidget
                        key={_id}
                        recipeId={_id}
                        recipeUserId={userId}
                        name={`${firstName} ${lastName}`}
                        userPicturePath={userPicturePath}
                        title={title}
                        picturePath={picturePath}
                        ingredients={ingredients}
                        equipment={equipment}
                        prepTime={prepTime}
                        cookTime={cookTime}
                        servings={servings}
                        spiceLevel={spiceLevel}
                        // steps={steps}
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
