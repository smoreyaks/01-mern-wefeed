// React Packages
import { useState } from "react";

// Custom MUI Package
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";

// MUI Components
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";
import { Box, List, ToggleButton, Button, IconButton } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkIcon from "@mui/icons-material/Link";
import ShareOutlined from "@mui/icons-material/ShareOutlined";

// Event Listener
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

// Share to External Social Platforms Function Handler
const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
        case "facebook":
            link = `https://www.facebook.com/sharer/sharer.php?u=${encodedAhref}`;
            open(link);
            break;

        case "twitter":
            link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
            open(link);
            break;

        case "reddit":
            link = `https://www.reddit.com/submit?url=${encodedAhref}`;
            open(link);
            break;

        case "copy":
            navigator.clipboard.writeText(ahref);
            break;

        default:
            break;
    }
};

const open = (socialLink) => {
    window.open(socialLink, "_blank");
};

const SocialShareButton = ({ themeColors }) => {
    const [shareButtonOpen, setShareButtonOpen] = useState(false);
    //  CLick Away Function Handler
    const handleClickAway = () => {
        setShareButtonOpen(false);
    };

    // Theme Destructure
    const {
        primary,
        whiteText,
        headingText,
        textHover,
        textMain,
        recipeText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        buttonLight,
        buttonLight2,
        buttonLight3,
        buttonHover,
        backgroundPrimary,
        backgroundMain,
        recipeTextPanel,
        mainBackPanel,
        recipeStepsPanel,
        panelMain,
        recipeStepsPanelHover,
        panelMainHover,
        widgetBorder,
    } = themeColors || {};

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Button
                size="medium"
                fullwidth
                onClick={() => setShareButtonOpen(!shareButtonOpen)}
                sx={{
                    borderRadius: "3rem",
                    width: "5rem",
                    color: followerIconOutline,
                    "&:hover": {
                        backgroundColor: buttonHover,
                    },
                }}
            >
                <ShareOutlined sx={{ fill: followerIconOutline }} />
                {shareButtonOpen && (
                    <Box
                        transition
                        // // maxWidth="300px"
                        // // minWidth="200px"
                    >
                        {/* Social Share Pop Up */}
                        <Paper
                            sx={{
                                borderRadius: "0.75rem",
                                backgroundColor: backgroundMain,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                position: "absolute",
                                left: "-2rem",
                                bottom: "3.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    p: 1,
                                }}
                            >
                                <List
                                    dense={true}
                                    sx={{
                                        backgroundColor: backgroundPrimary,
                                        borderRadius: "0.75rem",
                                        p: "0rem",
                                    }}
                                >
                                    <ListItem
                                        id="facebook"
                                        onClick={handleShare}
                                        sx={{
                                            color: followerIconOutline,
                                            borderTopLeftRadius: "0.75rem",
                                            borderTopRightRadius: "0.75rem",
                                            "&:hover": {
                                                backgroundColor: buttonHover,
                                            },
                                        }}
                                    >
                                        <ListItemIcon>
                                            <FacebookIcon
                                                sx={{
                                                    fill: followerIconOutline,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Facebook" />
                                    </ListItem>
                                    <ListItem
                                        id="twitter"
                                        onClick={handleShare}
                                        sx={{
                                            color: followerIconOutline,
                                            "&:hover": {
                                                backgroundColor: buttonHover,
                                            },
                                        }}
                                    >
                                        <ListItemIcon>
                                            <TwitterIcon
                                                sx={{
                                                    fill: followerIconOutline,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Twitter" />
                                    </ListItem>
                                    <ListItem
                                        id="reddit"
                                        onClick={handleShare}
                                        sx={{
                                            color: followerIconOutline,
                                            "&:hover": {
                                                backgroundColor: buttonHover,
                                            },
                                        }}
                                    >
                                        <ListItemIcon>
                                            <RedditIcon
                                                sx={{
                                                    fill: followerIconOutline,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Reddit" />
                                    </ListItem>
                                    <ListItem
                                        id="copy"
                                        onClick={handleShare}
                                        sx={{
                                            color: followerIconOutline,
                                            borderBottomLeftRadius: "0.75rem",
                                            borderBottomRightRadius: "0.75rem",

                                            "&:hover": {
                                                backgroundColor: buttonHover,
                                            },
                                        }}
                                    >
                                        <ListItemIcon>
                                            <LinkIcon
                                                sx={{
                                                    fill: followerIconOutline,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Copy Link" />
                                    </ListItem>
                                </List>
                            </Typography>
                        </Paper>
                    </Box>
                )}
            </Button>
        </ClickAwayListener>
    );
};

export default SocialShareButton;
