// React
import { useState } from "react";

// MUI Components
import {
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme,
    ToggleButton,
} from "@mui/material";

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
    const { headingText, recipeText, recipeStepsPanel, recipeStepsPanelHover } =
        themeColors || {};
    return (
        <Box>
            <ToggleButton
                onClick={() => setEquipmentListOpen(!equipmentListOpen)}
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
                    p: "0.5rem 0.75rem",
                    borderRadius: "0.75rem 0.75rem 0 0",
                    border: "0",
                }}
            >
                <Typography
                    variant="h6"
                    // borderRadius="1.75rem"
                >
                    Equipment
                </Typography>
                {equipmentListOpen ? <RemoveIcon /> : <AddIcon />}
            </ToggleButton>

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
