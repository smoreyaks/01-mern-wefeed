// React Packages
import { useState } from "react";

// Redux Hooks
import { useDispatch } from "react-redux";

// State
import { setThemeDefault, setThemeDinner, setThemeDessert } from "../state";

// MUI Components
import { Tooltip, IconButton, Box, useMediaQuery } from "@mui/material";

// MUI Icons
import BrushIcon from "@mui/icons-material/Brush";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { Close } from "@mui/icons-material";

// // State
// import { setThemeDefault, setThemeDinner, setThemeDessert } from "../../state";

const ThemeSelect = ({ themeColors }) => {
    // Local State
    const dispatch = useDispatch();

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
    } = themeColors || {};

    // Theme Menu Toggle
    const [isThemeMenuToggled, setIsThemeMenuToggled] = useState(false);
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    return (
        <Tooltip title="Theme Select" enterDelay="500">
            <IconButton
                onClick={() => setIsThemeMenuToggled(!isThemeMenuToggled)}
            >
                <BrushIcon fontSize="25px" />

                {/* Theme Menu */}
                {isDesktopScreen && isThemeMenuToggled && (
                    <Box
                        position="fixed"
                        top="5%"
                        height="3rem"
                        width="10rem"
                        zIndex="11"
                        maxWidth="300px"
                        minWidth="200px"
                        backgroundColor={panelMainHover}
                        border={`2px solid ${buttonLight2}`}
                        borderRadius="2rem"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Default Theme */}
                        <Tooltip title="Default Theme" enterDelay="500">
                            <IconButton
                                onClick={() => dispatch(setThemeDefault())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem 0.5rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <ChairOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Dinner Theme */}
                        <Tooltip title="Dinner Theme" enterDelay="500">
                            <IconButton
                                onClick={() => dispatch(setThemeDinner())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <RamenDiningOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Dessert Theme */}
                        <Tooltip
                            title="Dessert Theme"
                            enterDelay="500"
                            sx={{ fontSize: "3rem" }}
                        >
                            <IconButton
                                onClick={() => dispatch(setThemeDessert())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <CakeOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Close Icon */}
                        <IconButton
                            onClick={() =>
                                setIsThemeMenuToggled(!isThemeMenuToggled)
                            }
                            sx={{ p: "0.5rem", m: "0.5rem" }}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeSelect;
