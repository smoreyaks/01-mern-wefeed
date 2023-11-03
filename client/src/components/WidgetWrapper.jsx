import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
    padding: "1rem 1.5rem 1rem 1.5rem",
    backgroundColor: theme.palette.default.background.alt,
    borderRadius: "0.75rem",
}));

export default WidgetWrapper;
