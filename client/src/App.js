// Import Packages

import { useState, useEffect } from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Background from "./components/Background";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));
    const token = useSelector((state) => state.token);
    const { _id, picturePath } = useSelector((state) => state.user);

    // State
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const response = await fetch(`http://localhost:3005/users/${_id}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
        console.log("UserWidget.js - DATA - ", data);
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
        backgroundThemeImg,
    } = user;
    console.log("THEME_IMG:", backgroundThemeImg);

    return (
        <Background backgroundThemeImg={backgroundThemeImg}>
            {/* {backgroundThemeImg && (
                <img
                    width="100%"
                    height="auto"
                    alt="recipe"
                    src={`http://localhost:3005/assets/dessertTheme/${backgroundThemeImg}`}
                    // server\public\assets\dessertTheme\vecteezy_ice-cream-seamless-pattern-vector-illustration_9157472.jpg
                />
            )} */}
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
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
                                isAuth ? <ProfilePage /> : <Navigate to="/" />
                            }
                        />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </Background>
    );
}

export default App;
