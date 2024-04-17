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
                    // pt: "5.5rem",
                    pt: "15vh",
                }}
            >
                {/* Splash Graphic Container */}
                <Box
                    // backgroundColor={palette.default.background.alt}
                    sx={{
                        display: "flex",
                        flex: "flex-row",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        width: "100%",
                    }}
                >
                    {/* Splash Graphic */}
                    <Box
                        sx={{
                            zIndex: "51",

                            height: isDesktopScreen
                                ? "20rem"
                                : isMediumScreen
                                ? "16rem"
                                : "42vw",
                            position: "absolute",
                            bottom: isDesktopScreen
                                ? "0rem"
                                : isMediumScreen
                                ? "0rem"
                                : "0rem",
                        }}
                    >
                        <img src={splashImg} height="100%" />
                    </Box>

                    {/* We Feed Logo  */}
                    <Box
                        sx={{
                            zIndex: "51",
                            // width: "15rem",
                            height: isDesktopScreen
                                ? "4.5rem"
                                : isMediumScreen
                                ? "3.5rem"
                                : "8vw",
                            position: "absolute",
                            // right: "16rem",
                            bottom: isDesktopScreen
                                ? "6rem"
                                : isMediumScreen
                                ? "5rem"
                                : "14vw",
                        }}
                    >
                        <img
                            src={mode === "dark" ? WeFeedLogoDM : WeFeedLogoLM}
                            height="100%"
                        />
                    </Box>

                    {/* Shoulder Graphic BG */}
                    <Box
                        backgroundColor={palette.default.background.alt}
                        sx={{
                            zIndex: "50",
                            display: "flex",
                            flex: "flex-row",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            bottom: isDesktopScreen
                                ? "-.25rem"
                                : isMediumScreen
                                ? "-.25rem"
                                : "-.25rem",
                            width: isDesktopScreen
                                ? "36rem"
                                : isMediumScreen
                                ? "30rem"
                                : "80vw",
                            height: isDesktopScreen
                                ? "5rem"
                                : isMediumScreen
                                ? "5rem"
                                : "13vw",
                            borderRadius: "6rem 6rem 0rem 0rem",
                            borderLeft: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            borderTop: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            borderRight: `0.25rem solid ${palette.default.neutralGrey.border}`,
                            // borderBottom: `0.25rem solid ${palette.default.neutralGrey.border}`,

                            // border: solid,
                        }}
                    />
                </Box>

                {/* Form BG Container */}
                <Box
                    backgroundColor={palette.default.background.alt}
                    sx={{
                        zIndex: "40",
                        width: isDesktopScreen
                            ? "40rem"
                            : isMediumScreen
                            ? "36rem"
                            : "95vw",
                        // mx: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
                        border: `0.25rem solid ${palette.default.neutralGrey.border}`,
                    }}
                >
                    {/* Form BG Left Column */}
                    <Box
                        sx={{
                            zIndex: "50",
                            width: isDesktopScreen
                                ? "4rem"
                                : isMediumScreen
                                ? "4rem"
                                : "0.5rem",
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
                                ? "34rem"
                                : "80vw"
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
                                : "1rem 1rem",
                            m: isDesktopScreen
                                ? "0rem 0rem"
                                : isMediumScreen
                                ? "0rem 0rem"
                                : "1rem .5rem",
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
                    {/* Form BG Right Column */}
                    <Box
                        sx={{
                            width: "4rem",
                            height: "auto",
                            borderRadius: "0rem 1.5rem 1.5rem 0",
                            width: isDesktopScreen
                                ? "4rem"
                                : isMediumScreen
                                ? "4rem"
                                : "0.5rem",
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
