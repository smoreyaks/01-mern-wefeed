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

// Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// State
import { setMode, setLogout } from "../../state";

// Local Components
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";

const Navbar = ({ picturePath }) => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    // State
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // const picturePath = useSelector((state) => state.user);
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    // Theme
    const theme = useTheme();
    const neutralLight = theme.palette.default.neutral.light;
    const dark = theme.palette.default.neutral.dark;
    const background = theme.palette.default.background.default;
    const primaryLight = theme.palette.default.primary.light;
    const alt = theme.palette.default.background.alt;

    // Swap Hard Code for Dynamic String
    const fullName = `${user.firstName} ${user.lastName}`;
    const firstName = user.firstName;

    return (
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
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
                <FlexBetween gap="2rem">
                    {/* Dark & Light Mode Button */}
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.default.mode === "dark" ? (
                            <DarkMode sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: dark, fontSize: "25px" }} />
                        )}
                    </IconButton>

                    {/* Message Icon */}
                    <Message sx={{ fontSize: "25px" }} />

                    {/* Notification Icon */}
                    <Notifications sx={{ fontSize: "25px" }} />

                    {/* Help Icon */}
                    <Help sx={{ fontSize: "25px" }} />
                    <IconButton>
                        <UserImage
                            // height="25px"
                            size="30px"
                            image={picturePath}
                        />
                    </IconButton>
                    {/* LogOut Icon */}
                    <IconButton
                        // cursor="pointer"
                        onClick={() => dispatch(setLogout())}
                    >
                        <LogoutIcon
                            sx={{
                                fontSize: "25px",
                            }}
                        />
                    </IconButton>
                </FlexBetween>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
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
                        <Message sx={{ fontSize: "25px" }} />

                        {/* Notifications Icon */}
                        <Notifications sx={{ fontSize: "25px" }} />

                        {/* Help Icon */}
                        <Help sx={{ fontSize: "25px" }} />

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
    );
};

export default Navbar;
