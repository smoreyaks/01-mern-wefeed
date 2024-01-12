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
    Tooltip,
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
import {
    setMode,
    setLogout,
    // setThemeDefault,
    // setThemeDinner,
    // setThemeDessert,
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

    const whiteText = theme.palette.default.neutralGrey.white;
    const textHover = theme.palette.default.primaryTwo.main;
    const primary = theme.palette.default.primary.main;
    const headingText = theme.palette.default.neutralGrey.white;
    const recipeText = theme.palette.default.neutral.main;
    const recipeStepsPanel = theme.palette.default.primary.light;
    const followerIconOutline = theme.palette.default.primaryTwo.main;
    const followerIconBack = theme.palette.default.primaryOne.main;
    const followerIconBackHover = theme.palette.default.primaryOne.light;
    const recipeTextPanel = theme.palette.default.neutral.main;
    const mainBackPanel = theme.palette.default.neutral.main;
    const buttonLight = theme.palette.default.neutral.light;

    const themeColors = {
        whiteText,
        textHover,
        primary,
        headingText,
        recipeText,
        recipeStepsPanel,
        followerIconBack,
        followerIconBackHover,
        followerIconOutline,
        recipeTextPanel,
        mainBackPanel,
        buttonLight,
    };

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
                    {/* {isNonMobileScreens && (
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
                    )} */}
                </FlexBetween>

                {/* Desktop Navbar */}
                {isNonMobileScreens ? (
                    <FlexBetween gap="1rem">
                        {/* Dark & Light Mode Button */}
                        <Tooltip title="Light & Dark Mode" enterDelay="500">
                            <IconButton onClick={() => dispatch(setMode())}>
                                {theme.palette.default.mode === "dark" ? (
                                    <DarkMode sx={{ fontSize: "25px" }} />
                                ) : (
                                    <LightMode
                                        sx={{
                                            color: buttonLight,
                                            fontSize: "25px",
                                        }}
                                    />
                                )}
                            </IconButton>
                        </Tooltip>
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
                        <Tooltip title="User Profile" enterDelay="500">
                            <IconButton
                                onClick={() => navigate(`/profile/${userId}`)}
                            >
                                <UserImage
                                    // height="25px"
                                    size="30px"
                                    image={user.picturePath}
                                />
                            </IconButton>
                        </Tooltip>

                        {/* Log Out Icon */}
                        <Tooltip title="Log Out" enterDelay="500">
                            <IconButton onClick={() => dispatch(setLogout())}>
                                <LogoutIcon
                                    sx={{
                                        fontSize: "25px",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
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
