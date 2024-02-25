// React Packages
import { useState, useEffect } from "react";
import { useMemo } from "react";

import {
    BrowserRouter,
    Navigate,
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// MUI Components
import {
    Box,
    CardMedia,
    GlobalStyles,
    ScopedCssBaseline,
    ThemeProvider,
    useTheme,
} from "@mui/material";

// Theme
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

// Custom Components
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import Navbar from "./scenes/navbar";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));
    const token = useSelector((state) => state.token);
    const { _id, picturePath } = useSelector((state) => state.user || {});

    // Theme
    const backgroundThemeColor = theme.palette.default.background.default;

    // ---------- Theme ----------
    const primary = theme.palette.default.primary.main; // ---- ! Need to remove, superseded

    // Text
    const whiteText = theme.palette.default.neutralGrey.white; // Delete
    const headingText = theme.palette.default.neutralGrey.white; // Text Color
    const textHover = theme.palette.default.neutralGrey.fade; // Text Hover Color
    const textMain = theme.palette.default.neutralGrey.white; // Text Color
    const recipeText = theme.palette.default.neutral.main;

    // Follower Icon
    const followerIconOutline = theme.palette.default.neutralGrey.icon;
    const followerIconBack = theme.palette.default.primaryOne.main;
    const followerIconBackHover = theme.palette.default.primaryOne.light;

    // Button Main
    const buttonLight = theme.palette.default.primaryTwo.light;
    const buttonLight2 = theme.palette.default.primaryTwo.light2;
    const buttonLight3 = theme.palette.default.primaryTwo.light3;
    const buttonHover = theme.palette.default.primaryTwo.dark; // Button Hover Color

    // Background Main Color
    const backgroundPrimary = theme.palette.default.primaryOne.main;
    const backgroundMain = theme.palette.default.primaryOne.dark;
    const navbarMain = theme.palette.default.primaryOne.navbar;

    // Panel / Subsection Main
    const recipeTextPanel = theme.palette.default.neutral.main;
    const mainBackPanel = theme.palette.default.neutral.main;
    const recipeStepsPanel = theme.palette.default.primary.light;
    const panelMain = theme.palette.default.primary.light;

    // Panel / Subsection Hover
    const recipeStepsPanelHover = theme.palette.default.primaryTwo.light;
    const panelMainHover = theme.palette.default.primaryTwo.light;

    // Border
    const widgetBorder = theme.palette.default.neutralGrey.borderNeutral;

    const themeColors = {
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
        widgetBorder,
        navbarMain,
    };

    // State
    const [userObject, setUserObject] = useState(null);
    const [backgroundImgState, setBackgroundImgState] = useState("");

    const modeFunction = () => {
        if (mode === "light") {
            // Light Mode = Dango
            setBackgroundImgState(
                "vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg"
            );
        } else {
            // Dark Mode = Ice Cream
            setBackgroundImgState("vecteezy_sushi_seamless-pattern_navy.jpg");
        }
    };

    const getUser = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${_id}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUserObject(data);
    };

    useEffect(() => {
        modeFunction();
        getUser();
        // getBackgroundImage();
    }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!userObject) {
        return null;
    }

    return (
        <CardMedia
        // src={`https://server-vukx.onrender.com/assets/bgThemeImg/${backgroundImgState}`}
        >
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyles
                        styles={{
                            body: {
                                backgroundColor: backgroundThemeColor,
                                background: `url(https://server-vukx.onrender.com/assets/bgThemeImg/${backgroundImgState})`,
                                margin: 0,
                                padding: 0,
                            },
                        }}
                    />

                    <ScopedCssBaseline
                        enableColorScheme
                        sx={{
                            backgroundColor: backgroundThemeColor,
                            background: `url(https://server-vukx.onrender.com/assets/bgThemeImg/${backgroundImgState})`,
                        }}
                    >
                        {/* <Navbar
                            userId={_id}
                            picturePath={picturePath}
                            themeColors={themeColors}
                        /> */}
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route
                                path="/home"
                                element={
                                    isAuth ? <HomePage /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/profile/:userId"
                                element={
                                    isAuth ? (
                                        <ProfilePage />
                                    ) : (
                                        <Navigate to="/" />
                                    )
                                }
                            />
                        </Routes>
                    </ScopedCssBaseline>
                </ThemeProvider>
            </HashRouter>
        </CardMedia>
    );
}

export default App;
