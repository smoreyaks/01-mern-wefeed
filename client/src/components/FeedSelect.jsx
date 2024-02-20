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
} from "@mui/material";

const FeedSelect = ({ themeColors }) => {
    // State
    // const [filter, setFilter] = useState("");

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
    } = themeColors || {};

    return (
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
                        {/* Clear Tags to Show ALl Recipe Types */}
                        <Button
                            onClick={() => handleFilterByRecipeType("all")}
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                p: "0.5rem 0rem 0.5rem 0rem",
                                m: "0.5rem 0rem 0.5rem 0.5rem",
                                borderTopLeftRadius: "3rem",
                                borderBottomLeftRadius: "3rem",
                                borderTopRightRadius: "3rem",
                                borderBottomRightRadius: "3rem",
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <AllInclusiveOutlinedIcon
                                sx={{ color: followerIconOutline }}
                                fontSize="medium"
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
                                my: "0.5rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <MainDishIcon sx={{ fill: followerIconOutline }} />
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
                            onClick={() =>
                                handleFilterByRecipeType("appetiser")
                            }
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                borderRadius: "3rem",
                                p: "0.5rem 0rem",
                                my: "0.5rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <AppetiserIcon sx={{ fill: followerIconOutline }} />
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
                            onClick={() =>
                                handleFilterByRecipeType("breakfast")
                            }
                            sx={{
                                backgroundColor: buttonLight2,
                                color: headingText,
                                borderRadius: "3rem",
                                p: "0.5rem 0rem",
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <BreakfastIcon sx={{ fill: followerIconOutline }} />
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
                                my: "0.5rem",
                                // borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <DessertIcon sx={{ fill: followerIconOutline }} />
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
                                m: "0.5rem 0.5rem 0.5rem 0 ",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <DrinkIcon sx={{ fill: followerIconOutline }} />
                        </Button>
                    </Tooltip>
                </Box>
            </FlexBetween>
        </Box>
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
