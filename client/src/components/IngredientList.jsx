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
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// Components
import FlexBetween from "./FlexBetween";

const IngredientList = ({ ingredients, themeColors }) => {
    // State
    const [ingredientListOpen, setIngredientListOpen] = useState(false);

    // Number of Ingredients
    const ingredientCount = Object.keys(ingredients).length;

    // Theme
    const { palette } = useTheme();
    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        buttonLight2,
        buttonHover,
    } = themeColors || {};

    // Homogenize Quantities to Lower Case
    let qtyListLower = ingredients.map((quantity) => {
        let qtyLower = quantity["qty"].toLowerCase(); // Qty String Array Conversion & Lowercase
        return qtyLower;
    });

    /* Capitalise First Letter of Ingredient Items */
    let ingredientsListCapitalised = ingredients.map((ingredient) => {
        let ingredientCapitalised = [];
        let ingredientString = ingredient["element"]; // Element Object to String Array Conversion
        let ingredientSplit = ingredientString.toLowerCase().split(" "); // Break String Array into Words

        // Capitalise
        for (let i = 0; i < ingredientSplit.length; i++) {
            ingredientCapitalised[i] =
                ingredientSplit[i][0].toUpperCase() +
                ingredientSplit[i].substr(1);
        }
        return ingredientCapitalised.join(" ");
    });

    // New Qty & Ingreidient Array Assembly
    let combinedIngQtyArr = [...qtyListLower, ...ingredientsListCapitalised];
    let finalIngArr = [];
    for (let i = 0; i < combinedIngQtyArr.length / 2; i++) {
        finalIngArr.push(
            combinedIngQtyArr[i] +
                " " +
                combinedIngQtyArr[i + combinedIngQtyArr.length / 2]
        );
    }
    // console.log("FINAL ARRAY:", finalIngArr);

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
                        backgroundColor: buttonHover,
                        cursor: "pointer",
                    },
                    width: "100%",
                    p: "0.25rem  0.75rem",
                    borderRadius: "0rem",
                    border: "0",
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    fontFamily="Montserrat"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    // borderRadius="1.75rem"
                    sx={{ color: headingText }}
                >
                    {ingredientCount} Ingredients
                    {/* INGREDIENTS */}
                </Typography>

                {ingredientListOpen ? (
                    <KeyboardArrowDownRoundedIcon
                        fontSize="large"
                        sx={{ color: headingText }}
                    />
                ) : (
                    <KeyboardArrowRightRoundedIcon
                        fontSize="large"
                        sx={{ color: headingText }}
                    />
                )}
            </ToggleButton>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "0.5rem",
                    m: "0",
                    p: "0rem 2rem",
                    borderRadius: "0rem",
                    backgroundColor: recipeStepsPanel,
                    width: "auto",
                }}
            >
                <Box>
                    {finalIngArr.map((element) =>
                        ingredientListOpen ? (
                            <Box
                                key={element}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    borderRadius: "0.5rem",
                                    width: "auto",
                                    color: headingText,
                                }}
                            >
                                {element}
                            </Box>
                        ) : (
                            <Box display="none" />
                        )
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default IngredientList;
