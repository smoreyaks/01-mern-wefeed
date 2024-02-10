import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = ({ themeColors, isDesktopScreen, isMobileMenuToggled }) => {
    // Theme Destructure
    const { headingText, textHover, buttonLight2 } = themeColors || {};

    const navigate = useNavigate();

    return (
        <Typography
            fontFamily="PrequelShadow"
            // fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color={headingText}
            onClick={() => {
                navigate("/home");
                // navigate(0);
            }}
            sx={{
                "&:hover": {
                    color: textHover,
                    cursor: "pointer",
                },
            }}
        >
            WeFeed
        </Typography>
    );
};

export default Logo;
