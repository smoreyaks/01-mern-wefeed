import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipe } from "../../state";

const RecipePostWidget = ({
    _id,
    userId,
    title,
    recipeImage,
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
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

    const { palette } = useTheme();
    const main = palette.default.neutral.main;
    const primary = palette.default.primary.main;

    const patchLike = async () => {
        const response = await fetch(
            `http://localhost:3005/recipes/${recipeId}/like`,
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
                subtitle={location}
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
                }}
            >
                {name}
            </Typography>
            <Typography color={main} sx={{ mt: "1rem" }}>
                {description}
            </Typography>
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="recipe"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    src={`http://localhost:3005/assets/${picturePath}`}
                />
            )}
            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
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

                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={() => setIsComments(!isComments)}>
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        <Typography>{comments.length}</Typography>
                    </FlexBetween>
                </FlexBetween>

                <IconButton>
                    <ShareOutlined />
                </IconButton>
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
