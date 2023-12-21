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
import FeedSelect from "../../components/FeedSelect";

// Image Upload
import Dropzone from "react-dropzone";

// State
import { setRecipes } from "../../state";

const CreateRecipeWidget = ({ picturePath, theme }) => {
    // State
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [recipe, setRecipe] = useState("");

    // Theme
    const { palette } = useTheme();
    const mediumMain = palette.default.neutral.mediumMain;
    const medium = palette.default.neutral.medium;

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
        dispatch(setRecipes({ recipes }));
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
                    border={`1px solid ${medium}`}
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
                                    border={`2px dashed ${palette.default.primary.main}`}
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
                                        <p>Add Image Here</p>
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
                <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
                    <ImageOutlined sx={{ color: mediumMain }} />
                    <Typography
                        color={mediumMain}
                        sx={{
                            "&:hover": { cursor: "pointer", color: medium },
                        }}
                    >
                        Image
                    </Typography>
                </FlexBetween>

                <Button
                    disabled={!recipe}
                    onClick={handleRecipe}
                    sx={{
                        color: palette.default.background.alt,
                        backgroundColor: palette.default.primary.main,
                        borderRadius: "3rem",
                    }}
                >
                    POST
                </Button>
            </FlexBetween>
            <FeedSelect />
        </WidgetWrapper>
    );
};

export default CreateRecipeWidget;
