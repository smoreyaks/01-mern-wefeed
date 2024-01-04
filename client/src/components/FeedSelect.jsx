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

import { Box, Button, Typography, useTheme } from "@mui/material";

// Check button style
const FeedSelect = ({ themeColors }) => {
    const { palette } = useTheme();
    // const { user } = useAuthContext();
    // const { documents, error } = useCollection("projects");
    const [filter, setFilter] = useState("all");

    const { textHover, headingText, recipeStepsPanel } = themeColors || {};

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
        <WidgetWrapper>
            <FlexBetween>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: recipeStepsPanel,
                        borderRadius: "3rem",
                    }}
                >
                    {/* All Recipes */}
                    <Button
                        // size="medium"
                        // fullwidth
                        // // onClick={patchLike}
                        // sx={{
                        //     borderRadius: "3rem",
                        //     width: "6rem",

                        //     color: headingText,
                        //     "&:hover": {
                        //         color: headingText,
                        //         backgroundColor: textHover,
                        //     },
                        // }}

                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                color: headingText,
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <Typography>All</Typography>
                    </Button>

                    {/* Main Dish Recipes */}

                    <Button
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <MainIcon />
                    </Button>

                    {/* Appetiser Recipes */}

                    <Button
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <AppetiserIcon />
                    </Button>

                    {/* Breakfast Recipes */}

                    <Button
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <BreakfastIcon />
                    </Button>

                    {/* Dessert Recipes */}
                    <Button
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <DessertIcon />
                    </Button>

                    {/* Drinks */}
                    <Button
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            color: headingText,
                            p: "0.5rem",
                            m: "0.5rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: textHover,
                            },
                        }}
                    >
                        <DrinkIcon />
                    </Button>
                </Box>
            </FlexBetween>
            {/* {error && <p className="error">{error}</p>} */}
            {/* {documents && <ProjectFilter changeFilter={changeFilter} />} */}
            {/* {projects && <ProjectList projects={projects} />} */}
        </WidgetWrapper>
    );
};

export default FeedSelect;
