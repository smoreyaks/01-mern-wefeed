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

import Button from "@mui/material";
// Check button style
export default function FeedSelect() {
    // const { user } = useAuthContext();
    // const { documents, error } = useCollection("projects");
    const [filter, setFilter] = useState("all");

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
        <WidgetWrapper>
            <FlexBetween>
                {/* All Recipes */}

                {/* <AppetiserIcon>All</AppetiserIcon> */}

                {/* Main Dish Recipes */}

                <Button>
                    <MainIcon />
                </Button>

                {/* Appetiser Recipes */}

                <Button>
                    <AppetiserIcon />
                </Button>

                {/* Breakfast Recipes */}

                <Button>
                    <BreakfastIcon />
                </Button>

                {/* Dessert Recipes */}
                <Button>
                    <DessertIcon />
                </Button>

                {/* Drinks */}
                <Button>
                    <DrinkIcon />
                </Button>
            </FlexBetween>
            {/* {error && <p className="error">{error}</p>} */}
            {/* {documents && <ProjectFilter changeFilter={changeFilter} />} */}
            {/* {projects && <ProjectList projects={projects} />} */}
        </WidgetWrapper>
    );
}
