/* --- Colours to Add ---

    - Cupcake Theme -
    #FBE3F1     // Pale Purple      (Lightest Pink)
    #FBD4E9     // Mimi Pink        (Light Pink)
    #FDBADD     // Lavender Pink    (Medium Pink)
    #C0E9E5     // Mint Green       (Light Teal)
    #9FDDD8     // Tiffany Blue     (Medium Teal)

    - Burger Theme -
    #E4572E     // Flame            (Red/Orange)
    #DCC38A     // Ecru             (Beige)
    #FFC914     // Jonquil          (Yellow)
    #56463C     // Umber            (Brown)
    #76B041     // Kelly Green      (Green)
    
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
        1000: "#000000",
    },

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

    // Dessert Theme
    dessertColor: {
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

    dessertMono: {
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
        1000: "#000000",
    },

    // Dinner Theme
    dinnerColor: {
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

    dinnerMono: {
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
        1000: "#000000",
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
                              dark: colorTokens.primary[200],
                              main: colorTokens.primary[500],
                              light: colorTokens.primary[800],
                          },
                          neutral: {
                              dark: colorTokens.grey[100],
                              main: colorTokens.grey[200],
                              mediumMain: colorTokens.grey[300],
                              medium: colorTokens.grey[400],
                              light: colorTokens.grey[700],
                          },
                          background: {
                              default: colorTokens.grey[900],
                              alt: colorTokens.grey[800],
                          },
                      },
                      trophy: {
                          gold: colorTokens.trophy["gold"],
                          silver: colorTokens.trophy["silver"],
                          bronze: colorTokens.trophy["bronze"],
                      },

                      // Dessert Theme Dark Mode Palette - Change Colours to Suit Theme
                      dessert: {
                          primary: {
                              dark: colorTokens.dessertColor[200],
                              main: colorTokens.dessertColor[500],
                              light: colorTokens.dessertColor[800],
                          },
                          neutral: {
                              dark: colorTokens.dessertMono[100],
                              main: colorTokens.dessertMono[200],
                              mediumMain: colorTokens.dessertMono[300],
                              medium: colorTokens.dessertMono[400],
                              light: colorTokens.dessertMono[700],
                          },
                          background: {
                              default: colorTokens.dessertMono[900],
                              alt: colorTokens.dessertMono[800],
                          },
                      },
                      // Dinner Theme Dark Mode Palette - Change Colours to Suit Theme
                      dinner: {
                          primary: {
                              dark: colorTokens.dinnerColor[200],
                              main: colorTokens.dinnerColor[500],
                              light: colorTokens.dinnerColor[800],
                          },
                          neutral: {
                              dark: colorTokens.dinnerMono[100],
                              main: colorTokens.dinnerMono[200],
                              mediumMain: colorTokens.dinnerMono[300],
                              medium: colorTokens.dinnerMono[400],
                              light: colorTokens.dinnerMono[700],
                          },
                          background: {
                              default: colorTokens.dinnerMono[900],
                              alt: colorTokens.dinnerMono[800],
                          },
                      },
                  }
                : {
                      // Light Mode Palette
                      default: {
                          primary: {
                              dark: colorTokens.primary[700],
                              main: colorTokens.primary[500],
                              light: colorTokens.primary[50],
                          },
                          neutral: {
                              dark: colorTokens.grey[700],
                              main: colorTokens.grey[500],
                              mediumMain: colorTokens.grey[400],
                              medium: colorTokens.grey[300],
                              light: colorTokens.grey[50],
                          },
                          background: {
                              default: colorTokens.grey[10],
                              alt: colorTokens.grey[0],
                          },
                      },
                      // Dessert Theme Light Mode Palette - Change Colours to Suit Theme
                      dessert: {
                          primary: {
                              dark: colorTokens.dessertColor[700],
                              main: colorTokens.dessertColor[500],
                              light: colorTokens.dessertColor[50],
                          },
                          neutral: {
                              dark: colorTokens.dessertMono[700],
                              main: colorTokens.dessertMono[500],
                              mediumMain: colorTokens.dessertMono[400],
                              medium: colorTokens.dessertMono[300],
                              light: colorTokens.dessertMono[50],
                          },
                          background: {
                              default: colorTokens.dessertMono[10],
                              alt: colorTokens.dessertMono[0],
                          },
                      },
                      // Dinner Theme Light Mode Palette - Change Colours to Suit Theme
                      dinner: {
                          primary: {
                              dark: colorTokens.dinnerColor[700],
                              main: colorTokens.dinnerColor[500],
                              light: colorTokens.dinnerColor[50],
                          },
                          neutral: {
                              dark: colorTokens.dinnerMono[700],
                              main: colorTokens.dinnerMono[500],
                              mediumMain: colorTokens.dinnerMono[400],
                              medium: colorTokens.dinnerMono[300],
                              light: colorTokens.dinnerMono[50],
                          },
                          background: {
                              default: colorTokens.dinnerMono[10],
                              alt: colorTokens.dinnerMono[0],
                          },
                      },
                  }),
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
