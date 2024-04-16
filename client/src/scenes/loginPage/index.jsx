// MUI Components
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import { useSelector } from "react-redux";

// Imported Components
import Form from "./Form";

// Splash Image
import splashImg from "../../assets/loginPage/vecteezy_cooking-and-kitchen-illustration-concept-on-white-background_11634325_MOD.png";
import WeFeedLogoDM from "../../assets/loginPage/WE_FEED_TEXT_BIG_DM_20240416a.png";
import WeFeedLogoLM from "../../assets/loginPage/WE_FEED_TEXT_BIG_LM_20240416a.png";
import zIndex from "@mui/material/styles/zIndex";

const LoginPage = () => {
    const { palette } = useTheme();

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

    const mode = useSelector((state) => state.mode);

    return (
        <Box>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    m: "0 0.75rem",
                }}
            >
                <Box sx={{ width: "auto", height: "auto" }} />
                <Box
                    sx={{
                        display: "flex",
                        flex: "flex-row",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    {/* Splash Graphics & Logo Container */}
                    <Box
                        sx={{
                            zIndex: "60",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {/* Splash Image */}
                        <Box
                            sx={{
                                zIndex: "51",
                                // width: "15rem",
                                height: "20rem",
                                position: "absolute",
                                bottom: "0rem",
                                // right: "0rem",
                            }}
                        >
                            <img src={splashImg} height="100%" />
                        </Box>

                        {/* WeFeed Logo Text */}
                        <Box
                            sx={{
                                zIndex: "51",
                                // width: "15rem",
                                height: "4.5rem",
                                position: "absolute",
                                // right: "16rem",
                                top: "-10rem",
                            }}
                        >
                            <img
                                src={
                                    mode === "dark"
                                        ? WeFeedLogoDM
                                        : WeFeedLogoLM
                                }
                                height="100%"
                            />
                        </Box>
                        {/* Cloud CSS Container*/}
                        <Box
                            sx={{
                                zIndex: "50",
                                display: "flex",
                                flex: "flex-row",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            {/* Far Left Cloud */}
                            <Box
                                // backgroundColor={palette.default.background.alt}
                                backgroundColor="white"
                                sx={{
                                    zIndex: "60",
                                    position: "absolute",
                                    // width: "10rem",
                                    bottom: "-1.25rem",
                                    right: "9rem",
                                    width: "11rem",
                                    height: "10rem",
                                    borderRadius: "10rem",
                                    // border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                                    borderLeft: `0.5rem solid ${palette.default.background.alt}`,
                                    borderTop: `0.5rem solid ${palette.default.background.alt}`,
                                }}
                            />
                            {/* Left Cloud */}
                            <Box
                                // backgroundColor={palette.default.background.alt}
                                backgroundColor="white"
                                sx={{
                                    zIndex: "62",
                                    position: "absolute",
                                    // width: "10rem",
                                    bottom: "-2.25rem",
                                    right: "2rem",
                                    width: "12rem",
                                    height: "14rem",
                                    borderRadius: "10rem",
                                    // border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                                    // borderLeft: `0.5rem solid ${palette.default.background.alt}`,
                                    borderTop: `0.5rem solid ${palette.default.background.alt}`,
                                    borderBottom: `0.5rem solid ${palette.default.background.alt}`,
                                }}
                            />
                            {/* Middle Cloud */}
                            <Box
                                // backgroundColor={palette.default.background.alt}
                                backgroundColor="white"
                                sx={{
                                    zIndex: "62",
                                    position: "absolute",
                                    // width: "10rem",
                                    bottom: "-2.5rem",
                                    width: "18rem",
                                    height: "18rem",
                                    borderRadius: "10rem",
                                    // border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                                    // borderLeft: `0.5rem solid ${palette.default.background.alt}`,
                                    borderTop: `0.5rem solid ${palette.default.background.alt}`,
                                    borderBottom: `0.5rem solid ${palette.default.background.alt}`,
                                }}
                            />
                            {/* Right Cloud */}
                            <Box
                                // backgroundColor={palette.default.background.alt}
                                backgroundColor="white"
                                sx={{
                                    zIndex: "61",
                                    position: "absolute",
                                    // width: "10rem",
                                    bottom: "-2.5rem",
                                    left: "2rem",
                                    width: "12rem",
                                    height: "14rem",
                                    borderRadius: "10rem",
                                    // border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                                    borderLeft: `0.5rem solid ${palette.default.background.alt}`,
                                    borderTop: `0.5rem solid ${palette.default.background.alt}`,
                                    borderBottom: `0.5rem solid ${palette.default.background.alt}`,
                                }}
                            />
                            {/* Far Right Cloud */}
                            <Box
                                // backgroundColor={palette.default.background.alt}
                                backgroundColor="white"
                                sx={{
                                    zIndex: "60",
                                    position: "absolute",
                                    // width: "10rem",
                                    bottom: "-1.5rem",
                                    left: "8rem",
                                    width: "10rem",
                                    height: "10rem",
                                    borderRadius: "10rem",
                                    // border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                                    borderLeft: `0.5rem solid ${palette.default.background.alt}`,
                                    borderTop: `0.5rem solid ${palette.default.background.alt}`,
                                    borderBottom: `0.5rem solid ${palette.default.background.alt}`,
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Form Background Container*/}
                <Box
                    backgroundColor={palette.default.background.alt}
                    sx={{
                        zIndex: "55",
                        width: isDesktopScreen
                            ? "40rem"
                            : isMediumScreen
                            ? "80%"
                            : "100%",
                        mx: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
                        border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                    }}
                >
                    {/* Form BG Container Left Column */}
                    <Box
                        sx={{
                            zIndex: "50",
                            width: isDesktopScreen
                                ? "6rem"
                                : isMediumScreen
                                ? "2rem"
                                : "1rem",
                            height: "auto",
                            // borderRadius: "1.5rem 0 0rem 1.5rem",
                            // borderLeft: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderTop: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderRight: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderBottom: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        }}
                    />
                    {/* Form Container */}
                    <Box
                        width={
                            isDesktopScreen
                                ? "40rem"
                                : isMediumScreen
                                ? "70%"
                                : "100%"
                        }
                        // borderRadius="1.5rem"
                        backgroundColor={palette.default.background.alt}
                        sx={{
                            // display: "none",
                            zIndex: "52",
                            p: isDesktopScreen
                                ? "2rem 0"
                                : isMediumScreen
                                ? "2rem 0"
                                : "1rem",
                            m: isDesktopScreen
                                ? "0rem 0rem"
                                : isMediumScreen
                                ? "0rem 0rem"
                                : "1rem .75rem",
                            // borderLeft: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderTop: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderRight: "none",
                            // borderBottom: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        }}
                    >
                        <Form
                            isDesktopScreen={isDesktopScreen}
                            isMediumScreen={isMediumScreen}
                            isSmallScreen={isSmallScreen}
                        />
                    </Box>
                    {/* Form BG Container Left Column */}
                    <Box
                        sx={{
                            width: "4rem",
                            height: "auto",
                            borderRadius: "0rem 1.5rem 1.5rem 0",
                            width: isDesktopScreen
                                ? "6rem"
                                : isMediumScreen
                                ? "2rem"
                                : "1rem",
                            // m: '0rem 2rem 0rem 0rem '
                            // borderLeft: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderTop: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderRight: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderBottom: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
