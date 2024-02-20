import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme, borderColor }) => ({
    padding: "1rem 1.5rem 1rem 1.5rem",
    backgroundColor: theme.palette.default.background.alt,
    borderRadius: "0.75rem",
    // border: `2px solid ${borderColor}`,
}));

export default WidgetWrapper;
