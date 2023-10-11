import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

const IngredientList = ({ ingredients }) => {
    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    return (
        <Box
            sx={{
                p: "0 0.5rem",
                mt: "0.5rem",
                backgroundColor: main,
            }}
        >
            <Typography p=".5rem 0">
                Ingredients
                {ingredients.map((ingredient) => (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 2fr)",
                            gap: "0.5rem",
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
                ))}
            </Typography>
        </Box>
    );
};

export default IngredientList;
