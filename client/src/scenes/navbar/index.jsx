// React & React Router Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Components & Hooks
import {
    Box,
    IconButton,
    Button,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    Tooltip,
    Zoom,
    useMediaQuery,
} from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

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
import Logo from "../../components/Logo";

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

    //  CLick Away Function Handler
    const handleClickAway = () => {
        setIsMobileMenuToggled(false);
    };

    return (
        <Box
            position="fixed"
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            sx={{ width: "100%", zIndex: "100", boxShadow: 8 }}
        >
            <FlexBetween padding="1rem 6%" backgroundColor={backgroundMain}>
                {isDesktopScreen && (
                    <Logo
                        themeColors={themeColors}
                        isDesktopScreen={isDesktopScreen}
                    />
                )}

                {!isDesktopScreen && (
                    <FlexBetween
                        width="10%"
                        sx={{
                            justifyContent: "center",
                        }}
                    />
                )}

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
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    title="Dark Mode"
                                    enterDelay="500"
                                    sx={{ fontSize: "1rem" }}
                                >
                                    <DarkMode
                                        sx={{
                                            color: headingText,
                                            fontSize: "25px",
                                        }}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    title="Light Mode"
                                    enterDelay="500"
                                    sx={{ fontSize: "1rem" }}
                                >
                                    <LightMode
                                        sx={{
                                            color: textHover,
                                            fontSize: "25px",
                                        }}
                                    />
                                </Tooltip>
                            )}
                        </IconButton>

                        {/* <ThemeSelect
                            themeColors={themeColors}
                            isDesktopScreen
                        /> */}

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
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="User Profile"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
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
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Log Out"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
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
                    <FlexBetween
                        width="10%"
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <IconButton
                            onClick={() =>
                                setIsMobileMenuToggled(!isMobileMenuToggled)
                            }
                        >
                            <Menu />
                        </IconButton>
                    </FlexBetween>
                )}

                {/* Mobile Nav */}
                {!isDesktopScreen && isMobileMenuToggled && (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Box
                            position="fixed"
                            right="0"
                            bottom="0"
                            height="100%"
                            zIndex="10"
                            maxWidth="500px"
                            minWidth="300px"
                            backgroundColor={backgroundMain}
                            sx={{
                                // borderRadius: "0.75rem",
                                borderLeft: `0.5rem solid #FFFFFF `,
                            }}
                        >
                            {/* Close Icon */}
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                p="1rem"
                            >
                                <IconButton
                                    onClick={() =>
                                        setIsMobileMenuToggled(
                                            !isMobileMenuToggled
                                        )
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
                                {/* Logo */}
                                {!isDesktopScreen && isMobileMenuToggled && (
                                    <Logo themeColors={themeColors} />
                                )}
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

                                <Tooltip
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    title="Log Out Account"
                                    enterDelay="500"
                                    sx={{ fontSize: "1rem" }}
                                >
                                    <Button
                                        cursor="pointer"
                                        onClick={() => dispatch(setLogout())}
                                        // size="large"
                                        // fullwidth
                                        sx={{
                                            borderRadius: "3rem",
                                            width: "8rem",
                                            backgroundColor: buttonLight2,

                                            color: headingText,
                                            "&:hover": {
                                                color: headingText,
                                                backgroundColor: buttonHover,
                                            },
                                        }}
                                    >
                                        <FlexBetween>
                                            <LogoutIcon
                                                sx={{
                                                    fontSize: "large",
                                                    color: headingText,
                                                }}
                                            />

                                            <Typography
                                                sx={{
                                                    pl: "1rem",
                                                    color: headingText,
                                                }}
                                            >
                                                Log Out
                                            </Typography>
                                        </FlexBetween>
                                    </Button>
                                </Tooltip>
                            </FlexBetween>
                        </Box>
                    </ClickAwayListener>
                )}
            </FlexBetween>
        </Box>
    );
};

export default Navbar;
