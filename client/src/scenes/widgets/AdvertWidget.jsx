import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = ({ themeColors }) => {
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const main = palette.default.neutral.main;
    const medium = palette.default.neutral.medium;

    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        textHover,
        whiteText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
    } = themeColors || {};

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={headingText} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={headingText}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="https://server-vukx.onrender.com/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />

            <Typography color={headingText}>MikaCosmetics.com</Typography>

            <Typography color={headingText} m="0.5rem 0">
                Your pathway to stunning, immaculate beauty & made sure to make
                your skin is shining like light.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;
