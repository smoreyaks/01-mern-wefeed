// MUI Components
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Imported Components
import Form from "./Form";

// Font Icons
import PrequelShadowA from "../../components/svg/PrequelShadowA";

const LoginPage = () => {
    const { palette } = useTheme();

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

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
                <Typography
                    variant="h1"
                    color={palette.default.neutralGrey.white}
                    fontFamily="PrequelShadow"
                    fontStyle="bold"
                    fontSize="7rem"
                    textAlign="center"
                    sx={{
                        fontSize: isDesktopScreen
                            ? "7rem"
                            : isMediumScreen
                            ? "7rem"
                            : "4.25rem",
                    }}
                >
                    WeFeed
                    {/* <PrequelShadowA /> */}
                </Typography>

                <Box
                    width={
                        isDesktopScreen
                            ? "40rem"
                            : isMediumScreen
                            ? "80%"
                            : "100%"
                    }
                    borderRadius="1.5rem"
                    border={`0.25rem solid ${palette.default.neutralGrey.border}`}
                    backgroundColor={palette.default.background.alt}
                    sx={{
                        p: isDesktopScreen
                            ? "2rem"
                            : isMediumScreen
                            ? "2rem"
                            : "1rem",
                        m: isDesktopScreen
                            ? "2rem auto"
                            : isMediumScreen
                            ? "2rem auto"
                            : "1rem .75rem",
                    }}
                >
                    <Form
                        isDesktopScreen={isDesktopScreen}
                        isMediumScreen={isMediumScreen}
                        isSmallScreen={isSmallScreen}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
