// State
import { setThemeDefault, setThemeDinner, setThemeDessert } from "../state";

// MUI Components
import { Tooltip, IconButton, Box } from "@mui/material";

// MUI Icons
import BrushIcon from "@mui/icons-material/Brush";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

const ThemeSelect = ({ themeColors }) => {
    return (
        <Tooltip title="Theme Select" enterDelay="500">
            <IconButton
                onClick={() => setIsThemeMenuToggled(!isThemeMenuToggled)}
            >
                <BrushIcon fontSize="25px" />

                {/* Theme Menu */}
                {isDesktopScreen && isThemeMenuToggled && (
                    <Box
                        position="fixed"
                        top="5%"
                        height="3rem"
                        width="10rem"
                        zIndex="11"
                        maxWidth="300px"
                        minWidth="200px"
                        backgroundColor={alt}
                        border={`2px solid ${buttonLight2}`}
                        borderRadius="2rem"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Default Theme */}
                        <Tooltip title="Default Theme" enterDelay="500">
                            <IconButton
                                onClick={() => dispatch(setThemeDefault())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem 0.5rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <ChairOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Dinner Theme */}
                        <Tooltip title="Dinner Theme" enterDelay="500">
                            <IconButton
                                onClick={() => dispatch(setThemeDinner())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <RamenDiningOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Dessert Theme */}
                        <Tooltip
                            title="Dessert Theme"
                            enterDelay="500"
                            sx={{ fontSize: "3rem" }}
                        >
                            <IconButton
                                onClick={() => dispatch(setThemeDessert())}
                                sx={{
                                    p: "0.5rem",
                                    m: "0.25rem 0.125rem 0.25rem",
                                    borderRadius: "2rem",
                                }}
                            >
                                <CakeOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Close Icon */}
                        <IconButton
                            onClick={() =>
                                setIsThemeMenuToggled(!isThemeMenuToggled)
                            }
                            sx={{ p: "0.5rem", m: "0.5rem" }}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeSelect;
