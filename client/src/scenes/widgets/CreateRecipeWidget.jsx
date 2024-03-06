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
    Zoom,
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

// Custom Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Custom Components
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";

// Image Upload
import Dropzone from "react-dropzone";

// State
import { setAllRecipes } from "../../state";

const CreateRecipeWidget = ({
    picturePath,
    themeColors,
    isDesktopScreen,
    isMediumScreen,
    isSmallScreen,
}) => {
    // State
    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [recipe, setRecipe] = useState("");

    // Create New Recipe State
    const [createNewRecipeToggle, setCreateNewRecipeToggle] = useState(false);
    const [inputRecipeTitle, setInputRecipeTitle] = useState("");
    const [inputEquipmentList, setInputEquipmentList] = useState("");
    const [inputIngredientList, setInputIngredientList] = useState([]);
    // const [recipe, setRecipe] = useState("");
    // const [recipe, setRecipe] = useState("");

    // Theme
    // const { palette } = useTheme();

    // ---------- Theme ----------
    const { palette } = useTheme();

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
        <>
            {createNewRecipeToggle ? (
                <WidgetWrapper
                    sx={{ borderColor: widgetBorder, m: "0rem 0rem 2rem 0rem" }}
                >
                    <Button
                        onClick={() =>
                            setCreateNewRecipeToggle(!createNewRecipeToggle)
                        }
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: buttonLight2,
                            color: followerIconOutline,
                            p: "0.5rem",
                            m: "0.5rem 0rem",
                            minWidth: "3rem",

                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                            width: "100%",
                        }}
                    >
                        <Typography fontWeight="bold">
                            Create New Recipe
                        </Typography>
                        <RemoveIcon fontSize="medium" sx={{ pl: "0.25rem" }} />
                    </Button>
                    <FlexBetween gap="1.5rem">
                        {/* <UserImage image={picturePath} /> */}
                        <InputBase
                            placeholder="New Recipe Title"
                            onChange={(e) => setRecipe(e.target.value)}
                            value={recipe}
                            sx={{
                                width: "100%",
                                backgroundColor: buttonLight2,
                                borderRadius: "2rem",
                                padding: isDesktopScreen
                                    ? ".5rem 2rem"
                                    : isMediumScreen
                                    ? "1rem 2rem"
                                    : "0.25rem 2rem",
                            }}
                        />
                    </FlexBetween>
                    {isImage && (
                        <Box
                            border={`1px solid ${palette.default.neutralGrey.medium}`}
                            backgroundColor={palette.default.neutralGrey.fade10}
                            borderRadius="5px"
                            mt="1rem"
                            p="1rem"
                        >
                            <Dropzone
                                acceptedFiles=".jpg,.jpeg,.png"
                                multiple={false}
                                onDrop={(acceptedFiles) =>
                                    setImage(acceptedFiles[0])
                                }
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <FlexBetween>
                                        <Box
                                            {...getRootProps()}
                                            border={`1px solid ${palette.default.neutralGrey.medium}`}
                                            p="1rem"
                                            sx={{
                                                "&:hover": {
                                                    cursor: "pointer",
                                                },

                                                backgroundColor:
                                                    palette.default.primaryOne
                                                        .light,
                                                borderRadius: "0.25rem",
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
                            <Tooltip
                                TransitionComponent={Zoom}
                                placement="top"
                                title="Upload Image"
                                enterDelay="500"
                                sx={{ fontSize: "1rem" }}
                            >
                                <Button
                                    onClick={() => setIsImage(!isImage)}
                                    sx={{
                                        color: headingText,
                                        backgroundColor: buttonLight2,
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
                                        sx={{
                                            color: headingText,
                                            pr: "0.25rem",
                                        }}
                                    />
                                    Image
                                </Button>
                            </Tooltip>
                        </FlexBetween>

                        {/* Post Recipe */}
                        <Tooltip
                            TransitionComponent={Zoom}
                            placement="top"
                            title="Post Recipe"
                            enterDelay="500"
                            sx={{ fontSize: "1rem" }}
                        >
                            <Button
                                disabled={!recipe}
                                onClick={handleRecipe}
                                sx={{
                                    color: headingText,
                                    backgroundColor: buttonLight2,
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
                    />
                </WidgetWrapper>
            ) : (
                <WidgetWrapper
                    sx={{ borderColor: widgetBorder, m: "0rem 0rem 2rem 0rem" }}
                >
                    <Button
                        onClick={() =>
                            setCreateNewRecipeToggle(!createNewRecipeToggle)
                        }
                        size="small"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: buttonLight2,
                            color: followerIconOutline,
                            p: "0.5rem",
                            m: "0.5rem 0rem",
                            minWidth: "3rem",
                            width: "100%",
                            borderRadius: "3rem",
                            "&:hover": {
                                backgroundColor: buttonHover,
                            },
                        }}
                    >
                        <Typography fontWeight="bold">
                            Create New Recipe
                        </Typography>
                        <AddIcon fontSize="medium" sx={{ pl: "0.25rem" }} />
                    </Button>
                </WidgetWrapper>
            )}
        </>
    );
};

export default CreateRecipeWidget;
