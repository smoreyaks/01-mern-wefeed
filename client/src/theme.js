// Custom Fonts
// import TiltNeon from "./assets/fonts/TiltNeon/TiltNeon-Regular.ttf";
// import "../src/index.css";
// import { createTheme } from "@mui/material/styles";

/* --- Colours to Add ---

    - Cupcake Theme -
    #FBE3F1     // Pale Purple      (Lightest Pink)
    #FBD4E9     // Mimi Pink        (Light Pink)
    #FDBADD     // Lavender Pink    (Medium Pink)
    #C0E9E5     // Mint Green       (Light Teal)
    #9FDDD8     // Tiffany Blue     (Medium Teal)

    - Burger Theme -
    #DCC38A     // Ecru             (Beige)
    #E4572E     // Flame            (Red/Orange)
    #FFC914     // Jonquil          (Yellow)
    #56463C     // Umber            (Brown)
    #76B041     // Kelly Green      (Green)
    #DCC38A     // Ecru             (Beige)
    
    - Banana & Blueberry French Toast Theme
    #121824     // Rich Black       (Black)
    #455D7A     // Payne's Gray     (Dark Blue)
    #5D7795     // Slate Gray       (Light Blue)
    #B39A6F     // Lion             (Light Brown)
    #DFC970     // Citron           (Yellow)
    #EBDDB8     // Dutch White      (Beige)

    - Watermelon Theme - 
    #FFACAC     // Melon            (Medium Pink)
    #FFD6D6     // Tea Rose         (Light Pink)
    #A2E7B0     // Celadon          (Medium Green)
    #C9FCBB     // Tea Green        (Light Green)
    #D8FFA6     // Mindaro          (Light Yellow/Green)

    - Salmon Entree -
    #E9D0BA     // Desert Sand      (Beige)
    #F5B389     // Peach            (Light Orange)
    #E9BBAE     // Melon            (Medium Ornage/Pink)
    #F4D09C     // Sunset           (Medium Yellow)
    #C7D0A0     // Sage             (Medium Green)

*/

