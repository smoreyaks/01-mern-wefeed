// React & React Router Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Components & Hooks
import {
    Box,
    IconButton,
    Button,
    Container,
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
    const mode = useSelector((state) => state.mode);

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

                        <IconButton onClick={() => dispatch(setMode())}>
                            {mode === "dark" ? (
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    placement="top"
                                    title="Toggle Dark Mode"
                                    enterDelay="500"
                                    sx={{
                                        fontSize: "1rem",
                                        color: headingText,
                                    }}
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
                                    title="Toggle Light Mode"
                                    enterDelay="500"
                                    sx={{
                                        fontSize: "1rem",
                                        color: headingText,
                                    }}
                                >
                                    <LightMode
                                        sx={{
                                            color: headingText,
                                            fontSize: "25px",
                                        }}
                                    />
                                </Tooltip>
                            )}
                        </IconButton>

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
                            <Menu sx={{ color: headingText }} />
                        </IconButton>
                    </FlexBetween>
                )}

                {/*----------------------------- */}
                {/* -------- Mobile Nav -------- */}
                {/*----------------------------- */}
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
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                borderLeft: `0.5rem solid #FFFFFF `,
                            }}
                        >
                            <Container
                                sx={{
                                    py: "2rem",
                                    height: "100%",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexDirection: "column",
                                        borderRadius: "0.75rem",
                                        backgroundColor: recipeStepsPanel,
                                        height: "100%",
                                    }}
                                >
                                    {/* Close Icon Section*/}
                                    <Container>
                                        <Box
                                            display="flex"
                                            justifyContent="flex-end"
                                            py="1rem"
                                        >
                                            <IconButton
                                                onClick={() =>
                                                    setIsMobileMenuToggled(
                                                        !isMobileMenuToggled
                                                    )
                                                }
                                            >
                                                <Close
                                                    sx={{ color: headingText }}
                                                />
                                            </IconButton>
                                        </Box>
                                        {/* ----------------------------------- */}
                                        {/* -------- Mobile Menu Items -------- */}
                                        {/* ----------------------------------- */}
                                        <Box>
                                            {/* Top Menu Section */}
                                            <FlexBetween
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                gap="2rem"
                                                sx={{
                                                    // borderRadius: "0.75rem",
                                                    p: "1rem",
                                                }}
                                            >
                                                {/* Logo */}
                                                {!isDesktopScreen &&
                                                    isMobileMenuToggled && (
                                                        <Logo
                                                            themeColors={
                                                                themeColors
                                                            }
                                                        />
                                                    )}
                                                <Tooltip
                                                    TransitionComponent={Zoom}
                                                    placement="top"
                                                    title="User Profile"
                                                    enterDelay="500"
                                                    sx={{
                                                        fontSize: "1rem",
                                                        color: headingText,
                                                    }}
                                                >
                                                    {/* Profile Button */}
                                                    <Button
                                                        cursor="pointer"
                                                        onClick={() => {
                                                            navigate(
                                                                `/profile/${userId}`
                                                            );
                                                            navigate(0);
                                                        }}
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-evenly",
                                                            borderRadius:
                                                                "3rem",
                                                            width: "8rem",
                                                            backgroundColor:
                                                                buttonLight2,
                                                            color: headingText,
                                                            "&:hover": {
                                                                // color: headingText,
                                                                backgroundColor:
                                                                    buttonHover,
                                                            },
                                                        }}
                                                    >
                                                        <UserImage
                                                            size="25px"
                                                            image={
                                                                user.picturePath
                                                            }
                                                        />

                                                        <Typography
                                                            sx={{
                                                                pl: "1rem",
                                                                color: headingText,
                                                            }}
                                                        >
                                                            Profile
                                                        </Typography>
                                                    </Button>
                                                </Tooltip>

                                                {/* Light & Dark Mode */}

                                                <Box>
                                                    <Button
                                                        cursor="pointer"
                                                        onClick={() =>
                                                            dispatch(setMode())
                                                        }
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-evenly",
                                                            borderRadius:
                                                                "3rem",
                                                            width: "8rem",
                                                            backgroundColor:
                                                                buttonLight2,
                                                            color: headingText,
                                                            fontSize: "25px",
                                                            "&:hover": {
                                                                // color: headingText,
                                                                backgroundColor:
                                                                    buttonHover,
                                                            },
                                                        }}
                                                    >
                                                        {mode === "dark" ? (
                                                            <Tooltip
                                                                TransitionComponent={
                                                                    Zoom
                                                                }
                                                                placement="top"
                                                                title="Toggle Dark Mode"
                                                                enterDelay="500"
                                                                sx={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="space-between"
                                                                    alignItems="center"
                                                                >
                                                                    <DarkMode
                                                                        sx={{
                                                                            color: headingText,
                                                                            fontSize:
                                                                                "25px",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        sx={{
                                                                            pl: "0.25rem",
                                                                        }}
                                                                    >
                                                                        Dark
                                                                        Mode
                                                                    </Typography>
                                                                </Box>
                                                            </Tooltip>
                                                        ) : (
                                                            <Tooltip
                                                                TransitionComponent={
                                                                    Zoom
                                                                }
                                                                placement="top"
                                                                title="Toggle Light Mode"
                                                                enterDelay="500"
                                                                sx={{
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                <Box
                                                                    display="flex"
                                                                    justifyContent="space-between"
                                                                    alignItems="center"
                                                                >
                                                                    <LightMode
                                                                        sx={{
                                                                            color: headingText,
                                                                            fontSize:
                                                                                "25px",
                                                                        }}
                                                                    />
                                                                    <Typography
                                                                        sx={{
                                                                            pl: "0.25rem",
                                                                        }}
                                                                    >
                                                                        Light
                                                                        Mode
                                                                    </Typography>
                                                                </Box>
                                                            </Tooltip>
                                                        )}
                                                    </Button>
                                                </Box>

                                                {/* Dark & Light Mode */}
                                                {/* <IconButton
                                            onClick={() => dispatch(setMode())}
                                            sx={{ fontSize: "25px" }}
                                            >
                                            {theme.palette.default.mode ===
                                            "dark" ? (
                                                <DarkMode
                                                sx={{ fontSize: "25px" }}
                                                >
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
                                        </IconButton> */}
                                            </FlexBetween>
                                            {/* End of Top Section */}
                                        </Box>
                                    </Container>

                                    {/* Footer Section */}
                                    <Container>
                                        {/* LogOut Icon */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Tooltip
                                                TransitionComponent={Zoom}
                                                placement="top"
                                                title="Log Out of WeFeed"
                                                enterDelay="500"
                                                sx={{ fontSize: "1rem" }}
                                            >
                                                <Button
                                                    cursor="pointer"
                                                    onClick={() =>
                                                        dispatch(setLogout())
                                                    }
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-evenly",
                                                        border: `1px solid ${headingText}`,
                                                        borderRadius: "3rem",
                                                        width: "8rem",

                                                        color: headingText,
                                                        "&:hover": {
                                                            color: headingText,
                                                            backgroundColor:
                                                                buttonHover,
                                                        },
                                                    }}
                                                >
                                                    <LogoutIcon
                                                        sx={{
                                                            // size: "25px",
                                                            fontSize: "25px",
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
                                                </Button>
                                            </Tooltip>
                                        </Box>
                                        <Box
                                            padding="1rem"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                p: "1rem",
                                                width: "auto",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: headingText,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                WeFeed 2024
                                            </Typography>
                                        </Box>
                                    </Container>
                                </Box>
                            </Container>
                        </Box>
                    </ClickAwayListener>
                )}
            </FlexBetween>
        </Box>
    );
};

export default Navbar;

// -------- DESKTOP --------

/* <ThemeSelect
    themeColors={themeColors}
    isDesktopScreen
/> */

/* Message Icon */
/* <IconButton>
        <Message sx={{ fontSize: "25px" }} />
    </IconButton> */

/* Notification Icon */
/* <IconButton>
        <Notifications sx={{ fontSize: "25px" }} />
    </IconButton> */

/* Help Icon */
/* <IconButton>
        <Help sx={{ fontSize: "25px" }} />
    </IconButton> */

// -------- MOBILE --------
/* Features To Add */

/* Messages Icon */
/* <Message sx={{ fontSize: "25px" }} /> */

/* Notifications Icon */
/* <Notifications sx={{ fontSize: "25px" }} /> */

/* Help Icon */
/* <Help sx={{ fontSize: "25px" }} /> */
