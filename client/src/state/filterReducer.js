// Initial Filter State
const initialState = {
    // Filter State
    filterMode: "all",
    filteredRecipeData: [],
};

// actions.js
export const SET_FILTER = "SET_FILTER";
export const SET_FILTERED_DATA = "SET_FILTERED_DATA";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setFilteredData = (filteredData) => ({
    type: SET_FILTERED_DATA,
    payload: filteredData,
});

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        case SET_FILTERED_DATA:
            return {
                ...state,
                filteredData: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
