import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper: "#f2f2f2",
        },
        text: {
            primary: "#11111",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            paper: "#f2f2f2",
        },
        text: {
            primary: "#11111",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#222",
        },
        text: {
            primary: "#fff",
        },
    },
});

export const dinnerTheme = createTheme({
    palette: {
        mode: "dinnerTheme",
        background: {
            paper: "#222",
        },
        text: {
            primary: "#fff",
        },
    },
});

export const dessertTheme = createTheme({
    palette: {
        mode: "dessertTheme",
        background: {
            paper: "#222",
        },
        text: {
            primary: "#fff",
        },
    },
});
