import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    recipes: [],
    theme: "default",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        // Themes
        setThemeDefault: (state, action) => {
            state.theme = action.payload.theme;
        },
        setThemeDessert: (state, action) => {
            state.theme = action.payload.theme;
        },
        setThemeDinner: (state, action) => {
            state.theme = action.payload.theme;
        },

        // Login/Logout
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        // Get User Friends
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },
        // Get User recipes
        setRecipes: (state, action) => {
            state.recipes = action.payload.recipes;
        },
        setRecipe: (state, action) => {
            const updatedRecipes = state.recipes.map((recipe) => {
                if (recipe._id === action.payload.recipe._id)
                    return action.payload.recipe;
                return recipe;
            });
            state.recipes = updatedRecipes;
        },
    },
});

export const {
    setMode,
    setThemeDefault,
    setThemeDessert,
    setThemeDinner,
    setLogin,
    setLogout,
    setFriends,
    setRecipes,
    setRecipe,
} = authSlice.actions;
export default authSlice.reducer;
