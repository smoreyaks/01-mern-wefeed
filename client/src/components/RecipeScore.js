import { Box, Typography, Icon, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const RecipeScore = ({
    recipeTitle,
    likes,
    recommendations,
    themeColors,
    recipes,
}) => {
    // Theme Colors
    const { palette } = useTheme();

    const { followerIconOutline } = themeColors || {};

    // Trophy Colors
    const gold = palette.trophy.gold;
    const silver = palette.trophy.silver;
    const bronze = palette.trophy.bronze;

    console.log("LIKES:", likes);
    const likeCount = Object.keys(likes).length;
    const recommendationCount = Object.keys(recommendations).length;

    var scoreArr = [];
    let score = 0;

    let scoreFunction = (likeCount, recommendationCount) => {
        score = likeCount + recommendationCount * 5;
        scoreArr.push(score);
        return score;
    };

    console.log("scoreFunction ", score);
    console.log("scoreArr ", scoreArr);

    // const firstRecipe = recipes;

    return (
        <Box>
            {/* First Place */}
            <FlexBetween gap="1rem" sx={{ mt: "0.5rem" }}>
                {/* <Box>
                    <Icon>
                        <EmojiEventsIcon sx={{ color: gold }} />
                    </Icon>
                </Box> */}
                <Typography color={followerIconOutline}>
                    {recipeTitle}
                </Typography>
                <Typography sx={{ color: followerIconOutline }}>
                    {scoreFunction(likeCount, recommendationCount)}
                </Typography>
            </FlexBetween>

            {/* Second Place */}
            {/* <FlexBetween gap="1rem">
                <Box>
                    <Icon>
                        <EmojiEventsIcon sx={{ color: silver }} />
                    </Icon>
                </Box>
                <Typography color={followerIconOutline}>
                    {recipeTitle}
                </Typography>
                <Typography sx={{ color: followerIconOutline }}>
                    {scoreFunction(likeCount, recommendationCount)}
                </Typography>
            </FlexBetween> */}

            {/* Third Place */}
            {/* <FlexBetween gap="1rem">
                <Box>
                    <Icon>
                        <EmojiEventsIcon sx={{ color: bronze }} />
                    </Icon>
                </Box>
                <Typography color={followerIconOutline}>
                    {recipeTitle}
                </Typography>
                <Typography sx={{ color: followerIconOutline }}>
                    {scoreFunction(likeCount, recommendationCount)}
                </Typography>
            </FlexBetween> */}
        </Box>
    );
};

export default RecipeScore;
