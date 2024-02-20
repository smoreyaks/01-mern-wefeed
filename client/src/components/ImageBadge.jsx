import { Box, Typography } from "@mui/material";
// type BadgeProps = {
//     BadgeIcon: ComponentType<BadgeIcon>,
// };

const ImageBadge = ({ badgeData, themeColors, BadgeIcon }) => {
    const {
        headingText,
        buttonHover,
        recipeStepsPanel,
        whiteText,
        recipeStepsPanelHover,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
        widgetBorder,
    } = themeColors || {};

    // const CookIcon = badgeIcon || {};

    return (
        <Box
            sx={{
                // top: "0.5rem",
                // left: "0.5rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "0.75rem",
                width: "4rem",
                color: headingText,
                zIndex: "180",
                backgroundColor: buttonHover,
            }}
        >
            {/* <BadgeIcon /> */}
            <Typography>{badgeData}</Typography>
        </Box>
    );
};

export default ImageBadge;
