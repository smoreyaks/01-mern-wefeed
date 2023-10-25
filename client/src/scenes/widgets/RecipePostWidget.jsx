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
    user,
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
            `http://localhost:3006/recipes/${_id}/like`,
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
                    m: "1rem 0",
                }}
            >
                {title}
            </Typography>

            <Box
                display="flex"
                justifyContent="space-between"
                margin="0.5rem 0"
                padding="0.5rem 0"
            >
                {/* Prep Time */}
                <Typography
                    sx={{
                        backgroundColor: main,
                        borderRadius: ".75rem",
                        display: "flex",
                        alignItems: "center",
                        // p: "0.25rem 0.5rem 0.25rem 0.5rem",
                    }}
                >
                    Prep: {prepTime}
                </Typography>
                {/* Cook Time */}
                <Typography
                    sx={{
                        backgroundColor: main,
                        borderRadius: ".75rem",
                        // padding: "0.5rem",
                    }}
                >
                    Cook: {cookTime}
                </Typography>

                {/* Servings */}
                <Box
                    sx={{
                        backgroundColor: main,
                        borderRadius: ".75rem",
                        // padding: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PersonRoundedIcon />
                    <Typography sx={{ pl: "0.25rem" }}>{servings}</Typography>
                </Box>

                {/* Spice Level */}
                <Box
                    sx={{
                        backgroundColor: main,
                        borderRadius: ".75rem",
                        padding: "0 0.75rem",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <LocalFireDepartmentIcon />
                    <Typography sx={{ pl: "0.25rem" }}>{spiceLevel}</Typography>
                </Box>
            </Box>
            <EquipmentList equipment={equipment} />
            <IngredientList ingredients={ingredients} />
            <StepsList steps={steps} />
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="recipe"
                    style={{ borderRadius: "0.75rem" }}
                    src={`http://localhost:3006/assets/recipeImg/${picturePath}`}
                />
            )}

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
                                sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}
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
