// React
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// State
import { setRecipe } from "../state/index";

// Components
import FlexBetween from "./FlexBetween";

// MUI Components
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StepsList = ({ steps }) => {
    // State
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
            {/* {console.log("STEPS:", steps.stepNum)}
            {console.log("STEPS:", steps.stepMethod)} */}
            {steps?.map((step) =>
                stepsListOpen ? (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "0.5rem",
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
