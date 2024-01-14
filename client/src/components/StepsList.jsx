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

// Components
import FlexBetween from "./FlexBetween";

const StepsList = ({ steps, themeColors }) => {
    const [stepsListOpen, setStepsListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        recipeStepsPanelHover,
        mainBackPanel,
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
                    p: "0.5rem  0.75rem",
                    borderRadius: stepsListOpen
                        ? "0 0 0rem 0rem "
                        : "0 0 0.75rem 0.75rem ",
                    border: "0",
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Steps
                </Typography>
                {stepsListOpen ? <RemoveIcon /> : <AddIcon />}
            </ToggleButton>

            {steps.map((step) =>
                stepsListOpen ? (
                    <Box
                        // mr="0.5rem"
                        sx={{
                            display: "flex",
                            gap: "0.5rem",
                            m: "0",
                            p: "0.5rem 0.5rem 0 0.5rem",
                            borderRadius: "0rem",
                            backgroundColor: recipeStepsPanel,
                            width: "100%",
                        }}
                    >
                        <Box>
                            <Typography
                                key={step._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    p: "0.25rem 0.5rem 0.25rem 0.5rem",
                                    fontWeight: "bold",
                                    background: "#eeceee",
                                    borderRadius: "0.5rem",
                                    width: "1.5rem",
                                }}
                            >
                                {step.stepNum}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                key={step._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {step.stepMethod}
                            </Typography>
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
