// React & React Router Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Components & Hooks
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
} from "@mui/material";

// MUI Icons
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import BrushIcon from "@mui/icons-material/Brush";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

// Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// State
import {
    setMode,
    setLogout,
    setThemeDefault,
    setThemeDinner,
    setThemeDessert,
} from "../../state";

// Local Components
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";

const Navbar = ({ userId }) => {
    // Mobile Menu Toggle
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

    // Theme Menu Toggle
    const [isThemeMenuToggled, setIsThemeMenuToggled] = useState(false);

    // State
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    // Theme
    const theme = useTheme();
    const neutralLight = theme.palette.default.neutral.light;
    const dark = theme.palette.default.neutral.dark;
    const main = theme.palette.default.primary.main;
    const background = theme.palette.default.background.default;
    const primaryLight = theme.palette.default.primary.light;
    const alt = theme.palette.default.background.alt;

    // Swap Hard Code for Dynamic String
    const fullName = `${user.firstName} ${user.lastName}`;
    const firstName = user.firstName;

    return (
        <Box position="fixed" sx={{ width: "100%", zIndex: "100" }}>
            <FlexBetween padding="1rem 6%" backgroundColor={alt}>
                <FlexBetween gap="1.75rem">
                    <Typography
                        fontWeight="bold"
                        fontSize="clamp(1rem, 2rem, 2.25rem)"
                        color={main}
                        onClick={() => navigate("/home")}
                        sx={{
                            "&:hover": {
                                color: primaryLight,
                                cursor: "pointer",
                            },
                        }}
                    >
                        WeFeed
                    </Typography>
                    {isNonMobileScreens && (
                        <FlexBetween
                            backgroundColor={neutralLight}
                            borderRadius="9px"
                            gap="3rem"
                            padding="0.1rem 1.5rem"
                        >
                            <InputBase placeholder="Search..." />
                            <IconButton>
                                <Search />
                            </IconButton>
                        </FlexBetween>
                    )}
                </FlexBetween>

                {/* Desktop Navbar */}
                {isNonMobileScreens ? (
                    <FlexBetween gap="1rem">
                        <IconButton
                            onClick={() =>
                                setIsThemeMenuToggled(!isThemeMenuToggled)
                            }
                        >
                            <BrushIcon fontSize="25px" />
                            {/* Theme Menu */}
                            {isNonMobileScreens && isThemeMenuToggled && (
                                <Box
                                    position="fixed"
                                    top="5%"
                                    height="3rem"
                                    width="10rem"
                                    zIndex="11"
                                    maxWidth="300px"
                                    minWidth="200px"
                                    backgroundColor={alt}
                                    border={`2px solid ${neutralLight}`}
                                    borderRadius="2rem"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* Default Theme */}
                                    <IconButton
                                        onClick={() =>
                                            dispatch(setThemeDefault())
                                        }
                                        sx={{
                                            p: "0.5rem",
                                            m: "0.25rem 0.125rem 0.25rem 0.5rem",
                                            borderRadius: "2rem",
                                        }}
                                    >
                                        <ChairOutlinedIcon />
                                    </IconButton>

                                    {/* Dinner Theme */}
                                    <IconButton
                                        onClick={() =>
                                            dispatch(setThemeDinner())
                                        }
                                        sx={{
                                            p: "0.5rem",
                                            m: "0.25rem 0.125rem 0.25rem",
                                            borderRadius: "2rem",
                                        }}
                                    >
                                        <RamenDiningOutlinedIcon />
                                    </IconButton>

                                    {/* Dessert Theme */}
                                    <IconButton
                                        onClick={() =>
                                            dispatch(setThemeDessert())
                                        }
                                        sx={{
                                            p: "0.5rem",
                                            m: "0.25rem 0.125rem 0.25rem",
                                            borderRadius: "2rem",
                                        }}
                                    >
                                        <CakeOutlinedIcon />
                                    </IconButton>

                                    {/* Close Icon */}
                                    <IconButton
                                        onClick={() =>
                                            setIsThemeMenuToggled(
                                                !isThemeMenuToggled
                                            )
                                        }
                                        sx={{ p: "0.5rem", m: "0.5rem" }}
                                    >
                                        <Close />
                                    </IconButton>
                                </Box>
                            )}
                        </IconButton>

                        {/* Dark & Light Mode Button */}
                        <IconButton onClick={() => dispatch(setMode())}>
                            {theme.palette.default.mode === "dark" ? (
                                <DarkMode sx={{ fontSize: "25px" }} />
                            ) : (
                                <LightMode
                                    sx={{ color: dark, fontSize: "25px" }}
                                />
                            )}
                        </IconButton>

                        {/* Message Icon */}
                        {/* <IconButton>
                            <Message sx={{ fontSize: "25px" }} />
                        </IconButton> */}

                        {/* Notification Icon */}
                        {/* <IconButton>
                            <Notifications sx={{ fontSize: "25px" }} />
                        </IconButton> */}

                        {/* Help Icon */}
                        {/* <IconButton>
                            <Help sx={{ fontSize: "25px" }} />
                        </IconButton> */}

                        {/* User Profile */}
                        <IconButton
                            onClick={() => navigate(`/profile/${userId}`)}
                        >
                            <UserImage
                                // height="25px"
                                size="30px"
                                image={user.picturePath}
                            />
                        </IconButton>

                        {/* Log Out Icon */}
                        <IconButton onClick={() => dispatch(setLogout())}>
                            <LogoutIcon
                                sx={{
                                    fontSize: "25px",
                                }}
                            />
                        </IconButton>
                    </FlexBetween>
                ) : (
                    <IconButton
                        onClick={() =>
                            setIsMobileMenuToggled(!isMobileMenuToggled)
                        }
                    >
                        <Menu />
                    </IconButton>
                )}

                {/* Mobile Nav */}
                {!isNonMobileScreens && isMobileMenuToggled && (
                    <Box
                        position="fixed"
                        right="0"
                        bottom="0"
                        height="100%"
                        zIndex="10"
                        maxWidth="500px"
                        minWidth="300px"
                        backgroundColor={background}
                    >
                        {/* Close Icon */}
                        <Box display="flex" justifyContent="flex-end" p="1rem">
                            <IconButton
                                onClick={() =>
                                    setIsMobileMenuToggled(!isMobileMenuToggled)
                                }
                            >
                                <Close />
                            </IconButton>
                        </Box>

                        {/* Menu Items */}
                        <FlexBetween
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="3rem"
                        >
                            {/* Dark & Light Mode */}
                            <IconButton
                                onClick={() => dispatch(setMode())}
                                sx={{ fontSize: "25px" }}
                            >
                                {theme.palette.default.mode === "dark" ? (
                                    <DarkMode sx={{ fontSize: "25px" }}>
                                        Dark Mode
                                    </DarkMode>
                                ) : (
                                    <LightMode
                                        sx={{ color: dark, fontSize: "25px" }}
                                    />
                                )}
                            </IconButton>

                            {/* Messages Icon */}
                            {/* <Message sx={{ fontSize: "25px" }} /> */}

                            {/* Notifications Icon */}
                            {/* <Notifications sx={{ fontSize: "25px" }} /> */}

                            {/* Help Icon */}
                            {/* <Help sx={{ fontSize: "25px" }} /> */}

                            {/* LogOut Icon */}
                            <IconButton
                                cursor="pointer"
                                onClick={() => dispatch(setLogout())}
                            >
                                <LogoutIcon
                                    sx={{
                                        fontSize: "25px",
                                    }}
                                />
                            </IconButton>
                        </FlexBetween>
                    </Box>
                )}
            </FlexBetween>
        </Box>
    );
};

export default Navbar;
