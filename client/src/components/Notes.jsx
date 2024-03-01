// MUI Components
import {
    ToggleButton,
    Tooltip,
    Zoom,
    Box,
    Typography,
    useMediaQuery,
} from "@mui/material";

// MUI Icons

// React Packages
import { useState } from "react";

const Notes = ({ notes, themeColors, recipeId, notesOpen }) => {
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
    return (
        <Box>
            {notesOpen ? (
                <Box
                    sx={{
                        display: "flex",
                        gap: "0.5rem",
                        mb: notesOpen ? "0.5rem" : "0",
                        p: "0.5rem 0.25rem",
                        borderRadius: notesOpen
                            ? "0rem 0rem 0.75rem 0.75rem"
                            : "0",
                        backgroundColor: recipeStepsPanel,
                    }}
                >
                    <Box>
                        {/* <Typography
                                key={note._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    borderRadius: "0.5rem",
                                    width: "1.25rem",
                                }}
                            ></Typography> */}
                    </Box>
                    <Box>
                        <Typography
                            key={recipeId.notes}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                width: "100%",
                                color: headingText,
                                fontSize: isDesktopScreen
                                    ? undefined
                                    : isMediumScreen
                                    ? undefined
                                    : "0.75rem",
                            }}
                        >
                            {notes}
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <Box display="none" />
            )}
            {/* </Tooltip> */}
        </Box>
    );
};

export default Notes;
