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
        buttonHover,
        whiteText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
        widgetBorder,
    } = themeColors || {};

    return (
        <WidgetWrapper
            borderColor={widgetBorder}
            sx={{
                maxWidth: "300px",
            }}
        >
            <FlexBetween>
                <Typography
                    color={followerIconOutline}
                    variant="h5"
                    fontWeight="bold"
                >
                    Sponsored
                </Typography>
                {/* <Typography color={followerIconOutline}>Create Ad</Typography> */}
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="https://server-vukx.onrender.com/assets/dinnerlyad1.jpeg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />

            <Typography color={followerIconOutline} fontWeight="bold">
                Dinnerly.com
            </Typography>

            <Typography color={followerIconOutline} m="0.5rem 0">
                Simple and affordable meal kits. Let Dinnerly take care of your
                meals. Get your kit today!
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;
