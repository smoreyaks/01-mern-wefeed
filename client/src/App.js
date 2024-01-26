// React Packages
import { useState, useEffect } from "react";
import { useMemo } from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";

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

// Different Themes
import {
    darkTheme,
    lightTheme,
    dinnerTheme,
    dessertTheme,
    defaultTheme,
} from "./theme/theme";

// Theme Slice
import { themeSelect } from "./redux/theme/themeSlice";

// Backgorund Image
import backgroundThemeImg from "./assets/vecteezy_dango-dessert-sweets-japan-kawaii-doodle-flat-vector_7977760.jpg";

// Custom Components
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

function App() {
    // Old Theme - Dark & Light Mode
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    // New Theme Select

    // get theme from store
    const themeOption = useSelector((state) => state.themeOption);

    // initialize dispatch variable
    const dispatch = useDispatch();

    const isAuth = Boolean(useSelector((state) => state.token));
    const token = useSelector((state) => state.token);
    const { _id, picturePath } = useSelector((state) => state.user || {});

    // Theme
    const backgroundThemeColor = theme.palette.default.background.default;

    // State
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${_id}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUser(data);

        // console.log("UserWidget.js - DATA - ", data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,
        // backgroundThemeImg,
    } = user;

    return (
        <CardMedia
            src={
                // `https://server-vukx.onrender.com/assets/dessertThemeImg/${
                backgroundThemeImg
                // }`
            }
        >
            <BrowserRouter>
                <ThemeProvider
                    theme={
                        themeOption.defaultTheme
                            ? themeOption.dinnerTheme
                            : theme.dessertTheme
                    }
                >
                    <GlobalStyles
                        styles={{
                            body: {
                                backgroundColor: backgroundThemeColor,
                                background: `url(${backgroundThemeImg})`,
                                // background: `url(https://server-vukx.onrender.com/assets/dessertThemeImg/${backgroundThemeImg})`,
                                margin: 0,
                                padding: 0,
                            },
                        }}
                    />
                    <ScopedCssBaseline
                        enableColorScheme
                        sx={{
                            backgroundColor: backgroundThemeColor,
                            background: `url(${backgroundThemeImg})`,
                            // background: `url(https://server-vukx.onrender.com/assets/dessertThemeImg/${backgroundThemeImg})`,
                        }}
                    >
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
            </BrowserRouter>
        </CardMedia>
    );
}

export default App;
