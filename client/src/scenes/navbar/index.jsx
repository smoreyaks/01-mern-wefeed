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
    Divider,
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
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
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
    const testColor = theme.palette.default.primaryOne.light;
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
                                            color: followerIconOutline,
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
                                            color: followerIconOutline,
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
                                        color: followerIconOutline,
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
                            <Menu sx={{ color: followerIconOutline }} />
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
                            p="0rem"
                            backgroundColor={backgroundMain}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                borderLeft: `0.25rem solid #FFFFFF `,
                            }}
                        >
                            <Box
                                sx={{
                                    // py: "1rem",
                                    m: "1rem",
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
                                    <Box
                                        sx={{
                                            px: "1rem",
                                            width: "100%",
                                        }}
                                    >
                                        <Box
                                            display="flex"
                                            justifyContent="flex-end"
                                            py="1rem"
                                            px="0rem"
                                        >
                                            <IconButton
                                                onClick={() =>
                                                    setIsMobileMenuToggled(
                                                        !isMobileMenuToggled
                                                    )
                                                }
                                            >
                                                <Close
                                                    sx={{
                                                        color: followerIconOutline,
                                                    }}
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
                                                    p: "0rem",
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
                                                <Box sx={{ width: "100%" }}>
                                                    <Tooltip
                                                        TransitionComponent={
                                                            Zoom
                                                        }
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
                                                                    "space-around",
                                                                // borderRadius:
                                                                //     "3rem",
                                                                width: "100%",
                                                                // width: "8rem",
                                                                backgroundColor:
                                                                    buttonLight2,
                                                                borderRadius:
                                                                    "3rem",
                                                                color: followerIconOutline,
                                                                "&:hover": {
                                                                    // color: followerIconOutline,
                                                                    backgroundColor:
                                                                        buttonHover,
                                                                },
                                                            }}
                                                        >
                                                            <PersonRoundedIcon
                                                                size="25px"
                                                                color={
                                                                    followerIconOutline
                                                                }
                                                            />

                                                            <Typography
                                                                sx={{
                                                                    color: followerIconOutline,
                                                                    fontSize:
                                                                        "1rem",
                                                                }}
                                                            >
                                                                Profile
                                                            </Typography>
                                                        </Button>
                                                    </Tooltip>

                                                    <Divider
                                                        fill={recipeStepsPanel}
                                                        sx={{
                                                            py: "1px",
                                                            border: "0",
                                                        }}
                                                    />

                                                    {/* Light & Dark Mode */}
                                                    <Box sx={{ width: "100%" }}>
                                                        <Button
                                                            cursor="pointer"
                                                            // fullWidth
                                                            onClick={() =>
                                                                dispatch(
                                                                    setMode()
                                                                )
                                                            }
                                                            sx={{
                                                                display: "flex",
                                                                justifyContent:
                                                                    "space-between",
                                                                borderRadius:
                                                                    "3rem",
                                                                width: "100%",
                                                                // width: "8rem",
                                                                backgroundColor:
                                                                    buttonLight2,
                                                                color: followerIconOutline,
                                                                fontSize:
                                                                    "25px",
                                                                "&:hover": {
                                                                    // color: followerIconOutline,
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
                                                                        justifyContent="space-evenly"
                                                                        alignItems="center"
                                                                        width="100%"
                                                                    >
                                                                        <DarkMode
                                                                            sx={{
                                                                                color: followerIconOutline,
                                                                                fontSize:
                                                                                    "1rem",
                                                                            }}
                                                                        />
                                                                        <Typography
                                                                            sx={{
                                                                                fontSize:
                                                                                    "1rem",
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
                                                                        justifyContent="space-evenly"
                                                                        alignItems="center"
                                                                        width="100%"
                                                                    >
                                                                        <LightMode
                                                                            sx={{
                                                                                color: followerIconOutline,
                                                                                fontSize:
                                                                                    "25px",
                                                                            }}
                                                                        />
                                                                        <Typography
                                                                            sx={
                                                                                {
                                                                                    // pl: "0.25rem",
                                                                                }
                                                                            }
                                                                        >
                                                                            Light
                                                                            Mode
                                                                        </Typography>
                                                                    </Box>
                                                                </Tooltip>
                                                            )}
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </FlexBetween>
                                            {/* End of Top Section */}
                                        </Box>
                                    </Box>

                                    {/* Footer Section */}
                                    <Box sx={{ px: "1rem" }}>
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
                                                        border: `1px solid ${followerIconOutline}`,
                                                        borderRadius: "3rem",
                                                        width: "100%",

                                                        color: followerIconOutline,
                                                        "&:hover": {
                                                            color: followerIconOutline,
                                                            backgroundColor:
                                                                buttonHover,
                                                        },
                                                    }}
                                                >
                                                    <LogoutIcon
                                                        sx={{
                                                            // size: "25px",
                                                            fontSize: "25px",
                                                            color: followerIconOutline,
                                                        }}
                                                    />

                                                    <Typography
                                                        sx={{
                                                            pl: "1rem",
                                                            color: followerIconOutline,
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
                                                    color: followerIconOutline,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                WeFeed 2024
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </ClickAwayListener>
                )}
            </FlexBetween>
        </Box>
    );
};

export default Navbar;

// -------------------------
// -------- DESKTOP --------
// -------------------------

// -- Search Function --
/* {isDesktopScreen && (
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
    )} */

// -- Theme Select --
/* <ThemeSelect
    themeColors={themeColors}
    isDesktopScreen
/> */

// -- Account Messages --
/* Message Icon */
/* <IconButton>
        <Message sx={{ fontSize: "25px" }} />
    </IconButton> */

// -- Account Notifications --
/* Notification Icon */
/* <IconButton>
        <Notifications sx={{ fontSize: "25px" }} />
    </IconButton> */

// -- Support Options --
/* Help Icon */
/* <IconButton>
        <Help sx={{ fontSize: "25px" }} />
    </IconButton> */

// ------------------------
// -------- MOBILE --------
// ------------------------

// -- Account Messages --
/* Messages Icon */
/* <Message sx={{ fontSize: "25px" }} /> */

// -- Account Notifications --
/* Notifications Icon */
/* <Notifications sx={{ fontSize: "25px" }} /> */

// -- Support Options --
/* Help Icon */
/* <Help sx={{ fontSize: "25px" }} /> */
