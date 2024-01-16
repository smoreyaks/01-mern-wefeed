import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    StarHalf,
    StarOutline,
} from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";

// MUI Comnponents
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const UserWidget = ({ userId, picturePath, themeColors }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);

    // Theme Colors
    const { palette } = useTheme();
    const dark = palette.default.neutral.dark;
    const medium = palette.default.neutral.medium;
    const main = palette.default.neutral.main;

    const {
        headingText,
        recipeText,
        recipeStepsPanel,
        textHover,
        whiteText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
    } = themeColors || {};

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

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Typically have loading component while user waits
    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,
    } = user;

    return (
        <WidgetWrapper>
            {/* First Row */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography
                            variant="h4"
                            color={whiteText}
                            fontWeight="bold"
                            fontSize="1rem"
                            sx={{
                                "&:hover": {
                                    color: whiteText,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={whiteText}>
                            Following {friends.length}
                        </Typography>
                        <Typography color={whiteText}>
                            Followers {Math.ceil(Math.random() * 100)}
                        </Typography>
                        <Box fontSize="large">
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                        </Box>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Divider />

            {/* Second Row */}
            <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined
                        fontSize="small"
                        sx={{ color: whiteText }}
                    />
                    <Typography color={whiteText}>{location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                    <WorkOutlineOutlined
                        fontSize="small"
                        sx={{ color: whiteText }}
                    />
                    <Typography color={whiteText}>{occupation}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Third Row */}
            <Box p="1rem 0">
                <FlexBetween mb="0.5rem">
                    <Typography color={whiteText}>Profile Views</Typography>
                    <Typography color={whiteText} fontWeight="500">
                        {viewedProfile}
                    </Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={whiteText}>
                        Total Recipe Views
                    </Typography>
                    <Typography color={whiteText} fontWeight="500">
                        {Math.ceil(Math.random() * 100)}
                    </Typography>
                </FlexBetween>
            </Box>

            <Divider />

            {/* Fourth Row */}
            <Box p="1rem 0">
                <Typography
                    fontSize="1rem"
                    color={whiteText}
                    fontWeight="bold"
                    mb="1rem"
                >
                    Social Profiles
                </Typography>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography color={whiteText} fontWeight="500">
                                Twitter
                            </Typography>
                            <Typography color={whiteText}>
                                Social Network
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/linkedin.png" alt="linkedin" />
                        <Box>
                            <Typography color={whiteText} fontWeight="500">
                                LinkedIn
                            </Typography>
                            <Typography color={whiteText}>
                                Network Platform
                            </Typography>
                        </Box>
                    </FlexBetween>
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    );
};

export default UserWidget;
