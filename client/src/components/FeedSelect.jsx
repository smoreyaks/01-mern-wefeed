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

import { Box, Button, Typography, useTheme, Tooltip } from "@mui/material";

// Check button style
const FeedSelect = ({ themeColors }) => {
    const { palette } = useTheme();
    // const { user } = useAuthContext();
    // const { documents, error } = useCollection("projects");
    const [filter, setFilter] = useState("all");

    const { textHover, headingText, recipeStepsPanel, buttonLight } =
        themeColors || {};

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
        <WidgetWrapper sx={{ padding: "0rem" }}>
            <FlexBetween>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: buttonLight,
                        borderRadius: "3rem",
                        padding: "0",
                    }}
                >
                    {/* All Recipes */}
                    <Tooltip title="All Recipes">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                p: "0.5rem 0 0.5rem 0.5rem",
                                m: "0.5rem 0 0.5rem 0.5rem",
                                borderTopLeftRadius: "3rem",
                                borderBottomLeftRadius: "3rem",
                                borderTopRightRadius: "0rem",
                                borderBottomRightRadius: "0rem",
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: textHover,
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
                    <Tooltip title="Main Dishes">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                "&:hover": {
                                    backgroundColor: textHover,
                                },
                            }}
                        >
                            <MainIcon />
                        </Button>
                    </Tooltip>

                    {/* Appetiser Recipes */}
                    <Tooltip title="Appetisers">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadiusTopLeft: "3rem",
                                "&:hover": {
                                    backgroundColor: textHover,
                                },
                            }}
                        >
                            <AppetiserIcon sx={{ color: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Breakfast Recipes */}
                    <Tooltip title="Breakfast Dishes">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: textHover,
                                },
                            }}
                        >
                            <BreakfastIcon sx={{ color: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Dessert Recipes */}
                    <Tooltip title="Desserts">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                py: "0.5rem",
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: textHover,
                                },
                            }}
                        >
                            <DessertIcon sx={{ color: headingText }} />
                        </Button>
                    </Tooltip>

                    {/* Drinks */}
                    <Tooltip title="Drinks & Cocktails">
                        <Button
                            sx={{
                                backgroundColor: buttonLight,
                                color: headingText,
                                p: "0.5rem 0.5rem 0.5rem 0",
                                m: "0.5rem 0.5rem 0.5rem 0 ",
                                borderTopRightRadius: "3rem",
                                borderBottomRightRadius: "3rem",
                                borderTopLeftRadius: "0rem",
                                borderBottomLeftRadius: "0rem",
                                "&:hover": {
                                    backgroundColor: textHover,
                                },
                            }}
                        >
                            <DrinkIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </FlexBetween>
            {/* {error && <p className="error">{error}</p>} */}
            {/* {documents && <ProjectFilter changeFilter={changeFilter} />} */}
            {/* {projects && <ProjectList projects={projects} />} */}
        </WidgetWrapper>
    );
};

export default FeedSelect;
