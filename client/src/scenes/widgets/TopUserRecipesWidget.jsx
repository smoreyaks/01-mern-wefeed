// React Packages
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

// MUI
import { Box, Typography, Divider, Icon, useTheme } from "@mui/material";

// MUI Icons
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const TopUserRecipesWidget = ({ themeColors }) => {
    // ID
    const { userId } = useParams();

    // State
    const [userRecipes, setUserRecipes] = useState(null);
    const [user, setUser] = useState(null);

    // Token
    const token = useSelector((state) => state.token);

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const light = palette.default.primary.light;

    const {
        headingText,
        textHover,
        recipeStepsPanel,
        whiteText,
        recipeStepsPanelHover,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        recipeText,
        mainBackPanel,
        buttonLight,
    } = themeColors || {};

    // Trophy Colors
    const gold = palette.trophy.gold;
    const silver = palette.trophy.silver;
    const bronze = palette.trophy.bronze;
    const main = palette.default.neutral.main;

    // API Calls
    // Get User Data
    const getUser = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUser(data);
        // console.log("UserWidget.js - DATA - ", data);
    };

    // getUserRecipes API Call
    const getUserRecipes = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUserRecipes(data);
    };

    useEffect(() => {
        getUser();
        getUserRecipes();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!user) {
        return null;
    }

    const { totalRecipeLikes, recipesPosted } = user;
    return (
        <WidgetWrapper>
            {/* Top Recipe Stat Title */}
            <FlexBetween gap="0.5rem" pb="1.1rem">
                <FlexBetween gap="1rem">
                    <Box>
                        <Typography
                            variant="h4"
                            color={headingText}
                            fontWeight="bold"
                            fontFamily="Poppins"
                            sx={{
                                "&:hover": {
                                    color: headingText,
                                    cursor: "pointer",
                                },
                                mb: "0.5rem",
                            }}
                        >
                            Most Popular
                        </Typography>
                        <FlexBetween gap="0.5rem">
                            <Typography color={headingText}>
                                Total Recipe Likes
                            </Typography>
                            <Typography color={headingText}>
                                {totalRecipeLikes}
                            </Typography>
                        </FlexBetween>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Divider />

            {/* Top Recipe Stats */}
            <Box p="1rem 0">
                {/* First Place */}
                <FlexBetween pb="0.5rem">
                    <FlexBetween gap="0.5rem">
                        <Icon>
                            <EmojiEventsIcon sx={{ color: gold }} />
                        </Icon>
                        <Typography color={headingText}>
                            First Recipe
                        </Typography>
                    </FlexBetween>
                    <Typography>1ST</Typography>
                </FlexBetween>

                {/* Second Place */}
                <FlexBetween pb="0.5rem">
                    <FlexBetween gap="0.5rem">
                        <EmojiEventsIcon sx={{ color: silver }} />
                        <Typography color={headingText}>
                            Second Recipe
                        </Typography>
                    </FlexBetween>
                    <Typography>2ND</Typography>
                </FlexBetween>

                {/* Third Place */}
                <FlexBetween pb="0.5rem">
                    <FlexBetween gap="0.5rem">
                        <EmojiEventsIcon sx={{ color: bronze }} />
                        <Typography color={headingText}>
                            Third Recipe{" "}
                        </Typography>
                    </FlexBetween>
                    <Typography>3RD</Typography>
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    );
};

export default TopUserRecipesWidget;
