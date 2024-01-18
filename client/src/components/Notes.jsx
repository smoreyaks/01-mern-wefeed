// MUI Components
import { ToggleButton, Tooltip, Box, Typography } from "@mui/material";

// MUI Icons
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

// React Packages
import { useState } from "react";

const Notes = ({ notes, themeColors }) => {
    // State
    const [notesOpen, setNotesOpen] = useState(false);

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
    } = themeColors || {};

    return (
        <Box>
            <Tooltip title="Notes" enterDelay="500">
                <ToggleButton
                    onClick={() => setNotesOpen(!notesOpen)}
                    sx={{
                        // borderRadius: "3rem",
                        width: "4rem",
                        color: headingText,
                        border: "0",
                        borderRadius: "0 0.75rem 0.75rem 0",
                        "&:hover": {
                            color: headingText,
                            backgroundColor: buttonHover,
                        },
                    }}
                >
                    <TextSnippetOutlinedIcon />
                    {notesOpen ? <RemoveIcon /> : <AddIcon />}
                </ToggleButton>

                {/*-------------------------------*/}

                {notes.map((note) =>
                    notesOpen ? (
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
                                    key={note._id}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        fontWeight: "bold",
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
                                    {note}
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Box display="none" />
                    )
                )}
            </Tooltip>
        </Box>
    );
};

export default Notes;
