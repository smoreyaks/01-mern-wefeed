// React Packages
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// MUI Icons
import {
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import CommentIcon from "@mui/icons-material/Comment";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import HowToRegIcon from "@mui/icons-material/HowToReg";
// import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartment";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";

// Custom Icons
import CookIcon from "../../components/svg/CookIcon";
import PrepIcon from "../../components/svg/PrepIcon";
import NoteIcon from "../../components/svg/NoteIcon";

// Mui Components
import {
    Box,
    Divider,
    Button,
    Typography,
    useTheme,
    Tooltip,
    Zoom,
    SvgIcon,
    Badge,
    ToggleButton,
    useMediaQuery,
} from "@mui/material";

// State
import { setRecipe } from "../../state";

// Components
import IngredientList from "../../components/IngredientList";
import EquipmentList from "../../components/EquipmentList";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import StepsList from "../../components/StepsList";
import Notes from "../../components/Notes";
import SocialShareButton from "../../components/SocialShareButton";
import SpiceIcon from "../../components/svg/SpiceIcon";

const RecipePostWidget = ({
    _id,
    user,
    recipeId,
    recipeUserId,
    firstName,
    lastName,
    name,
    userPicturePath,
    occupation,
    recipeTitle,
    picturePath,
    ingredients,
    equipment,
    prepTime,
    cookTime,
    servings,
    spiceLevel,
    steps,
    notes,
    tags,
    likes,
    recommendations,
    saves,
    shares,
    comments,
    themeColors,
}) => {
    // State
    const [isComments, setIsComments] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);

    // Local State
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);

    // Media Queries
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px)");
    const isSmallScreen = useMediaQuery("(min-width: 300px)");

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

    //  --------------------------------------
    //  -------- Prep Time Minimised  --------
    //  --------------------------------------
    let prepTimeMin = prepTime.replace("ins", "");

    //--------------------------------------
    // -------- Recipe Interactions --------
    //--------------------------------------

    // Like Recipe
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    // Recommend Recipe
    const isRecommended = Boolean(recommendations[loggedInUserId]);
    const recommendationCount = Object.keys(recommendations).length;

    // Recipe Comments
    const commentCount = Object.keys(comments).length;

    // Saved Recipe
    const [isSaved, setIsSaved] = useState(false);

    // Patch Recipe Likes
    const patchLike = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${recipeId}/like`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: loggedInUserId }),
            }
        );
        const updatedRecipe = await response.json();
        dispatch(setRecipe({ recipe: updatedRecipe }));
    };

    // Patch Recipe Recommendations
    const patchRecommendation = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${recipeId}/recommend`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: loggedInUserId }),
            }
        );
        const updatedRecipe = await response.json();
        dispatch(setRecipe({ recipe: updatedRecipe }));
    };
    // console.log("USER Post 1:", loggedInUserId);

    // console.log("Occupation:", occupation);
    // console.log("Servings:", servings);

    return (
        <WidgetWrapper
            borderColor={widgetBorder}
            // m="2rem 0"
            sx={{
                p:
                    isComments && isDesktopScreen
                        ? "1rem 1.5rem 0 1.5rem"
                        : isComments && isSmallScreen
                        ? "1rem 0.75rem 0.5rem 0.75rem"
                        : !isComments && isSmallScreen
                        ? "0.5rem 0.5rem 0.5rem 0.5rem"
                        : "1rem 1.5rem 0.5rem 1.5rem",
                m: isComments ? "2rem 0" : "0rem 0rem 2rem 0rem",
            }}
        >
            {/* ------------------------------- */}
            {/* -------- Recipe Author -------- */}
            {/* ------------------------------- */}

            <Friend
                friendId={recipeUserId}
                name={name}
                userPicturePath={userPicturePath}
                themeColors={themeColors}
                occupation={occupation}
            />
            {/* ---------------------------------------- */}
            {/* -------- Recipe Heading Section -------- */}
            {/* ---------------------------------------- */}
            <FlexBetween
                sx={{
                    backgroundColor: recipeStepsPanel,
                    p: "0 0 0 0.75rem",
                    m: notesOpen ? "0.5rem 0rem 0rem 0rem" : "0.5rem 0rem",
                    borderRadius: notesOpen
                        ? "0.75rem 0.75rem 0rem 0rem "
                        : "0.75rem ",
                }}
            >
                {/* Recipe Title */}
                <Typography
                    color={followerIconOutline}
                    variant="h5"
                    fontWeight="bold"
                    fontFamily="Montserrat"
                    fontSize={
                        isDesktopScreen
                            ? undefined
                            : isMediumScreen
                            ? undefined
                            : ".75rem"
                    }
                    sx={{
                        "&:hover": {
                            color: textHover,
                            cursor: "pointer",
                        },
                        m: "0",
                    }}
                >
                    {recipeTitle}
                </Typography>

                {/* Recipe Notes & Annotations */}
                <Tooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title="Notes"
                    enterDelay="500"
                    sx={{ fontSize: "1rem" }}
                >
                    <ToggleButton
                        onClick={() => setNotesOpen(!notesOpen)}
                        sx={{
                            // borderRadius: "3rem",
                            width: "4rem",
                            // color: followerIconOutline ,
                            border: "0",
                            borderRadius: notesOpen
                                ? "0.5rem 0.5rem 0.5rem 0.5rem"
                                : "0.5rem 0.5rem 0.5rem 0.5rem",
                            p: "0.5rem",
                            m: isDesktopScreen
                                ? "0.5rem 0.5rem"
                                : isMediumScreen
                                ? "0.5rem 0.5rem"
                                : "0.25rem 0.25rem",
                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <NoteIcon sx={{ fill: followerIconOutline }} />
                        {notesOpen ? (
                            <RemoveIcon
                                sx={{
                                    fill: followerIconOutline,
                                    fontSize: "medium",
                                }}
                            />
                        ) : (
                            <AddIcon
                                sx={{
                                    fill: followerIconOutline,
                                    fontSize: "medium",
                                }}
                            />
                        )}
                    </ToggleButton>
                </Tooltip>
            </FlexBetween>
            <Notes
                themeColors={themeColors}
                notes={notes}
                recipeId={recipeId}
                notesOpen={notesOpen}
            />
            {/* Recipe Image */}
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    mb: "0.5rem",
                }}
            >
                {picturePath && (
                    <img
                        width="100%"
                        height="auto"
                        alt="recipe"
                        style={{ borderRadius: "0.75rem" }}
                        src={`https://server-vukx.onrender.com/assets/recipeImg/${picturePath}`}
                    />
                )}
            </Box>

            {/* ----------------------------------- */}
            {/* -------- Recipe Quick Info -------- */}
            {/* ----------------------------------- */}
            <Box
                sx={{
                    borderRadius: "0.75rem",
                }}
            >
                <Box
                    sx={{
                        p: "0 0.75rem",
                        backgroundColor: recipeStepsPanel,
                        borderRadius: "0.75rem 0.75rem 0 0",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: recipeStepsPanel,
                            width: "100%",
                            p: "0.5rem 0rem",
                            borderRadius: "0.75rem 0.75rem 0 0",
                            border: "0",
                        }}
                    >
                        {/* Prep Time */}
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Preparation Time"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: recipeStepsPanel,
                                    borderRadius: ".75rem",
                                    padding: "0.25rem 0rem",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <PrepIcon
                                    sx={{
                                        width: "1rem",
                                        height: "1rem",
                                        mr: "0.5rem",
                                        fill: followerIconOutline,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        backgroundColor: "inherit",
                                        borderRadius: ".75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? undefined
                                            : isMediumScreen
                                            ? undefined
                                            : "0.75rem",
                                    }}
                                >
                                    {prepTime}
                                </Typography>
                            </Box>
                        </Tooltip>

                        {/* Cook Time */}
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Cook Time"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: recipeStepsPanel,
                                    borderRadius: ".75rem",
                                    padding: "0.25rem 0.75rem",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <CookIcon
                                    sx={{
                                        width: "1rem",
                                        height: "1rem",
                                        mr: "0.5rem",
                                        fill: followerIconOutline,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        backgroundColor: "inherit",
                                        borderRadius: ".75rem",
                                        // padding: "0.5rem",
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? undefined
                                            : isMediumScreen
                                            ? undefined
                                            : "0.75rem",
                                    }}
                                >
                                    {cookTime}
                                </Typography>
                            </Box>
                        </Tooltip>

                        {/* Servings */}
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Number of Servings"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: recipeStepsPanel,
                                    borderRadius: ".75rem",
                                    padding: "0.25rem 0.75rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <PersonOutlineOutlinedIcon
                                    sx={{ fill: followerIconOutline }}
                                />
                                <Typography
                                    sx={{
                                        pl: "0.25rem",
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? undefined
                                            : isMediumScreen
                                            ? undefined
                                            : "0.75rem",
                                    }}
                                >
                                    {servings}
                                </Typography>
                            </Box>
                        </Tooltip>

                        {/* Spice Level */}
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Spice Level"
                            enterDelay="500"
                            sx={{
                                fontSize: "1rem",
                                color: followerIconOutline,
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: recipeStepsPanel,
                                    borderRadius: ".75rem",
                                    padding: "0.25rem 0rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <SpiceIcon sx={{ fill: followerIconOutline }} />
                                <Typography
                                    sx={{
                                        pl: "0.25rem",
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? undefined
                                            : isMediumScreen
                                            ? undefined
                                            : "0.75rem",
                                    }}
                                >
                                    {spiceLevel}
                                </Typography>
                            </Box>
                        </Tooltip>
                    </Box>

                    <Divider />
                </Box>

                {/* ----------------------------------------- */}
                {/* -------- Main Recipe Information -------- */}
                {/* ----------------------------------------- */}
                <Box
                    sx={{
                        backgroundColor: recipeStepsPanel,
                        borderRadius: ".75rem",
                    }}
                >
                    {/* Equipment List Toggle */}
                    <EquipmentList
                        equipment={equipment}
                        themeColors={themeColors}
                    />

                    {/* Ingredient List Toggle */}
                    <IngredientList
                        ingredients={ingredients}
                        themeColors={themeColors}
                    />

                    {/* Method Step List Toggle */}
                    <StepsList steps={steps} themeColors={themeColors} />
                </Box>
            </Box>

            {/* ------------------------------------- */}
            {/* -------- Recipe Interactions -------- */}
            {/* ------------------------------------- */}
            <FlexBetween mt="0.5rem">
                {/* Likes */}
                <FlexBetween
                // gap="0.3rem"
                >
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Like Recipe"
                        enterDelay="500"
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size={isDesktopScreen ? "medium" : "small"}
                            fullwidth
                            onClick={patchLike}
                            sx={{
                                borderRadius: "3rem",
                                height: "2.25rem",
                                minWidth: "0",
                                width: isDesktopScreen
                                    ? "4rem"
                                    : isMediumScreen
                                    ? "5rem"
                                    : isSmallScreen
                                    ? "3.25rem"
                                    : "2rem",

                                color: followerIconOutline,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                "&:hover": {
                                    color: followerIconOutline,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isLiked ? (
                                <FavoriteOutlined
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1rem"
                                            : "0.5rem",
                                    }}
                                />
                            ) : (
                                <FavoriteBorderOutlined
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1rem"
                                            : "0.5rem",
                                    }}
                                />
                            )}
                            <Typography
                                pl="0.5rem"
                                sx={{
                                    fontSize: isDesktopScreen
                                        ? undefined
                                        : isMediumScreen
                                        ? undefined
                                        : "0.75rem",
                                }}
                            >
                                {likeCount}
                            </Typography>
                        </Button>
                    </Tooltip>
                </FlexBetween>

                {/* Recommendations */}
                <FlexBetween gap="0.3rem">
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Recommend Recipe"
                        enterDelay="500"
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size={isDesktopScreen ? "medium" : "small"}
                            fullwidth
                            onClick={patchRecommendation}
                            // onClick={() => setIsRecommended(!isRecommended)}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "3rem",
                                height: "2.25rem",
                                minWidth: "0",
                                width: isDesktopScreen
                                    ? "4rem"
                                    : isMediumScreen
                                    ? "5rem"
                                    : isSmallScreen
                                    ? "3.5rem"
                                    : "2rem",
                                color: followerIconOutline,
                                "&:hover": {
                                    color: followerIconOutline,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isRecommended ? (
                                <HowToRegIcon
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1rem"
                                            : "0.5rem",
                                    }}
                                />
                            ) : (
                                <RecordVoiceOverIcon
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1rem"
                                            : "0.5rem",
                                    }}
                                />
                            )}
                            <Typography
                                pl="0.5rem"
                                sx={{
                                    fontSize: isDesktopScreen
                                        ? undefined
                                        : isMediumScreen
                                        ? undefined
                                        : "0.75rem",
                                }}
                            >
                                {recommendationCount}
                            </Typography>
                        </Button>
                    </Tooltip>
                </FlexBetween>

                {/* Comments */}
                <FlexBetween gap="0.3rem">
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Show Comments"
                        enterDelay="500"
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size={isDesktopScreen ? "medium" : "small"}
                            fullwidth
                            onClick={() => setIsComments(!isComments)}
                            sx={{
                                // display: "flex",
                                // justifyContent: "center",
                                // alignItems: "center",
                                borderRadius: "3rem",
                                height: "2.25rem",
                                minWidth: "0",
                                width: isDesktopScreen
                                    ? "4rem"
                                    : isMediumScreen
                                    ? "5rem"
                                    : isSmallScreen
                                    ? "3.5rem"
                                    : "2rem",
                                color: followerIconOutline,
                                "&:hover": {
                                    color: followerIconOutline,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <CommentIcon
                                sx={{
                                    color: followerIconOutline,
                                    fontSize: isDesktopScreen
                                        ? "1.25rem"
                                        : isMediumScreen
                                        ? "1.25rem"
                                        : isSmallScreen
                                        ? "1rem"
                                        : "0.5rem",
                                }}
                            />
                            <Typography
                                pl="0.5rem"
                                sx={{
                                    fontSize: isDesktopScreen
                                        ? undefined
                                        : isMediumScreen
                                        ? undefined
                                        : "0.75rem",
                                }}
                            >
                                {commentCount}
                            </Typography>
                        </Button>
                    </Tooltip>
                </FlexBetween>

                {/* Save Recipe to List */}
                <FlexBetween gap="0.3rem">
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Save Recipe"
                        enterDelay="500"
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size={isDesktopScreen ? "medium" : "small"}
                            fullwidth
                            onClick={() => setIsSaved(!isSaved)}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "3rem",
                                height: "2.25rem",
                                minWidth: "0",
                                width: isDesktopScreen
                                    ? "4rem"
                                    : isMediumScreen
                                    ? "5rem"
                                    : isSmallScreen
                                    ? "3.5rem"
                                    : "2rem",

                                color: followerIconOutline,
                                "&:hover": {
                                    color: followerIconOutline,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isSaved ? (
                                <PlaylistAddCheckIcon
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1.25rem"
                                            : "0.5rem",
                                    }}
                                />
                            ) : (
                                <PlaylistAddOutlinedIcon
                                    sx={{
                                        color: followerIconOutline,
                                        fontSize: isDesktopScreen
                                            ? "1.25rem"
                                            : isMediumScreen
                                            ? "1.25rem"
                                            : isSmallScreen
                                            ? "1.25rem"
                                            : "0.5rem",
                                    }}
                                />
                            )}
                        </Button>
                    </Tooltip>
                </FlexBetween>

                {/* Share Recipe */}
                <FlexBetween gap="0.3rem">
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Share Recipe"
                        enterDelay="500"
                        sx={{
                            fontSize: "1rem",
                        }}
                    >
                        <SocialShareButton
                            themeColors={themeColors}
                            sx={{
                                // height: "2.25rem",
                                color: followerIconOutline,
                                fontSize: isDesktopScreen
                                    ? "1.25rem"
                                    : isMediumScreen
                                    ? "1.25rem"
                                    : isSmallScreen
                                    ? "0.75rem"
                                    : "0.5rem",
                            }}
                            isDesktopScreen={isDesktopScreen}
                            isMediumScreen={isMediumScreen}
                            isSmallScreen={isSmallScreen}
                        />
                    </Tooltip>
                </FlexBetween>
            </FlexBetween>
            {isComments && (
                <Box mt="0.5rem">
                    {comments.map((comment, i) => (
                        <Box key={`${name}-${i}`}>
                            <Divider />
                            <Typography
                                sx={{
                                    color: followerIconOutline,
                                    // my: "0.5rem 0",
                                    pl: "1rem",
                                    py: "0.5rem",
                                }}
                            >
                                {comment.commentText}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </WidgetWrapper>
    );
};

export default RecipePostWidget;
