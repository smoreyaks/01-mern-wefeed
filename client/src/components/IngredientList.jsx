// React
import { useState } from "react";

// MUI Components
import {
    Box,
    Button,
    Divider,
    IconButton,
    ToggleButton,
    Typography,
    useTheme,
} from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Components
import FlexBetween from "./FlexBetween";

const IngredientList = ({ ingredients, themeColors }) => {
    const [ingredientListOpen, setIngredientListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;
    const { headingText, recipeText, recipeStepsPanel, recipeStepsPanelHover } =
        themeColors || {};

    /* Capitalise First Letter of Ingredient Items */
    let ingredientsListCorrected = ingredients.map((ingredient) => {
        let ingredientSplit = ingredient.toLowerCase().split(" ");
        for (let i = 0; i < ingredientSplit.length; i++) {
            ingredientSplit[i] =
                ingredientSplit[i][0].toUpperCase() +
                ingredientSplit[i].substr(1);
        }
        return ingredientSplit.join(" ");
    });

    return (
        <Box>
            <ToggleButton
                onClick={() => setIngredientListOpen(!ingredientListOpen)}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: recipeStepsPanel,
                    "&:hover": {
                        backgroundColor: recipeStepsPanelHover,
                        cursor: "pointer",
                    },
                    width: "100%",
                    // m: "0.5rem 0",
                    p: "0.5rem  0.75rem",
                    borderRadius: "0rem",
                    border: "0",
                    // borderTop: `1 solid ${palette.default.neutralGrey[900]}`,
                }}
            >
                <Typography
                    variant="h6"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    // borderRadius="1.75rem"
                >
                    Ingredients
                </Typography>
                {ingredientListOpen ? <RemoveIcon /> : <AddIcon />}
            </ToggleButton>

            {ingredientsListCorrected.map((ingredient) =>
                ingredientListOpen ? (
                    <Box
                        sx={{
                            display: "flex",
                            gridTemplateColumns: "12.5%, 87.5%",
                            gap: "0.25rem",
                            // m: "0 0 0.5rem 0",
                            mx: "0",
                            p: "0rem 0.5rem",
                            // borderRadius: "0.75rem",
                            backgroundColor: recipeStepsPanel,
                            width: "100%",
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
