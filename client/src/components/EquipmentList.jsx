// React
import { useState } from "react";

// MUI Components
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Components
import FlexBetween from "./FlexBetween";

const EquipmentList = ({ equipment, themeColors }) => {
    // State
    const [equipmentListOpen, setEquipmentListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;
    const { headingText, recipeText, recipeStepsPanel } = themeColors;
    return (
        <Box
            sx={{
                // p: "0.25rem 0.5rem",
                m: "0.5rem 0",
                backgroundColor: main,
                borderRadius: "0.75rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: recipeStepsPanel,
                    borderRadius: "0.75rem",
                    p: "0.5rem",
                }}
            >
                <IconButton
                    onClick={() => setEquipmentListOpen(!equipmentListOpen)}
                >
                    <Typography
                        p="0.5rem 0"
                        variant="h5"
                        borderRadius="0.75rem"
                    >
                        Equipment
                    </Typography>
                    {equipmentListOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            {equipment.map((equip) =>
                equipmentListOpen ? (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "0.5rem",
                        }}
                    >
                        {equip}
                    </Box>
                ) : (
                    <Box display="none" />
                )
            )}
        </Box>
    );
};

export default EquipmentList;
