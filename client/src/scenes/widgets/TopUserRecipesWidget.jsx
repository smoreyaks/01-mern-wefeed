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

const TopUserRecipesWidget = () => {
    const { userId } = useParams();

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const main = palette.default.neutral.main;

    // getRecipes API Call
    const getTopUserRecipes = async () => {
        const response = await fetch(
            `http://localhost:3005/users/${userId}/recipes`
        );
    };

    useEffect(() => {
        getTopUserRecipes();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <WidgetWrapper>
            <FlexBetween gap="0.5rem" pb="1.1rem">
                <FlexBetween gap="1rem">
                    <Box>
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.default.primary.light,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Most Popular
                        </Typography>
                        <Typography color={medium}>
                            Total Likes
                            {/* {totalRecipesLikes} */}
                        </Typography>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Divider />

            <Box p="1rem 0">
                <FlexBetween>
                    <Typography color={medium}>1. First Recipe</Typography>
                    <Typography>1ST</Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={medium}>2. Second Recipe 2ND</Typography>
                    <Typography>2ND</Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={medium}>3. Third Recipe 3RD</Typography>
                    <Typography>3RD</Typography>
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    );
};

export default TopUserRecipesWidget;
