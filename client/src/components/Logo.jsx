import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoDM from "../assets/logo/WE_FEED_LOGO_DM_20240219d.png";
import LogoLM from "../assets/logo/WE_FEED_LOGO_LM_20240219c.png";
import { Image } from "@mui/icons-material";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Logo = ({ themeColors, isDesktopScreen, isMobileMenuToggled }) => {
    // Theme Destructure
    const { headingText, textHover, buttonLight2, widgetBorder } =
        themeColors || {};

    const navigate = useNavigate();

    const mode = useSelector((state) => state.mode);

    const LogoIcon = mode === "dark" ? LogoDM : LogoLM;
    return (
        <Box
            width="8rem"
            onClick={() => {
                navigate("/home");
                navigate(0);
            }}
            sx={{
                height: "100%",
                fontSize: "clamp(1rem, 2rem, 2.25rem)",
                objectFit: "contain",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "&:hover": {
                    color: textHover,
                    cursor: "pointer",
                },
            }}
        >
            <img height="100%" width="90%" alt="WeFeed" src={LogoIcon} />
        </Box>
    );
};

export default Logo;
