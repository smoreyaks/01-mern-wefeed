// React Packages
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
// import { setFilter } from "../state/filterReducer";
import { setFilter } from "../state/index";
// Components
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";

// MUI Icons
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";

// Custom Icons
import AppetiserIcon from "./svg/AppetiserIcon";
import MainDishIcon from "./svg/MainDishIcon";
import DessertIcon from "./svg/DessertIcon";
import DrinkIcon from "./svg/DrinkIcon";
import BreakfastIcon from "./svg/BreakfastIcon";

// MUI Components
import {
    Box,
    Button,
    Typography,
    useTheme,
    Tooltip,
    Zoom,
    useMediaQuery,
} from "@mui/material";

const FeedSelect = ({ themeColors }) => {
    // Local State
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

    // Filter Handler Function
    const handleFilterByRecipeType = (filter) => {
        dispatch(setFilter(filter));
    };

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
        widgetBorder,
    } = themeColors || {};

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

    return (
        <FlexBetween
            sx={{
                // flexBasis: isDesktopScreen ? "24rem" : "30rem",
                width: isDesktopScreen
                    ? "22rem"
                    : isMediumScreen
                    ? "30rem"
                    : "22rem",
                maxWidth: isDesktopScreen ? "730px" : "100%",
                maxWidth: "100%",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: buttonLight2,
                    borderRadius: "3rem",
                    border: `2px solid ${widgetBorder}`,
                    padding: "0",
                    width: "100%",
                    height: "100%",
                    // gap: isDesktopScreen ? "0rem" : "0.5rem",
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
                    {/* Clear Tags to Show ALl Recipe Types */}
                    <Button
                        onClick={() => handleFilterByRecipeType("all")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem",
                            m:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem 0rem 0.5rem 0.5rem"
                                    : "0.25rem 0rem 0.25rem 0.25rem",

                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "&:hover": {
                                color: headingText,
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <AllInclusiveOutlinedIcon
                            fontSize="medium"
                            sx={{
                                color: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>

                {/* Main Dish Recipes */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Main Dishes"
                    enterDelay="500"
                >
                    {/* Filter by Main Recipe Type */}
                    <Button
                        onClick={() => handleFilterByRecipeType("main")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem 0.5rem 0rem",
                            my:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem"
                                    : "0.25rem",
                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",

                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <MainDishIcon
                            sx={{
                                fill: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>

                {/* Appetiser Recipes */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Appetisers"
                    enterDelay="500"
                >
                    {/* Filter by Appetiser Recipe Type */}
                    <Button
                        onClick={() => handleFilterByRecipeType("appetiser")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem",
                            my:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem"
                                    : "0.25rem",
                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",

                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <AppetiserIcon
                            sx={{
                                fill: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>

                {/* Breakfast Recipes */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Breakfast Dishes"
                    enterDelay="500"
                >
                    {/* Filter by Breakfast Recipe Type */}
                    <Button
                        onClick={() => handleFilterByRecipeType("breakfast")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem",
                            my:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem"
                                    : "0.25rem",
                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",

                            // borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <BreakfastIcon
                            sx={{
                                fill: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>

                {/* Dessert Recipes */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Desserts"
                    enterDelay="500"
                >
                    {/* Filter by Dessert Recipe Type */}
                    <Button
                        onClick={() => handleFilterByRecipeType("dessert")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem",
                            my:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem"
                                    : "0.25rem",
                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",
                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <DessertIcon
                            sx={{
                                fill: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>

                {/* Drinks */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Drinks & Cocktails"
                    enterDelay="500"
                >
                    {/* Filter by Drink Recipe Type */}
                    <Button
                        onClick={() => handleFilterByRecipeType("drink")}
                        sx={{
                            backgroundColor: buttonLight2,
                            color: headingText,
                            borderRadius: "3rem",
                            p: "0.5rem 0rem",
                            m:
                                isDesktopScreen || isMediumScreen
                                    ? "0.5rem 0.5rem 0.5rem 0rem"
                                    : "0.25rem 0.25rem 0.25rem 0rem",
                            height: isDesktopScreen
                                ? "2.25rem"
                                : isMediumScreen
                                ? "2.25rem"
                                : "100%",
                            minWidth: "1rem",
                            width: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "4rem"
                                : isSmallScreen
                                ? "3rem"
                                : "2rem",

                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <DrinkIcon
                            sx={{
                                fill: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.5rem"
                                    : isMediumScreen
                                    ? "1.5rem"
                                    : isSmallScreen
                                    ? "1rem"
                                    : "0.5rem",
                            }}
                        />
                    </Button>
                </Tooltip>
            </Box>
        </FlexBetween>
    );
};

export default FeedSelect;

//---------------------------------
// -------- FILTER HANDLER --------
//---------------------------------
// const changeFilter = (newFilter) => {
//     setFilter(newFilter);
// };

//----------------------------------
// -------- FILTER FUNCTION --------
//----------------------------------
// const filterByRecipeType = () => {
//     const filtered = recipes.filter((type) =>
//         type.recipeTypes.includes(recipeType)
//     );
//     dispatch(setFilter(filtered));
// };

//----------------------------------------------
// -------- ORIGINAL SWITCH CASE DESIGN --------
//----------------------------------------------
// recipes ? recipes.filter((document) => {
//     switch (filter) {

//         /* CASE ALL */
//         case "all":
//             return true;
//     /* CASE MAIN */
//         case "main":
//         recipes.recipeType.forEach((r) => {
//             if (recipeType === "main") {
//                 main = true;
//             }
//             return main;
//             console.log(document.assignedUsersList);

//             document.assignedUsersList.forEach((u) => {
//                 if (u.id === user.uid) {
//                     assignedToMe = true;
//                 }
//             });
//             return assignedToMe;

//     /* CASE APPETISER */
//         case "appetiser":
//             console.log(document.createdBy.id);
//             if (document.createdBy.id === user.uid) {
//                 appetiser = true;
//             }
//             return createdByMe;

//           case "breakfast":

//           case "dessert":

//           case "drink":
//               console.log();
//               return document.category === filter;

//           default:
//               return true;
//       }
//   })
// : null;
//----------------------------------------------
