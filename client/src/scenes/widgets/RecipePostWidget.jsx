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
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Custom Icons
import CookIcon from "../../components/svg/CookIcon";
import PrepIcon from "../../components/svg/PrepIcon";
import IngredientsQtyIcon from "../../components/svg/IngredientsQtyIcon";
import TimerIcon from "../../components/svg/TimerIcon";

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
// import ImageBadge from "../../components/ImageBadge";
import Notes from "../../components/Notes";
import SocialShareButton from "../../components/SocialShareButton";

const RecipePostWidget = ({
    _id,
    user,
    recipeId,
    recipeUserId,
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

    // // Theme Destructure

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

    //  -------- Prep Time Minimised  --------
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

    // console.log("USER Id:", _id);
    // console.log("Occupation:", occupation);
    // console.log("Servings:", servings);

    return (
        <WidgetWrapper
            m="2rem 0"
            sx={
                {
                    // boxShadow: 4,
                }
            }
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
                <Typography
                    color={headingText}
                    variant="h5"
                    fontWeight="bold"
                    fontFamily="Montserrat"
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
                            color: headingText,
                            border: "0",
                            borderRadius: notesOpen
                                ? "0 0.75rem 0rem 0rem"
                                : "0 0.75rem 0.75rem 0",
                            "&:hover": {
                                color: headingText,
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <TextSnippetOutlinedIcon />
                        {notesOpen ? <RemoveIcon /> : <AddIcon />}
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
                            // m: "0.5rem 0",
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
                                        fill: headingText,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        backgroundColor: "inherit",
                                        borderRadius: ".75rem",
                                        display: "flex",
                                        alignItems: "center",
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
                                        fill: headingText,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        backgroundColor: "inherit",
                                        borderRadius: ".75rem",
                                        // padding: "0.5rem",
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
                                <PersonRoundedIcon sx={{ fill: headingText }} />
                                <Typography sx={{ pl: "0.25rem" }}>
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
                            sx={{ fontSize: "1rem" }}
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
                                <LocalFireDepartmentIcon
                                    sx={{ fill: headingText }}
                                />
                                <Typography sx={{ pl: "0.25rem" }}>
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
                <FlexBetween gap="0.3rem">
                    <Tooltip
                        TransitionComponent={Zoom}
                        placement="top"
                        title="Like Recipe"
                        enterDelay="500"
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size="medium"
                            fullwidth
                            onClick={patchLike}
                            sx={{
                                borderRadius: "3rem",
                                width: "6rem",

                                color: headingText,
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isLiked ? (
                                <FavoriteOutlined sx={{ color: headingText }} />
                            ) : (
                                <FavoriteBorderOutlined />
                            )}
                            <Typography pl="0.5rem">{likeCount}</Typography>
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
                            size="medium"
                            fullwidth
                            onClick={patchRecommendation}
                            // onClick={() => setIsRecommended(!isRecommended)}
                            sx={{
                                borderRadius: "3rem",
                                width: "6rem",

                                color: headingText,
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isRecommended ? (
                                <HowToRegIcon />
                            ) : (
                                <RecordVoiceOverIcon />
                            )}
                            <Typography pl="0.5rem">
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
                            size="medium"
                            fullwidth
                            onClick={() => setIsComments(!isComments)}
                            sx={{
                                borderRadius: "3rem",
                                width: "6rem",

                                color: headingText,
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            <CommentIcon />
                            <Typography pl="0.5rem">{commentCount}</Typography>
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
                            size="medium"
                            fullwidth
                            onClick={() => setIsSaved(!isSaved)}
                            sx={{
                                borderRadius: "3rem",
                                width: "6rem",

                                color: headingText,
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {isSaved ? (
                                <PlaylistAddCheckIcon />
                            ) : (
                                <PlaylistAddOutlinedIcon />
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
                        sx={{ fontSize: "1rem" }}
                    >
                        <Button
                            size="medium"
                            fullwidth
                            sx={{
                                borderRadius: "3rem",
                                width: "6rem",

                                color: headingText,
                                "&:hover": {
                                    color: headingText,
                                    backgroundColor: buttonHover,
                                },
                            }}
                        >
                            {/* <ShareOutlined /> */}
                            <SocialShareButton />
                        </Button>
                    </Tooltip>
                </FlexBetween>
            </FlexBetween>
            {isComments && (
                <Box mt="0.5rem">
                    {/* ${_id.findById(comments.userId)} */}
                    {comments.map((comment, i) => (
                        <Box key={`${name}-${i}`}>
                            <Divider />
                            <Typography
                                sx={{
                                    color: headingText,
                                    m: "0.5rem 0",
                                    pl: "1rem",
                                }}
                            >
                                {/* {`${user.findById(comment.userId)}`} */}
                                {comment.commentText}
                            </Typography>
                        </Box>
                    ))}
                    <Divider />
                </Box>
            )}
        </WidgetWrapper>
    );
};

export default RecipePostWidget;
