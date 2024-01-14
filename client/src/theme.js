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

// Imported Fonts
import { createTheme } from "@mui/material/styles";

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
        1000: "rgba(0, 0, 0, 65%)",
    },

    //    - Trophy Icons -
    trophy: {
        gold: "#FFD700",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
    },

    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    },

    //    - Cupcake Theme -
    cupcake: {
        pink: {
            100: "#FBE3F1", // Pale Purple      (Lightest Pink)
            200: "#FBD4E9", // Mimi Pink        (Light Pink)
            300: "#FDBADD", // Lavender Pink    (Medium Pink)
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
        cream: {
            100: "#FFF5EB",
            200: "#FEE9BA",
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
                              light: colorTokens.cupcake.pink[100],
                              //   lightest: colorTokens.cupcake.cream[100],
                          },
                          // Beige
                          primaryThree: {
                              main: colorTokens.cupcake.cream[200],
                              light: colorTokens.cupcake.cream[100],
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
                              white: colorTokens.grey[0],
                          },
                          background: {
                              default: colorTokens.cupcake.pink[200],
                              alt: colorTokens.cupcake.teal[400],
                          },
                      },
                      trophy: {
                          gold: colorTokens.trophy["gold"],
                          silver: colorTokens.trophy["silver"],
                          bronze: colorTokens.trophy["bronze"],
                      },

                      // Dessert Theme Dark Mode Palette - Change Colours to Suit Theme
                      //   dessert: {
                      //       primary: {
                      //           dark: colorTokens.cupcake[200],
                      //           main: colorTokens.cupcake[500],
                      //           light: colorTokens.cupcake[800],
                      //       },
                      //       neutral: {
                      //           dark: colorTokens.cupcake[100],
                      //           main: colorTokens.cupcake[200],
                      //           mediumMain: colorTokens.cupcake[300],
                      //           medium: colorTokens.cupcake[400],
                      //           light: colorTokens.cupcake[700],
                      //       },
                      //       background: {
                      //           default: colorTokens.cupcake[900],
                      //           alt: colorTokens.cupcake[800],
                      //       },
                      //   },
                      // Dinner Theme Dark Mode Palette - Change Colours to Suit Theme
                      //   dinner: {
                      //       primary: {
                      //           dark: colorTokens.dinnerColor[200],
                      //           main: colorTokens.dinnerColor[500],
                      //           light: colorTokens.dinnerColor[800],
                      //       },
                      //       neutral: {
                      //           dark: colorTokens.dinnerMono[100],
                      //           main: colorTokens.dinnerMono[200],
                      //           mediumMain: colorTokens.dinnerMono[300],
                      //           medium: colorTokens.dinnerMono[400],
                      //           light: colorTokens.dinnerMono[700],
                      //       },
                      //       background: {
                      //           default: colorTokens.dinnerMono[900],
                      //           alt: colorTokens.dinnerMono[800],
                      //       },
                      //   },
                  }
                : {
                      // Light Mode Palette
                      default: {
                          primary: {
                              dark: colorTokens.cupcake.pink[300],
                              main: colorTokens.cupcake.teal[200],
                              light: colorTokens.cupcake.teal[100],
                          },
                          primaryOne: {
                              dark: colorTokens.cupcake.teal[400],
                              main: colorTokens.cupcake.teal[300],
                              light: colorTokens.cupcake.teal[200],
                              lightest: colorTokens.cupcake.teal[100],
                          },
                          primaryTwo: {
                              dark: colorTokens.cupcake.pink[300],
                              main: colorTokens.cupcake.pink[200],
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
                              white: colorTokens.grey[1000],
                          },
                          background: {
                              default: colorTokens.cupcake.pink[200],
                              alt: colorTokens.cupcake.teal[400],
                          },
                      },
                      trophy: {
                          gold: colorTokens.trophy["gold"],
                          silver: colorTokens.trophy["silver"],
                          bronze: colorTokens.trophy["bronze"],
                      },

                      //   default: {
                      //       primary: {
                      //           dark: colorTokens.primary[700],
                      //           main: colorTokens.primary[500],
                      //           light: colorTokens.primary[50],
                      //       },
                      //       neutral: {
                      //           dark: colorTokens.grey[700],
                      //           main: colorTokens.grey[500],
                      //           mediumMain: colorTokens.grey[400],
                      //           medium: colorTokens.grey[300],
                      //           light: colorTokens.grey[50],
                      //       },
                      //       background: {
                      //           default: colorTokens.grey[10],
                      //           alt: colorTokens.grey[0],
                      //       },
                      //   },
                      // Dessert Theme Light Mode Palette - Change Colours to Suit Theme
                      //   dessert: {
                      //       primary: {
                      //           dark: colorTokens.dessertColor[700],
                      //           main: colorTokens.dessertColor[500],
                      //           light: colorTokens.dessertColor[50],
                      //       },
                      //       neutral: {
                      //           dark: colorTokens.dessertMono[700],
                      //           main: colorTokens.dessertMono[500],
                      //           mediumMain: colorTokens.dessertMono[400],
                      //           medium: colorTokens.dessertMono[300],
                      //           light: colorTokens.dessertMono[50],
                      //       },
                      //       background: {
                      //           default: colorTokens.dessertMono[10],
                      //           alt: colorTokens.dessertMono[0],
                      //       },
                      //   },
                      // Dinner Theme Light Mode Palette - Change Colours to Suit Theme
                      //   dinner: {
                      //       primary: {
                      //           dark: colorTokens.dinnerColor[700],
                      //           main: colorTokens.dinnerColor[500],
                      //           light: colorTokens.dinnerColor[50],
                      //       },
                      //       neutral: {
                      //           dark: colorTokens.dinnerMono[700],
                      //           main: colorTokens.dinnerMono[500],
                      //           mediumMain: colorTokens.dinnerMono[400],
                      //           medium: colorTokens.dinnerMono[300],
                      //           light: colorTokens.dinnerMono[50],
                      //       },
                      //       background: {
                      //           default: colorTokens.dinnerMono[10],
                      //           alt: colorTokens.dinnerMono[0],
                      //       },
                      //   },
                  }),
        },

        // Typography Styles
        typography: {
            button: {
                textTransform: "none",
            },
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,

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
        // components: {
        //     // Name of the component
        //     MuiButton: {
        //         styleOverrides: {
        //             // Name of the slot
        //             root: {
        //                 // Some CSS
        //                 fontSize: "1rem",
        //             },
        //         },
        //     },
        // },
    };
};
