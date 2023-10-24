import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../state";
import { useState } from "react";

// RecipePost
import RecipePostWidget from "./RecipePostWidget";

const RecipesFeedWidget = ({ userId, isProfile = false }) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const token = useSelector((state) => state.token);

    const getRecipes = async () => {
        const response = await fetch("http://localhost:3006/recipes", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setRecipes({ recipes: data }));
    };

    const getUser = async () => {
        const response = await fetch(`http://localhost:3006/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    const getUserRecipes = async () => {
        const response = await fetch(
            `http://localhost:3006/recipes/${userId}/recipes`,
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
            getUser();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) return null;
    console.log("USER Feed:", user);
    return (
        <>
            {recipes.map(
                ({
                    _id,
                    user,
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
                        title={title}
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