// Color Design Tokens
export const colorTokens = {
    // Default Theme
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "rgba(0, 0, 0, 70%)",
    },

    // Dark Mode Text Colour
    opaque: {
        10: "rgba(0, 0, 0, 10%)",
        30: "rgba(0, 0, 0, 30%)",
        50: "rgba(0, 0, 0, 50%)",
        70: "rgba(0, 0, 0, 70%)",
    },

    // Light Mode Text Colour
    whiteOpaque: {
        10: "rgba(255, 255, 255, 10%)",
        30: "rgba(255, 255, 255, 30%)",
        50: "rgba(255, 255, 255, 50%)",
        70: "rgba(255, 255, 255, 70%)",
    },

    //    - Trophy Icons -
    trophy: {
        gold: {
            100: "#FFF7CC",
            200: "#FFF099",
            300: "#FFE866",
            400: "#FFE033",
            500: "#FFD700",
            600: "#ffd700",
            700: "#ccac00",
            800: "#998100",
        },

        silver: {
            100: "#f2f2f2",
            200: "#e6e6e6",
            300: "#d9d9d9",
            400: "#cdcdcd",
            500: "#c0c0c0",
            600: "#9a9a9a",
            700: "#737373",
            800: "#4d4d4d",
            900: "#262626",
        },

        bronze: {
            100: "#f5e5d6",
            200: "#ebccad",
            300: "#e1b284",
            400: "#d7995b",
            500: "#cd7f32",
            600: "#a46628",
            700: "#7b4c1e",
            800: "#523314",
            900: "#29190a",
        },
    },

    //    - Cupcake Theme -
    cupcake: {
        pink: {
            100: "#FBE3F1", // Pale Purple      (Lightest Pink)
            150: "#FADCED", // Pale Purple      (Lightest Pink)
            160: "#FAD7EB", // Pale Purple      (Lightest Pink)
            200: "#FBD4E9", // Mimi Pink        (Light Pink)
            300: "#FACAE4", // Lavender Pink    (Medium Pink)
        },
        teal: {
            100: "#eaf4f6", // Mint Green       (Light Teal)
            200: "#eaf4f6", // Mint Green       (Light Teal)
            300: "#eaf4f6", // Tiffany Blue     (Medium Teal)
            400: "#d8ebee", // Tiffany Blue     (Medium Teal)
            // 100: "#C0E9E5", // Mint Green       (Light Teal)
            // 200: "#C0E9E5", // Mint Green       (Light Teal)
            // 300: "#9FDDD8", // Tiffany Blue     (Medium Teal)
            // 400: "#9FDDD8", // Tiffany Blue     (Medium Teal)
        },
    },
    sushi: {
        purple: {
            // 150: "#CFC4FF",
            // 160: "#C4B9F1",
            100: "#baacc1",
            200: "#a391ac",
            // 150: "#8c7597",
            150: "#ABA2D3",
            160: "#8c7597",
            300: "#7D6887",
            // 400: "#7D6887",
            // 500: "#6D5B76",
            // 600: "#5E4E65",
            // 900: "#4D4053",
            // 1000: "#493946",
        },
        blue: {
            100: "#CFC4FF",
            // 200: "#C4B9F1",
            // 100: "#ABA2D3",
            100: "#938BB5",
            // 400: "#7B7597",
            400: "#6D6887",
            // 700: "#605B76",
            // 800: "#524E65",
            // 900: "#444154",
        },
    },
    sushiGrey: {
        // Primary One - Main
        grey2: {
            100: "#f5f5f5",
            200: "#ebebeb",
            // 300: "#e0e0e0",
            // 400: "#d6d6d6",
            // 200: "#cccccc",
            // 100: "#999999",
            100: "#4C5379",
            // 400: "#555555",
            400: "#26293c",
            // 400: "#333333",
            // 900: "#000000",
        },
        // Primary Two - Button
        grey1: {
            // 150: "#f5f5f5",
            160: "#ebebeb",
            // 300: "#e0e0e0",
            // 150: "#d6d6d6",
            150: "#363b56",
            300: "#524E65",
            // 700: "#666666",
            // 800: "#333333",
            // 900: "#000000",
        },
    },

    //    - Burger Theme -
    burger: {
        brown: {
            200: "#DCC38A", // Ecru             (Beige)
            1000: "#56463C", // Umber            (Brown)
        },
        red: {
            100: "#faddd5", // Flame            (Red/Orange)
            200: "#f4bcab",
            300: "#ef9a82",
            400: "#e97958",
            500: "#e4572e", // Starting Color
            600: "#b64625",
            700: "#89341c",
            800: "#5b2312",
            900: "#2e1109",
        },
        yellow: {
            100: "#fff4d0", // Jonquil          (Yellow)
            150: "#fff4d0", // Jonquil          (Yellow)
            160: "#fff4d0", // Jonquil          (Yellow)
            200: "#ffe9a1",
            300: "#ffdf72",
            400: "#ffd443",
            500: "#ffc914", // Starting Color
            600: "#cca110",
            700: "#99790c",
            800: "#665008",
            900: "#332804",
        },

        green: {
            100: "#e4efd9", // Kelly Green      (Green)
            200: "#c8dfb3",
            300: "#add08d",
            400: "#91c067",
            500: "#76b041", // Starting Color
            600: "#5e8d34",
            700: "#476a27",
            800: "#2f461a",
            900: "#18230d",
        },
    },
};

