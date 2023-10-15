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

// Mui Components
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

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
    recipeId,
    recipeUserId,
    name,
    userPicturePath,
    title,
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

    // Theme
    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    // Like Recipe
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    // Saved Recipe
    const [isSaved, setIsSaved] = useState(false);
    const [isRecommended, setIsRecommended] = useState(false);

    const patchLike = async () => {
        const response = await fetch(
            `http://localhost:3005/recipes/${_id}/like`,
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

    return (
        <WidgetWrapper m="2rem 0">
            <Friend
                friendId={recipeUserId}
                name={name}
                userPicturePath={userPicturePath}
            />
            <Typography
                color={main}
                variant="h5"
                fontWeight="500"
                sx={{
                    "&:hover": {
                        color: palette.default.primary.light,
                        cursor: "pointer",
                    },
                    mt: "1rem",
                }}
            >
                {title}
            </Typography>
            <Typography>Prep Time: {prepTime}</Typography>
            <Typography>Cook Time: {cookTime}</Typography>
            <EquipmentList equipment={equipment} />
            <IngredientList ingredients={ingredients} />
            <StepsList steps={steps} />
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="recipe"
                    style={{ borderRadius: "0.75rem" }}
                    src={`http://localhost:3005/assets/${picturePath}`}
                />
            )}
            <FlexBetween mt="0.25rem">
                {/* Likes */}
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={patchLike}>
                        {isLiked ? (
                            <FavoriteOutlined sx={{ color: primary }} />
                        ) : (
                            <FavoriteBorderOutlined />
                        )}
                    </IconButton>
                    <Typography>{likeCount}</Typography>
                </FlexBetween>

                {/* Comments */}
                <FlexBetween gap="0.3rem">
                    <IconButton onClick={() => setIsComments(!isComments)}>
                        <CommentIcon />
                    </IconButton>
                    <Typography>{comments.length}</Typography>
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
                    </IconButton>
                </FlexBetween>
                <FlexBetween gap="0.3rem">
                    <IconButton>
                        <ShareOutlined />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            {isComments && (
                <Box mt="0.5rem">
                    {comments.map((comment, i) => (
                        <Box key={`${name}-${i}`}>
                            <Divider />
                            <Typography
                                sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}
                            >
                                {comment}
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
