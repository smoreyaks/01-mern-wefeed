// React
import { useState } from "react";

// MUI Components
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Components
import FlexBetween from "./FlexBetween";

const IngredientList = ({ ingredients }) => {
    const [ingredientListOpen, setIngredientListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    return (
        <Box
            sx={{
                // p: "0.25rem",
                m: "0.5rem 0",
                backgroundColor: main,
                borderRadius: "0.75rem",
            }}
        >
            <FlexBetween>
                <Typography variant="h5" borderRadius="0.75rem">
                    Ingredients
                </Typography>
                <IconButton
                    onClick={() => setIngredientListOpen(!ingredientListOpen)}
                >
                    {ingredientListOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </FlexBetween>
            {ingredients.map((ingredient) =>
                ingredientListOpen ? (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 2fr)",
                            gap: "0.5rem",

                            borderRadius: "0.75rem",
                        }}
                    >
                        <Box gridColumn="1">
                            <Typography
                                key={ingredient._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    // mr: "0.5rem",
                                }}
                            >
                                {ingredient.qty}
                            </Typography>
                        </Box>
                        <Box gridColumn="2">
                            <Typography key={ingredient._id}>
                                {ingredient.element}
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <Box display="none" />
                )
            )}
        </Box>
    );
};

export default IngredientList;
