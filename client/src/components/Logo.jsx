import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo/WE_FEED_LOGO_DARK_20240220a.png";
import { Image } from "@mui/icons-material";

import { Box } from "@mui/material";

const Logo = ({ themeColors, isDesktopScreen, isMobileMenuToggled }) => {
    // Theme Destructure
    const { headingText, textHover, buttonLight2 } = themeColors || {};

    const navigate = useNavigate();

    return (
        <Box
            width="8rem"
            onClick={() => {
                navigate("/home");
                // navigate(0);
            }}
            sx={{
                height: "100%",
                fontSize: "clamp(1rem, 2rem, 2.25rem)",
                objectFit: "contain",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    color: textHover,
                    cursor: "pointer",
                },
            }}
        >
            <img height="100%" width="100%" alt="WeFeed" src={LogoIcon} />
        </Box>

        // <Typography
        //     fontFamily="PrequelShadow"
        //     // fontWeight="bold"
        //     fontSize="clamp(1rem, 2rem, 2.25rem)"
        //     color={headingText}
        //     sx={{
        // "&:hover": {
        //     color: textHover,
        //     cursor: "pointer",
        // },
        //     }}
        // >
        //     WeFeed
        // </Typography>
    );
};

export default Logo;
