// React
import { useState } from "react";

// MUI Components
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Components
import FlexBetween from "./FlexBetween";

const StepsList = ({ steps }) => {
    const [stepsListOpen, setStepsListOpen] = useState(false);

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    return (
        <Box
            sx={{
                p: "0.25rem 0.5rem",
                m: "0.5rem 0",
                backgroundColor: main,
                borderRadius: "0.75rem",
            }}
        >
            <FlexBetween>
                <Typography p=".5rem 0" variant="h5" borderRadius="0.75rem">
                    Steps
                </Typography>
                <IconButton onClick={() => setStepsListOpen(!stepsListOpen)}>
                    {stepsListOpen ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </FlexBetween>
            {steps.map((step) =>
                stepsListOpen ? (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 2fr)",
                            gap: "0.5rem",
                            borderRadius: "0.75rem",
                        }}
                    >
                        <Box gridColumn="1">
                            <Typography
                                key={step._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {step.stepNum}
                            </Typography>
                        </Box>
                        <Box gridColumn="2">
                            <Typography key={step._id}>
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
