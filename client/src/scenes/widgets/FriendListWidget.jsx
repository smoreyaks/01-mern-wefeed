// React Hooks
import { useState, useEffect } from "react";

// MUI Components
import {
    Box,
    Typography,
    useTheme,
    Divider,
    ToggleButton,
} from "@mui/material";

// Custom Components
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";

// MUI Icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// Redux
import { useDispatch, useSelector } from "react-redux";

// State
import { setFriends } from "../../state";
import { setIsFriendsListOpen } from "../../state";

const FriendListWidget = ({ userId, themeColors }) => {
    // State
    // const [isFriendsListOpen, setIsFriendsListOpen] = useState(true);

    const { palette } = useTheme();

    // Redux State
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const isFriendsListOpen = useSelector((state) => state.isFriendsListOpen);

    // Theme Destructure
    const { headingText, widgetBorder, followerIconOutline } =
        themeColors || {};

    const getUserFriends = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}/friends`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    useEffect(() => {
        getUserFriends();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // THROUGHPUT TESTING
    console.log("FRIENDS TEST:", friends);

    return (
        <WidgetWrapper
            borderColor={widgetBorder}
            sx={{
                minWidth: isFriendsListOpen ? "100%" : "100px",
                maxWidth: "300px",
                width: "100px",
            }}
        >
            <Box
                sx={{
                    // justifyContent: "inherit",
                    display: "flex",
                    justifyContent: isFriendsListOpen
                        ? "space-between"
                        : "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    color={headingText}
                    variant="h4"
                    fontWeight="bold"
                    fontSize="1rem"
                    fontFamily="Montserrat"
                    sx={{ display: isFriendsListOpen ? "block" : "none" }}
                >
                    Following
                </Typography>

                <ToggleButton
                    onClick={() => dispatch(setIsFriendsListOpen())}
                    sx={{
                        p: "0rem",
                        borderRadius: "3rem",
                        border: "0px",
                    }}
                >
                    {isFriendsListOpen ? (
                        <KeyboardArrowDownRoundedIcon
                            fontSize="large"
                            sx={{ color: followerIconOutline }}
                        />
                    ) : (
                        <KeyboardArrowRightRoundedIcon
                            fontSize="large"
                            sx={{ color: followerIconOutline }}
                        />
                    )}
                </ToggleButton>
            </Box>

            <Divider sx={{ p: "0", m: "1rem 0" }} />

            {friends.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        height: "100%",
                    }}
                >
                    {isFriendsListOpen
                        ? friends.map((friend) => (
                              <Box sx={{ height: "72px" }}>
                                  <Friend
                                      key={friend._id}
                                      friendId={friend._id}
                                      name={`${friend.firstName} ${friend.lastName}`}
                                      occupation={friend.occupation}
                                      userPicturePath={friend.picturePath}
                                      themeColors={themeColors}
                                      isProfile
                                  />
                              </Box>
                          ))
                        : friends.map((friend) => (
                              <Box sx={{ height: "72px" }}>
                                  <UserImage
                                      key={friend.id}
                                      image={friend.picturePath}
                                      size="55px"
                                  />
                              </Box>
                          ))}
                </Box>
            ) : (
                <Box display="flex" flexDirection="column" gap="1.5rem">
                    <Typography>This account doesn't follow anyone</Typography>
                </Box>
            )}
        </WidgetWrapper>
    );
};

export default FriendListWidget;
