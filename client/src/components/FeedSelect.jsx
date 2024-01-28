import { useState } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";

// Styles
// import "./Dashboard.css";

// Components
// import ProjectList from "../../components/ProjectList";
// import ProjectFilter from "./ProjectFilter";

// import userEvent from "@testing-library/user-event";

// Components
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";

// Custom Icons
import AppetiserIcon from "./svg/AppetiserIcon";
import MainIcon from "./svg/MainIcon";
import DessertIcon from "./svg/DessertIcon";
import DrinkIcon from "./svg/DrinkIcon";
import BreakfastIcon from "./svg/BreakfastIcon";

import {
    Box,
    Button,
    Typography,
    useTheme,
    Tooltip,
    Zoom,
} from "@mui/material";

// Check button style
const FeedSelect = ({ themeColors }) => {
    // State
    const [filter, setFilter] = useState("all");

    // ------- TBD --------
    // const { user } = useAuthContext();
    // const { documents, error } = useCollection("projects");

    // Theme Destructure
    const { palette } = useTheme();
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

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
    };

    // const projects = documents
    //     ? documents.filter((document) => {
    //           switch (filter) {
    //               case "all":
    //                   return true;
    //               case "main":
    //                   let assignedToMe = false;
    //                   console.log(document.assignedUsersList);
    //                   document.assignedUsersList.forEach((u) => {
    //                       if (u.id === user.uid) {
    //                           assignedToMe = true;
    //                       }
    //                   });
    //                   return assignedToMe;
    //               case "appetiser":
    //                   let createdByMe = false;
    //                   console.log(document.createdBy.id);
    //                   if (document.createdBy.id === user.uid) {
    //                       createdByMe = true;
    //                   }
    //                   return createdByMe;
    //               case "breakfast":
    //               case "dessert":
    //               case "drink":
    //                   console.log(document.category, filter);
    //                   return document.category === filter;
    //               default:
    //                   return true;
    //           }
    //       })
    //     : null;

    return (
        // Adjust Feed Select design
        <Box>
            <FlexBetween>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: buttonLight2,
                        borderRadius: "3rem",
                        padding: "0",
                    }}
                >
                    {/* All Recipes */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="All Recipes"
                        enterDelay="500"
                        fontSize="1rem"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                p: "0.5rem 0 0.5rem 0.5rem",
                                m: "0.5rem 0 0.5rem 0.5rem",
                                borderTopLeftRadius: "3rem",
                                borderBottomLeftRadius: "3rem",
                                borderTopRightRadius: "0rem",
                                borderBottomRightRadius: "0rem",
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <Typography
                                fontWeight="bold"
                                sx={{ color: headingText }}
                            >
                                ALL
                            </Typography>
                        </Button>
                    </Tooltip>

                    {/* Main Dish Recipes */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Main Dishes"
                        enterDelay="500"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <MainIcon sx={{ fill: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Appetiser Recipes */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Appetisers"
                        enterDelay="500"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadiusTopLeft: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <AppetiserIcon sx={{ fill: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Breakfast Recipes */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Breakfast Dishes"
                        enterDelay="500"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <BreakfastIcon sx={{ fill: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Dessert Recipes */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Desserts"
                        enterDelay="500"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <DessertIcon sx={{ fill: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Drinks */}
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Drinks & Cocktails"
                        enterDelay="500"
                    >
                        <Button
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                p: "0.5rem 0.5rem 0.5rem 0",
                                m: "0.5rem 0.5rem 0.5rem 0 ",
                                borderTopRightRadius: "3rem",
                                borderBottomRightRadius: "3rem",
                                borderTopLeftRadius: "0rem",
                                borderBottomLeftRadius: "0rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <DrinkIcon sx={{ fill: headingText }} />
                        </Button>
                    </Tooltip>
                </Box>
            </FlexBetween>
            {/* {error && <p className="error">{error}</p>} */}
            {/* {documents && <ProjectFilter changeFilter={changeFilter} />} */}
            {/* {projects && <ProjectList projects={projects} />} */}
        </Box>
    );
};

export default FeedSelect;
