import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "themeOption",
    initialState: {
        defaultTheme: true,
    },
    reducers: {
        themeSelect: (state) => {
            state.themeSelected = state.defaultTheme;
        },
    },
});

export const { themeSelect } = themeSlice.actions;

export default themeSlice.reducer;
