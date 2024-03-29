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
    useMediaQuery,
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

    // Theme Destructure
    const {
        primary,
        whiteText,
        headingText,
        textHover,
        textMain,
        recipeText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        buttonLight,
        buttonLight2,
        buttonLight3,
        buttonHover,
        backgroundPrimary,
        backgroundMain,
        recipeTextPanel,
        mainBackPanel,
        recipeStepsPanel,
        panelMain,
        recipeStepsPanelHover,
        panelMainHover,
        widgetBorder,
    } = themeColors || {};

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

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
                        backgroundColor: buttonHover,
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
                    sx={{
                        color: followerIconOutline,
                        fontSize: isDesktopScreen
                            ? undefined
                            : isMediumScreen
                            ? undefined
                            : "0.75rem",
                    }}
                >
                    {equipmentCount} Tools & Utensils
                </Typography>

                {equipmentListOpen ? (
                    <KeyboardArrowDownRoundedIcon
                        fontSize="large"
                        sx={{ color: followerIconOutline }}
                    />
                ) : (
                    <KeyboardArrowRightRoundedIcon
                        fontSize="large"
                        sx={{ color: followerIconOutline }}
                    />
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
                            p: "0 2rem",
                            // p: "0.5rem 0.5rem 0 0.5rem",
                            borderRadius: "0rem",
                            backgroundColor: recipeStepsPanel,
                        }}
                    >
                        <Typography
                            key={equip._id}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                width: "100%",
                                color: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? undefined
                                    : isMediumScreen
                                    ? undefined
                                    : "0.75rem",
                            }}
                        >
                            {equip}
                        </Typography>
                    </Box>
                ) : (
                    <Box display="none" />
                )
            )}
        </Box>
    );
};

export default EquipmentList;
