// React Packages
import { useState } from "react";

// Mui Components
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

const EquipmentList = ({ equipment }) => {
    return (
        <Box>
            <Typography p=".5rem 0">
                Equipment
                {equipment.map((equip) => (
                    <Box
                        mr="0.5rem"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 2fr)",
                            gap: "0.5rem",
                        }}
                    >
                        {equipment}
                        <Box gridColumn="1">
                            <Typography
                                key={equip._id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    // mr: "0.5rem",
                                }}
                            >
                                {equip._id}
                            </Typography>
                        </Box>
                        {/* <Box gridColumn="2">
                            <Typography key={equip._id}>{equip}</Typography>
                        </Box> */}
                    </Box>
                ))}
            </Typography>
        </Box>
    );
};

export default EquipmentList;
