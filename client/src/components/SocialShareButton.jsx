// Custom MUI Package
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";

// MUI Components
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import { List } from "@mui/material";
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

const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
        case "facebook":
            link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
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

export default function PopperPopupState({ themeColors }) {
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
    } = themeColors || {};

    return (
        <PopupState
            variant="popper"
            popupId="demo-popup-popper"
            sx={{ backgroundColor: buttonLight2, color: buttonLight2 }}
        >
            {(popupState) => (
                <div>
                    <Button variant="contained" {...bindToggle(popupState)}>
                        <ShareOutlined />
                    </Button>
                    <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper
                                    sx={{
                                        borderRadius: "0.75rem",
                                    }}
                                >
                                    <Typography sx={{ p: 1 }}>
                                        <List
                                            dense={true}

                                            // className={classes.paper}
                                        >
                                            <ListItem
                                                button
                                                id="facebook"
                                                onClick={handleShare}
                                            >
                                                <ListItemIcon>
                                                    <FacebookIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Facebook" />
                                            </ListItem>
                                            <ListItem
                                                button
                                                id="twitter"
                                                onClick={handleShare}
                                            >
                                                <ListItemIcon>
                                                    <TwitterIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Twitter" />
                                            </ListItem>
                                            <ListItem
                                                button
                                                id="reddit"
                                                onClick={handleShare}
                                            >
                                                <ListItemIcon>
                                                    <RedditIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Reddit" />
                                            </ListItem>
                                            <ListItem
                                                button
                                                id="copy"
                                                onClick={handleShare}
                                            >
                                                <ListItemIcon>
                                                    <LinkIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Copy Link" />
                                            </ListItem>
                                        </List>
                                    </Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}
