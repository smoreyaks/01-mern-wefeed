import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Background = styled(Box, {
    shouldForwardProp: (prop) => prop !== "backgroundThemeImg",
    name: "Background",
    slot: "Root",
})(({ backgroundThemeImg }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundThemeImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}));

export default Background;
