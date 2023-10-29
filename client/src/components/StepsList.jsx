// React
import { useState } from "react";

// MUI Components
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Components
import FlexBetween from "./FlexBetween";

const StepsList = ({ steps, themeColors }) => {
    const [stepsListOpen, setStepsListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const { headingText, recipeText, recipeStepsPanel } = themeColors;

    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    return (
        // Steps Back
        <Box
            sx={{
                // p: "0.25rem 0",
                m: "0.5rem 0 0.5rem 0",
                backgroundColor: recipeStepsPanel,
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
                }}
            >
                <IconButton onClick={() => setStepsListOpen(!stepsListOpen)}>
                    <Typography
                        p="0.5rem"
                        variant="h5"
                        display="flex"
                        alignItems="flex-start"
                    >
                        Steps
                    </Typography>
                    {stepsListOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            {steps.map((step) =>
                stepsListOpen ? (
                    <Box
                        // mr="0.5rem"
                        sx={{
                            display: "flex",
                            gridTemplateColumns: "12.5%, 87.5%",
                            gap: "0.5rem",
                            m: "0 0 0.5rem 0",
                            mx: "0",
                            p: "0.5rem",
                            borderRadius: "0.75rem",
                            backgroundColor: "#eeaae2",
                            width: "100%",
                        }}
                    >
                        <Box gridColumn="1">
                            <Typography
                                key={step._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    p: "0.25rem 0.5rem 0.25rem 0.5rem",
                                    fontWeight: "bold",
                                    background: "#eeceee",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    // width: "20%",
                                }}
                            >
                                {step.stepNum}
                            </Typography>
                        </Box>
                        <Box gridColumn="2">
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
        </Box>
    );
};

export default StepsList;
