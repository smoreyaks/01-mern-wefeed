// React Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI Components
import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
    Tooltip,
} from "@mui/material";

// MUI Icons
import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material";

// Custom Components
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
// import FeedSelect from "../../components/FeedSelect";

// Image Upload
import Dropzone from "react-dropzone";

// State
import { setAllRecipes } from "../../state";

const CreateRecipeWidget = ({ picturePath, theme }) => {
    // State
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [recipe, setRecipe] = useState("");

    // Theme
    // const { palette } = useTheme();

    // ---------- Theme ----------
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

    const mediumMain = palette.default.neutral.mediumMain;
    const medium = palette.default.neutral.medium;

    const buttonLight = palette.default.primaryTwo.light;

    const buttonHover = palette.default.primaryTwo.main; // Button Hover Color
    // const widgetWrapBorderColor = palette.default.primaryTwo.lightest;

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
        buttonLight,
        buttonHover,
        // widgetWrapBorderColor,
    };

    // Redux State
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const handleRecipe = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", recipe);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }

        const response = await fetch(
            `https://server-vukx.onrender.com/recipes`,
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            }
        );
        const recipes = await response.json();
        dispatch(setAllRecipes({ recipes }));
        setImage(null);
        setRecipe("");
    };

    return (
        <WidgetWrapper>
            <FlexBetween gap="1.5rem">
                <UserImage image={picturePath} />
                <InputBase
                    placeholder="What's on your mind?"
                    onChange={(e) => setRecipe(e.target.value)}
                    value={recipe}
                    sx={{
                        width: "100%",
                        backgroundColor: palette.default.neutral.light,
                        borderRadius: "2rem",
                        padding: "1rem 2rem",
                    }}
                />
            </FlexBetween>
            {isImage && (
                <Box
                    borderRadius="5px"
                    border={`1px solid ${palette.default.neutralGrey.medium}`}
                    mt="1rem"
                    p="1rem"
                >
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <FlexBetween>
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${palette.default.neutralGrey.medium}`}
                                    p="1rem"
                                    sx={{
                                        "&:hover": {
                                            cursor: "pointer",
                                        },
                                    }}
                                    width="100%"
                                >
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <p>Drag & Drop Image Here</p>
                                    ) : (
                                        <FlexBetween>
                                            <Typography>
                                                {image.name}
                                            </Typography>
                                            <EditOutlined />
                                        </FlexBetween>
                                    )}
                                </Box>
                                {image && (
                                    <IconButton
                                        onClick={() => setImage(null)}
                                        sx={{
                                            width: "15%",
                                        }}
                                    >
                                        <DeleteOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        )}
                    </Dropzone>
                </Box>
            )}

            <Divider sx={{ margin: "0.5rem 0" }} />

            <FlexBetween>
                <FlexBetween gap="0.25rem">
                    {/* Upload Image Icon */}

                    {/* Upload Image Icon */}
                    <Tooltip title="Upload Image" enterDelay="500">
                        <Button
                            onClick={() => setIsImage(!isImage)}
                            sx={{
                                color: headingText,
                                backgroundColor: buttonLight,
                                borderRadius: "3rem",
                                "&:hover": {
                                    backgroundColor: buttonHover,
                                },
                            }}
                            // color={headingText}
                            // sx={{
                            //     "&:hover": { cursor: "pointer", color: medium },
                            // }}
                        >
                            <ImageOutlined
                                sx={{ color: headingText, pr: "0.25rem" }}
                            />
                            Image
                        </Button>
                    </Tooltip>
                </FlexBetween>

                {/* Post Recipe */}
                <Tooltip title="Post Recipe" enterDelay="500">
                    <Button
                        disabled={!recipe}
                        onClick={handleRecipe}
                        sx={{
                            color: headingText,
                            backgroundColor: buttonLight,
                            borderRadius: "3rem",
                            zIndex: 90,
                        }}
                    >
                        POST
                    </Button>
                </Tooltip>
            </FlexBetween>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            ></Box>
        </WidgetWrapper>
    );
};

export default CreateRecipeWidget;
