// React Packages
import { useState, useEffect } from "react";
import { useMemo } from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

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

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));
    const token = useSelector((state) => state.token);
    const { _id, picturePath } = useSelector((state) => state.user || {});

    // Theme
    const backgroundThemeColor = theme.palette.default.background.default;

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
            setBackgroundImgState(
                "vecteezy_ice-cream-seamless-pattern-vector-illustration_9157472.jpg"
            );
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
        // src={`https://server-vukx.onrender.com/assets/dessertThemeImg/${backgroundImgState}`}
        >
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyles
                        styles={{
                            body: {
                                backgroundColor: backgroundThemeColor,
                                background: `url(https://server-vukx.onrender.com/assets/dessertThemeImg/${backgroundImgState})`,
                                margin: 0,
                                padding: 0,
                            },
                        }}
                    />

                    <ScopedCssBaseline
                        enableColorScheme
                        sx={{
                            backgroundColor: backgroundThemeColor,
                            background: `url(https://server-vukx.onrender.com/assets/dessertThemeImg/${backgroundImgState})`,
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
