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

// Custom Icons
import CookIcon from "../../components/svg/CookIcon";
import PrepIcon from "../../components/svg/PrepIcon";

// Mui Components
import {
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme,
    SvgIcon,
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

const RecipePostWidget = ({
    _id,
    user,
    recipeId,
    recipeUserId,
    name,
    userPicturePath,
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
}) => {
    const [isComments, setIsComments] = useState(false);

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);

    // --- Theme ---
    const { palette } = useTheme();

    const whiteText = palette.default.neutral.main; // ---- ! Need to remove, superseded
    const primary = palette.default.primary.main; // ---- ! Need to remove, superseded

    // Text
    const headingText = palette.default.neutralGrey.white; // Text Color
    const textMain = palette.default.neutralGrey.white; // Text Color

    const textHover = palette.default.primaryTwo.main; // Text Hover Color

    // Background Main Color
    const backgroundPrimary = palette.default.primaryOne.main;
    const backgroundMain = palette.default.primaryOne.main;

    // Panel / Subsection Main
    const recipeStepsPanel = palette.default.primary.light;
    const panelMain = palette.default.primary.light;

    const recipeStepsPanelHover = palette.default.primaryTwo.light;
    const panelMainHover = palette.default.primaryTwo.light;

    // Icon Main
    const followerIconOutline = palette.default.primaryTwo.main;
    const followerIconBack = palette.default.primaryOne.main;

    const followerIconBackHover = palette.default.primaryOne.light;

    const recipeTextPanel = palette.default.neutral.main;
    const mainBackPanel = palette.default.neutral.main;

    const themeColors = {
        headingText,
        textHover,
        recipeStepsPanel,
        whiteText,
        recipeStepsPanelHover,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        recipeTextPanel,
        mainBackPanel,
    };

    // Like Recipe
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    // Saved Recipe
    const [isSaved, setIsSaved] = useState(false);
    const [isRecommended, setIsRecommended] = useState(false);

    const patchLike = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${_id}/like`,
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
    console.log("USER Post 1:", loggedInUserId);

    return (
        <WidgetWrapper m="2rem 0">
            <Friend
                friendId={recipeUserId}
                name={name}
                userPicturePath={userPicturePath}
                themeColors={themeColors}
            />
            <Typography
                color={headingText}
                variant="h5"
                fontWeight="500"
                sx={{
                    "&:hover": {
                        color: textHover,
                        cursor: "pointer",
                    },
                    m: "1rem 0",
                }}
            >
                {recipeTitle}
            </Typography>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
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

                {/* Recipe Quick Info */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    margin="0"
                    sx={{
                        position: "absolute",
                        top: "0",
                        padding: "0.5rem",
                        width: "100%",
                        zIndex: "80",
                        gap: "0.5rem",
                    }}
                >
                    {/* Prep Time */}
                    <Box
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            borderRadius: ".75rem",
                            padding: "0.25rem 0.75rem",
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
                    {/* Cook Time */}
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
                    {/* Servings */}
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
                        <PersonRoundedIcon />
                        <Typography sx={{ pl: "0.25rem" }}>
                            {servings}
                        </Typography>
                    </Box>

                    {/* Spice Level */}
                    <Box
                        sx={{
                            backgroundColor: recipeStepsPanel,
                            borderRadius: ".75rem",
                            padding: "0.25rem 0.75rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <LocalFireDepartmentIcon />
                        <Typography sx={{ pl: "0.25rem" }}>
                            {spiceLevel}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <EquipmentList equipment={equipment} themeColors={themeColors} />
            <IngredientList
                ingredients={ingredients}
                themeColors={themeColors}
            />
            <StepsList steps={steps} themeColors={themeColors} />

            {/* Recipe Interactions */}
            <FlexBetween mt="0.25rem">
                {/* Likes */}
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={patchLike}>
                        {isLiked ? (
                            <FavoriteOutlined sx={{ color: primary }} />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                        <Typography pl="0.5rem">{likeCount}</Typography>
                    </IconButton>
                </FlexBetween>

                {/* Comments */}
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={() => setIsComments(!isComments)}>
                        <CommentIcon />
                        <Typography pl="0.5rem">{comments.length}</Typography>
                    </IconButton>
                </FlexBetween>

                {/* Recommendations */}
                <FlexBetween gap="0.3rem">
                    <IconButton
                        onClick={() => setIsRecommended(!isRecommended)}
                    >
                        {isRecommended ? (
                            <HowToRegIcon />
                        ) : (
                            <RecordVoiceOverIcon />
                        )}
                        <Typography pl="0.5rem">
                            {recommendations.length}
                        </Typography>
                    </IconButton>
                </FlexBetween>

                {/* Save Recipe to List */}
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={() => setIsSaved(!isSaved)}>
                        {isSaved ? (
                            <PlaylistAddCheckIcon />
                        ) : (
                            <PlaylistAddOutlinedIcon />
                        )}
                    </IconButton>
                </FlexBetween>

                {/* Share Recipe */}
                <FlexBetween gap="0.3rem">
                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
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
                                    color: backgroundPrimary,
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
