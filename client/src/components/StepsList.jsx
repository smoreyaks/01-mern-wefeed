// React
import { useState } from "react";

// MUI Components
import {
    Box,
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

const StepsList = ({ steps, themeColors }) => {
    const [stepsListOpen, setStepsListOpen] = useState(false);

    const stepsCount = Object.keys(steps).length;
    // Theme
    const { palette } = useTheme();
    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        recipeStepsPanelHover,
        mainBackPanel,
        buttonLight,
    } = themeColors || {};

    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    return (
        // Steps Back<Box>
        <Box>
            <ToggleButton
                onClick={() => setStepsListOpen(!stepsListOpen)}
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
                    p: "0.25rem  0.75rem",
                    borderRadius: stepsListOpen
                        ? "0 0 0rem 0rem "
                        : "0 0 0.75rem 0.75rem ",
                    border: "0",
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    fontFamily="Montserrat"
                >
                    {stepsCount} Steps
                </Typography>

                {stepsListOpen ? (
                    <KeyboardArrowDownRoundedIcon fontSize="large" />
                ) : (
                    <KeyboardArrowRightRoundedIcon fontSize="large" />
                )}
            </ToggleButton>

            {steps.map((step) =>
                stepsListOpen ? (
                    <Box sx={{ py: "0.25rem " }}>
                        <Box
                            // mr="0.5rem"
                            sx={{
                                display: "flex",
                                gap: "0.5rem",
                                m: "0",
                                p: "0rem 0.5rem",
                                borderRadius: "0rem",
                                backgroundColor: recipeStepsPanel,
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    key={step._id}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        p: "0.25rem 0.25rem 0.25rem 0.25rem",
                                        fontWeight: "bold",
                                        fontFamily: "Montserrat",
                                        background: buttonLight,
                                        color: headingText,
                                        borderRadius: "50%",
                                        width: "1.75rem",
                                    }}
                                >
                                    {step.stepNum}
                                </Typography>
                            </Box>

                            <Box sx={{ pt: "0.25rem" }}>
                                <Typography
                                    key={step._id}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                    }}
                                >
                                    {step.stepMethod}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    <Box display="none" />
                )
            )}
            <Box
                sx={{
                    height: stepsListOpen ? "1rem" : null,
                    backgroundColor: stepsListOpen ? recipeStepsPanel : null,
                    borderRadius: stepsListOpen ? "0 0 0.75rem 0.75rem" : null,
                }}
            ></Box>
        </Box>
    );
};

export default StepsList;
