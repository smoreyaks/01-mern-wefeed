import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Theme Light Dark Mode State
    mode: "light",
    theme: "default",

    // User State
    user: null,
    token: null,

    // Recipes State
    recipes: [],
    filter: "all",
    filteredRecipes: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Login
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.loggedInUser = action.payload.user;
            state.loggedInUser.friends = action.payload.user.friends;
            state.token = action.payload.token;
            // console.log("STATE LOG IN USER:", state.loggedInUser);
            // console.log("STATE LOGGED IN FRIENDS:", state.loggedInUser.friends);
        },

        // Logout
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.recipes = [];
            state.filter = "all";
        },
        // Dark & Light Mode
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },

        setIsFriendsListOpen: (state) => {
            state.isFriendsListOpen =
                state.isFriendsListOpen === true ? false : true;
        },

        // Themes
        setThemeDefault: (state, action) => {
            state.theme = action.payload.theme.default;
        },
        setThemeDessert: (state, action) => {
            state.theme = action.payload.theme.dessert;
        },
        setThemeDinner: (state, action) => {
            state.theme = action.payload.theme.dinner;
        },

        // Get User Friends
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },

        // Get User Friends
        setLoggedInFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },

        // Get User Recipes
        // Get All Recipes
        setAllRecipes: (state, action) => {
            state.recipes = action.payload.recipes;
        },

        // Get User Recipes
        setRecipe: (state, action) => {
            const updatedRecipes = state.recipes.map((recipe) => {
                if (recipe._id === action.payload.recipe._id) {
                    return action.payload.recipe;
                }
                return recipe;
            });
            state.recipes = updatedRecipes;
        },

        // CHECK, TEST STATE FOR FILTER
        setFilter: (state, action) => {
            state.filter = action.payload;

            // let switchFilter = state.filter;
            // console.log("STATE RECIPES:", state.recipes);
            // const stateRecipes = state.recipes;

            // const applyFilter = (recipeList, filter) => {
            //     console.log(`RECIPES: ${recipeList}`);
            //     switch (filter) {
            //         case "all":
            //             console.log(`FILTER - ${filter}`);
            //             return recipeList;

            //         case "main":
            //             console.log(`FILTER - ${filter}`);
            //             const updatedRecipes = recipeList.map((recipe) => {
            //                 console.log("RECIPETYPE:", recipe);
            //                 if (recipe.recipeType === filter) {
            //                     console.log("MAIN:", recipe);
            //                     return recipe;
            //                 }
            //                 return recipe;
            //             });
            //             state.recipes = updatedRecipes;
            //             return state.recipes;

            //         case "appetiser":
            //             console.log(`FILTER - ${filter}`);
            //             return recipeList;

            //         case "breakfast":
            //             console.log(`FILTER - ${filter}`);
            //             return recipeList;

            //         case "dessert":
            //             console.log(`FILTER - ${filter}`);
            //             return recipeList;

            //         case "drink":
            //             console.log(`FILTER - ${filter}`);
            //             return recipeList;

            //         default:
            //             return recipeList;
            //     }
            // };
            // applyFilter(stateRecipes, switchFilter);
        },

        // // Get User Posts
        // setPosts: (state, action) => {
        //     state.posts = action.payload.posts;
        // },
        // setPost: (state, action) => {
        //     const updatedPosts = state.recipes.map((post) => {
        //         if (post._id === action.payload.post._id)
        //             return action.payload.post;
        //         return post;
        //     });
        //     state.posts = updatedPosts;
        // },
    },
});

// const applyFilter = (recipes, filter) => {
//     console.log(`REDUCER - FILTEER: ${filter}, RECIPES: ${recipes}`);
//     switch (filter) {
//         case "all":
//             console.log(`FILTER - ${filter}`);
//             return recipes;

//         case "main":
//             console.log(`FILTER - ${filter}`);
//             return recipes.filter((item) => item.recipeType === filter);

//         case "appetiser":
//             console.log(`FILTER - ${filter}`);
//             return recipes.filter((item) => item.recipeType === filter);

//         case "breakfast":
//             console.log(`FILTER - ${filter}`);
//             return recipes.filter((item) => item.recipeType === filter);

//         case "dessert":
//             console.log(`FILTER - ${filter}`);
//             return recipes.filter((item) => item.recipeType === filter);

//         case "drink":
//             console.log(`FILTER - ${filter}`);
//             return recipes.filter((item) => item.recipeType === filter);

//         default:
//             return recipes;
//     }
// };

export const {
    setMode,
    setThemeDefault,
    setThemeDessert,
    setThemeDinner,
    setLogin,
    setLogout,
    setFriends,
    setAllRecipes,
    setRecipe,
    setFilter,
    setIsFriendsListOpen,
    // setPosts,
    // setPost,
} = authSlice.actions;
export default authSlice.reducer;
