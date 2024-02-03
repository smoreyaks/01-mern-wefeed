// Initial Filter State ✅
const initialState = {
    filterMode: "all",
    recipes: [],
    filteredRecipes: [],
};

// Actions ✅
export const SET_FILTER = "SET_FILTER";
export const SET_FILTERED_RECIPES = "SET_FILTERED_RECIPES";

// Filter State ✅
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

// Filtered Recipes State ✅
export const setFilteredRecipes = (filteredRecipes) => ({
    type: SET_FILTERED_RECIPES,
    payload: filteredRecipes,
});

// Reducer ✅
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
                filteredRecipes: applyFilter(state.recipes, action.payload),
            };
        default:
            return state;
    }
};

const applyFilter = (recipes, filter) => {
    console.log(`REDUCER - FILTEER: ${filter}, RECIPES: ${recipes}`);
    switch (filter) {
        case "all":
            console.log(`FILTER - ${filter}`);
            return recipes;

        case "main":
            console.log(`FILTER - ${filter}`);
            return recipes.filter((item) => item.recipeType === filter);

        case "appetiser":
            console.log(`FILTER - ${filter}`);
            return recipes.filter((item) => item.recipeType === filter);

        case "breakfast":
            console.log(`FILTER - ${filter}`);
            return recipes.filter((item) => item.recipeType === filter);

        case "dessert":
            console.log(`FILTER - ${filter}`);
            return recipes.filter((item) => item.recipeType === filter);

        case "drink":
            console.log(`FILTER - ${filter}`);
            return recipes.filter((item) => item.recipeType === filter);

        default:
            return recipes;
    }
};

export default filterReducer;