// MUI Theme Settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // Default Dark Mode Palette
                      default: {
                          primary: {
                              dark: colorTokens.sushiGrey.grey1[300],
                              main: colorTokens.sushiGrey.grey2[200],
                              light: colorTokens.sushiGrey.grey2[100],
                          },

                          // grey2
                          primaryOne: {
                              dark: colorTokens.sushiGrey.grey2[400],
                              main: colorTokens.sushiGrey.grey2[300],
                              light: colorTokens.sushiGrey.grey2[200],
                              lightest: colorTokens.sushiGrey.grey2[100],
                          },
                          // grey1
                          primaryTwo: {
                              dark: colorTokens.sushiGrey.grey1[300],
                              main: colorTokens.sushiGrey.grey1[200],
                              light3: colorTokens.sushiGrey.grey1[160],
                              light2: colorTokens.sushiGrey.grey1[150],
                              light: colorTokens.sushiGrey.grey1[100],
                          },

                          neutral: {
                              dark: colorTokens.sushiGrey.grey1[300],
                              main: colorTokens.sushiGrey.grey2[300],
                              mediumMain: colorTokens.sushiGrey.grey2[300],
                              medium: colorTokens.sushiGrey.grey1[200],
                              light: colorTokens.sushiGrey.grey1[100],
                          },

                          neutralGrey: {
                              dark: colorTokens.grey[900],
                              main: colorTokens.grey[500],
                              mediumMain: colorTokens.grey[300],
                              medium: colorTokens.grey[200],
                              light: colorTokens.grey[100],
                              lightest: colorTokens.grey[0],
                              white: colorTokens.whiteOpaque[70],
                              fade50: colorTokens.whiteOpaque[50],
                              fade30: colorTokens.whiteOpaque[30],
                              fade10: colorTokens.whiteOpaque[10],
                          },

                          background: {
                              default: colorTokens.sushiGrey.grey1[200],
                              alt: colorTokens.sushiGrey.grey2[400],
                          },
                      },
                      trophy: {
                          gold: colorTokens.trophy.gold[700],
                          silver: colorTokens.trophy.silver[600],
                          bronze: colorTokens.trophy.bronze[600],
                      },
                  }
                : {
                      // Light Mode Palette
                      default: {
                          primary: {
                              dark: colorTokens.cupcake.pink[300],
                              main: colorTokens.cupcake.teal[200],
                              light: colorTokens.cupcake.teal[100],
                          },
                          // Teal
                          primaryOne: {
                              dark: colorTokens.cupcake.teal[400],
                              main: colorTokens.cupcake.teal[300],
                              light: colorTokens.cupcake.teal[200],
                              lightest: colorTokens.cupcake.teal[100],
                          },
                          // Pink
                          primaryTwo: {
                              dark: colorTokens.cupcake.pink[300],
                              main: colorTokens.cupcake.pink[200],
                              light3: colorTokens.cupcake.pink[160],
                              light2: colorTokens.cupcake.pink[150],
                              light: colorTokens.cupcake.pink[100],
                          },

                          neutral: {
                              dark: colorTokens.cupcake.pink[300],
                              main: colorTokens.cupcake.teal[300],
                              mediumMain: colorTokens.cupcake.teal[300],
                              medium: colorTokens.cupcake.pink[200],
                              light: colorTokens.cupcake.pink[100],
                          },
                          neutralGrey: {
                              dark: colorTokens.grey[900],
                              main: colorTokens.grey[500],
                              mediumMain: colorTokens.grey[300],
                              medium: colorTokens.grey[200],
                              light: colorTokens.grey[100],
                              lightest: colorTokens.grey[0],
                              white: colorTokens.opaque[70],
                              fade50: colorTokens.opaque[50],
                              fade30: colorTokens.opaque[30],
                              fade10: colorTokens.opaque[10],
                          },
                          background: {
                              default: colorTokens.cupcake.pink[200],
                              alt: colorTokens.cupcake.teal[400],
                          },
                      },
                      trophy: {
                          gold: colorTokens.trophy.gold[500],
                          silver: colorTokens.trophy.silver[500],
                          bronze: colorTokens.trophy.bronze[500],
                      },
                  }),
        },

        // Typography Styles
        typography: {
            button: {
                textTransform: "none",
            },
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            color: colorTokens.opaque[70],
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),

                fontSize: 14,
            },
            p: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
            },
        },

        // Style Overrides
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: colorTokens.opaque[70],
                        backgroundColor: colorTokens.cupcake.pink[300],

                        // colorTokens.cupcake.pink[300],
                        border: `1px solid ${colorTokens.opaque[70]}`,
                    },
                },
            },
        },
    };
};
