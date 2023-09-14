import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
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
        // Get User Posts
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id)
                    return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
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
    setPosts,
    setPost,
} = authSlice.actions;
export default authSlice.reducer;
