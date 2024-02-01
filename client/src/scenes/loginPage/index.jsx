// MUI Components
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Imported Components
import Form from "./Form";

// Font Icons
import PrequelShadowA from "../../components/svg/PrequelShadowA";

const LoginPage = () => {
    const { palette } = useTheme();
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h1"
                    color={palette.default.neutralGrey.white}
                    fontFamily="PrequelShadow"
                    fontStyle="bold"
                    fontSize="4rem"
                    textAlign="center"
                    className="childClass"
                    pb="2rem"
                    sx={{
                        transform: "translate(-6rem, 0 rem)",
                    }}
                >
                    Welcome to...
                </Typography>
                <Typography
                    variant="h1"
                    color={palette.default.neutralGrey.white}
                    fontFamily="PrequelShadow"
                    fontStyle="bold"
                    fontSize="7rem"
                    textAlign="center"
                >
                    WeFeed
                    <PrequelShadowA />
                </Typography>

                <Box
                    width={isDesktopScreen ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    border={`0.5rem solid ${palette.default.neutralGrey.lightest}`}
                    backgroundColor={palette.default.background.alt}
                >
                    <Form />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
