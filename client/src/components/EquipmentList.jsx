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
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// Components
import FlexBetween from "./FlexBetween";

const EquipmentList = ({ equipment, themeColors }) => {
    // Equipment Count
    const equipmentCount = Object.keys(equipment).length;

    // State
    const [equipmentListOpen, setEquipmentListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;
    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        recipeStepsPanelHover,
        buttonLight,
    } = themeColors || {};

    /* Capitalise First Letter of Equipment Item */
    let equipListCorrected = equipment.map((e) => {
        let equipSplit = e.toLowerCase().split(" ");
        for (let i = 0; i < equipSplit.length; i++) {
            equipSplit[i] =
                equipSplit[i][0].toUpperCase() + equipSplit[i].substr(1);
        }
        return equipSplit.join(" ");
    });
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
                    p: "0.25rem 0.75rem",
                    borderRadius: "0rem 0rem 0 0",
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
                >
                    {equipmentCount} Tools & Utensils
                </Typography>

                {equipmentListOpen ? (
                    <KeyboardArrowDownRoundedIcon fontSize="large" />
                ) : (
                    <KeyboardArrowRightRoundedIcon fontSize="large" />
                )}
            </ToggleButton>

            {equipListCorrected.map((equip) =>
                equipmentListOpen ? (
                    <Box
                        sx={{
                            display: "flex",
                            // gridTemplateColumns: "30% 70%",
                            gap: "0.5rem",
                            m: "0",
                            p: "0 0.75rem",
                            // p: "0.5rem 0.5rem 0 0.5rem",
                            borderRadius: "0rem",
                            backgroundColor: recipeStepsPanel,
                        }}
                    >
                        <Box>
                            <Typography
                                key={equip._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    // background: "#eeceee",
                                    borderRadius: "0.5rem",
                                    width: "1.25rem",
                                }}
                            ></Typography>
                        </Box>
                        <Box>
                            <Typography
                                key={equip._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    width: "100%",
                                }}
                            >
                                {equip}
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

export default EquipmentList;
