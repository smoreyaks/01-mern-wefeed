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

// Custom Components
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import FeedSelect from "../../components/FeedSelect";
import ThemeSelect from "../../components/ThemeSelect";

const Navbar = ({ userId, themeColors }) => {
    // Navigate Hook
    const navigate = useNavigate();

    // State
    // Mobile Menu Toggle
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

    // Local State
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // Media Query
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    // Theme
    const theme = useTheme();
    const primaryLight = theme.palette.default.primaryOne.light;

    // Theme Destructure
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

    // Swap Hard Code for Dynamic String
    const fullName = `${user.firstName} ${user.lastName}`;
    const firstName = user.firstName;

    return (
        <Box
            position="fixed"
            sx={{ width: "100%", zIndex: "100", boxShadow: 8 }}
        >
            <FlexBetween padding="1rem 6%" backgroundColor={backgroundMain}>
                <Typography
                    fontFamily="PrequelShadow"
                    // fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color={headingText}
                    onClick={() => {
                        navigate("/home");
                        // navigate(0);
                    }}
                    sx={{
                        "&:hover": {
                            color: textHover,
                            cursor: "pointer",
                        },
                    }}
                >
                    WeFeed
                </Typography>
                <FeedSelect themeColors={themeColors} />
                {/* {isDesktopScreen && (
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

                {/* Desktop Navbar */}
                {isDesktopScreen ? (
                    <FlexBetween gap="1rem">
                        {/* Dark & Light Mode Button */}

                        <IconButton
                            onClick={() => dispatch(setMode())}
                            // sx={{ fontSize: "25px" }}
                        >
                            {theme.palette.default.mode === "dark" ? (
                                <Tooltip title="Dark Mode" enterDelay="500">
                                    <DarkMode
                                        sx={{
                                            color: headingText,
                                            fontSize: "25px",
                                        }}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Light Mode" enterDelay="500">
                                    <LightMode
                                        sx={{
                                            color: textHover,
                                            fontSize: "25px",
                                        }}
                                    />
                                </Tooltip>
                            )}
                        </IconButton>

                        <ThemeSelect
                            themeColors={themeColors}
                            isDesktopScreen
                        />

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
                                onClick={() => {
                                    navigate(`/profile/${userId}`);
                                    navigate(0);
                                }}
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
                                        color: headingText,
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
                {!isDesktopScreen && isMobileMenuToggled && (
                    <Box
                        position="fixed"
                        right="0"
                        bottom="0"
                        height="100%"
                        zIndex="10"
                        maxWidth="500px"
                        minWidth="300px"
                        backgroundColor={backgroundMain}
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
                                        sx={{
                                            color: buttonLight2,
                                            fontSize: "25px",
                                        }}
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
