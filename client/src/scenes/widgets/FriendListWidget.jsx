// React Hooks
import { useState, useEffect } from "react";

// MUI Components
import {
    Box,
    Typography,
    useTheme,
    Divider,
    ToggleButton,
    Tooltip,
    Zoom,
    List,
    useMediaQuery,
    IconButton,
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
import { useNavigate } from "react-router-dom";

const FriendListWidget = ({ userId, themeColors }) => {
    // Navigate
    const navigate = useNavigate();

    // Redux State
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    let isFriendsListOpen = useSelector((state) => state.isFriendsListOpen);

    // Theme Destructure
    const { palette } = useTheme();
    const { headingText, widgetBorder, followerIconOutline } =
        themeColors || {};

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

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

    // Resolves Friend List Toggle
    if (!isDesktopScreen) {
        isFriendsListOpen = true;
    }

    return (
        <WidgetWrapper
            borderColor={widgetBorder}
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minWidth: isFriendsListOpen ? "100%" : "103px",
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

                <IconButton
                    onClick={() => dispatch(setIsFriendsListOpen())}
                    sx={{
                        p: "0.25rem",
                        borderRadius: "3rem",
                        border: "0px",
                        display: isDesktopScreen ? "flex" : "none",
                        justifyContent: "center",
                    }}
                >
                    {isFriendsListOpen ? (
                        <KeyboardArrowDownRoundedIcon
                            fontSize="large"
                            sx={{
                                color: followerIconOutline,
                            }}
                        />
                    ) : (
                        <KeyboardArrowRightRoundedIcon
                            fontSize="large"
                            sx={{
                                color: followerIconOutline,
                            }}
                        />
                    )}
                </IconButton>
            </Box>

            <Divider sx={{ p: "0", m: "1rem 0" }} />
            <List
                sx={{
                    maxHeight: isDesktopScreen ? "439.29px" : "433.55px",
                    overflow: "auto",
                }}
            >
                {friends.length > 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            height: "100%",
                        }}
                    >
                        {isFriendsListOpen
                            ? friends.map((friend) => (
                                  <Tooltip
                                      TransitionComponent={Zoom}
                                      placement="left"
                                      title={`${friend.firstName}'s Profile`}
                                      enterDelay="500"
                                      sx={{ fontSize: "1rem" }}
                                  >
                                      <Box
                                          sx={{
                                              height: "72px",
                                          }}
                                      >
                                          <Friend
                                              key={friend._id}
                                              friendId={friend._id}
                                              firstName={friend.firstName}
                                              lastName={friend.lastName}
                                              name={`${friend.firstName} ${friend.lastName}`}
                                              occupation={friend.occupation}
                                              userPicturePath={
                                                  friend.picturePath
                                              }
                                              themeColors={themeColors}
                                              isProfile
                                          />
                                      </Box>
                                  </Tooltip>
                              ))
                            : friends.map((friend) => (
                                  <Tooltip
                                      TransitionComponent={Zoom}
                                      placement="left"
                                      title={`${friend.firstName}'s Profile`}
                                      enterDelay="500"
                                      sx={{ fontSize: "1rem" }}
                                  >
                                      <Box
                                          sx={{
                                              height: "72px",
                                              cursor: "pointer",
                                          }}
                                      >
                                          <UserImage
                                              key={friend.id}
                                              image={friend.picturePath}
                                              friendId={friend._id}
                                              firstName={friend.firstName}
                                              lastName={friend.lastName}
                                              name={`${friend.firstName} ${friend.lastName}`}
                                              occupation={friend.occupation}
                                              themeColors={themeColors}
                                              size="55px"
                                          />
                                      </Box>
                                  </Tooltip>
                              ))}
                    </Box>
                ) : (
                    <Box display="flex" flexDirection="column" gap="1.5rem">
                        <Typography>
                            This account doesn't follow anyone
                        </Typography>
                    </Box>
                )}
            </List>
        </WidgetWrapper>
    );
};

export default FriendListWidget;
