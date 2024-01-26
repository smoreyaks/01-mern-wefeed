import { configureStore } from "@reduxjs/toolkit";
import themeOption from "./theme/themeSlice";

export default configureStore({
    reducer: {
        themeOption,
    },
});
