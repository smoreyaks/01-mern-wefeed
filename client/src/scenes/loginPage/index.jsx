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
                    backgroundColor={palette.default.background.alt}
                    sx={{
                        zIndex: "60",
                        display: "flex",
                        flex: "flex-row",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        // width: "10rem",
                        bottom: "-.25rem",
                        width: "36rem",
                        height: "5rem",
                        borderRadius: "6rem 6rem 0rem 0rem",
                        borderLeft: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        borderTop: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        borderRight: `0.25rem solid ${palette.default.neutralGrey.border}`,
                        // borderBottom: `0.25rem solid ${palette.default.neutralGrey.border}`,

                        // border: solid,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                zIndex: "51",
                                // width: "15rem",
                                height: "20rem",
                                position: "absolute",
                                top: "-15.5rem",
                                // right: "0rem",
                            }}
                        >
                            <img src={splashImg} height="100%" />
                        </Box>
                        <Box
                            sx={{
                                zIndex: "51",
                                // width: "15rem",
                                height: "4.5rem",
                                position: "absolute",
                                // right: "16rem",
                                top: "-6rem",
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
                    </Box>
                </Box>

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
