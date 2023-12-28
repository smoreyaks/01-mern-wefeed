// React
import React from "react";

// Hooks
import { useState } from "react";

// Feed Select Array
const filterList = [
    ["All", "All"],
    ["main", "Main"],
    ["appetiser", "Appetiser"],
    ["breakfast", "Breakfast"],
    ["dessert", "Dessert"],
    ["drink", "Drink"],
];

// Filter Function
export default function ProjectFilter({ changeFilter }) {
    const [currentFilter, setCurrentFilter] = useState("all");

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter);
        changeFilter(newFilter);
    };

    return (
        <div className="project-filter">
            <nav>
                <p>Filter By:</p>
                {filterList.map((f) => (
                    <button
                        key={f}
                        onClick={() => handleClick(f[0])}
                        className={currentFilter === f[0] ? "active" : ""}
                    >
                        {f[1]}
                    </button>
                ))}
            </nav>
        </div>
    );
}
