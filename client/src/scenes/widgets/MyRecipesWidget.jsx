// React Packages
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

// MUI
import { Box, Typography, Divider, useTheme } from "@mui/material";

const MyRecipesWidget = () => {
    const { userId } = useParams();

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const main = palette.default.neutral.main;

    // getRecipes API Call
    const getUserRecipes = async () => {
        const response = await fetch(
            `http://localhost:3005/users/${userId}/recipes`
        );
    };

    useEffect(() => {
        getUserRecipes();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <Box></Box>;
};

export default MyRecipesWidget;
