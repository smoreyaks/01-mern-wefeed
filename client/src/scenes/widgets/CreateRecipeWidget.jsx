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
    TextField,
} from "@mui/material";

// Form Packages
import { Formik } from "formik";
import * as yup from "yup";

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

import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state";

// State
import { setAllRecipes } from "../../state";

// New Recipe Form Data Schema
const newRecipeSchema = yup.object().shape({
    userId: yup.string().required("Required"), // Dont need
    firstName: yup.string().required("Required"), // Dont need
    lastName: yup.string().email("Invalid Email").required("Required"), // Dont need
    userPicturePath: yup.string().email("Invalid Email").required("Required"), // Dont need
    picturePath: yup.string().required("Required"),
    occupation: yup.string().required("Required"), // Dont need
    recipeTitle: yup.string().required("Required"),

    ingredients: yup.string().required("Required"),
    equipment: yup.string().required("Required"),
    prepTime: yup.string().required("Required"),
    cookTime: yup.string().required("Required"),
    servings: yup.string().required("Required"),
    spiceLevel: yup.string().required("Required"),
    steps: yup.string().required("Required"),
    tags: yup.string().required("Required"),
    recipeType: yup.string().required("Required"),
    notes: yup.string().required("Required"),
    likes: yup.string().required("Required"),
    recommendations: yup.string().required("Required"),
    saves: yup.string().required("Required"),
    shares: yup.string().required("Required"),
    comments: yup.string().required("Required"),
});

// Blank Initial Values for Registration Form
const initialValuesNewRecipe = {
    userId: "",
    firstName: "",
    lastName: "",
    userPicturePath: "",
    picturePath: "",
    occupation: "",
    recipeTitle: "",
    ingredients: "",
    equipment: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    spiceLevel: "",
    steps: "",
    tags: "",
    likes: "",
    recommendations: "",
    saves: "",
    shares: "",
    comments: "",
};

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

    // Redux State
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);

    // Create New Recipe State
    const [createNewRecipeToggle, setCreateNewRecipeToggle] = useState(false);

    // const [inputRecipeTitle, setInputRecipeTitle] = useState(""); // Title
    // const [inputRecipeNotes, setInputRecipeNotes] = useState(""); // Notes
    // const [inputRecipePrepTime, setInputRecipePrepTime] = useState(""); // Prep Time
    // const [inputRecipeCookTime, setInputRecipeCookTime] = useState(""); // Cook Time
    // const [inputRecipeServings, setInputRecipeServings] = useState(""); // Servings
    // const [inputRecipeSpiceLevel, setInputRecipeSpiceLevel] = useState(""); // Spice
    // const [inputRecipeEquipment, setInputRecipeEquipment] = useState([]); // Equipment
    // const [inputRecipeIngredients, setInputRecipeIngredients] = useState([]); // Ingredients
    // const [inputRecipeStepMethod, setInputRecipeStepMethod] = useState([]); // Method

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

    const isNonMobileScreens = useMediaQuery("(min-width: 6000px)");

    const handleNewRecipe = async (values, onSubmitProps) => {
        // if (image) {
        // formData.append("picture", image);
        // formData.append("picturePath", image.name);
        // }

        const response = await fetch(
            `https://server-vukx.onrender.com/recipes`,
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: JSON.stringify(values),
            }
        );
        const recipes = await response.json();
        dispatch(setAllRecipes({ recipes }));
        setImage(null);
    };

    // Form Data Submit Function
    const handleFormSubmit = async (values, onSubmitProps) => {
        await handleNewRecipe(values, onSubmitProps);
    };

    return (
        <>
            <WidgetWrapper
                sx={{
                    borderColor: widgetBorder,
                    m: isDesktopScreen
                        ? "0rem 0rem 2rem 0rem"
                        : "0rem 0rem 1rem 0rem",
                    p: isDesktopScreen
                        ? "1rem 1rem"
                        : isMediumScreen
                        ? "1rem 1rem"
                        : "0.5rem 0.5rem",
                    // borderRadius: "3rem",
                }}
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
                        // m: "0.5rem 0rem",
                        minWidth: "3rem",
                        width: "100%",
                        borderRadius: "3rem",
                        "&:hover": {
                            backgroundColor: buttonHover,
                        },
                    }}
                >
                    <Typography fontWeight="bold">Create New Recipe</Typography>
                    {createNewRecipeToggle ? (
                        <RemoveIcon fontSize="medium" sx={{ pl: "0.25rem" }} />
                    ) : (
                        <AddIcon fontSize="medium" sx={{ pl: "0.25rem" }} />
                    )}
                </Button>
            </WidgetWrapper>
            <Formik
                // onSubmit={handleFormSubmit}
                initialValues={initialValuesNewRecipe}
                validationSchema={newRecipeSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="0.75rem"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": {
                                    gridColumn: isNonMobileScreens
                                        ? undefined
                                        : "span 4",
                                },
                            }}
                        >
                            {createNewRecipeToggle && (
                                <WidgetWrapper
                                    sx={{
                                        borderColor: widgetBorder,
                                        m: "0rem 0rem 2rem 0rem",
                                        p: isDesktopScreen
                                            ? "1rem 1rem"
                                            : isMediumScreen
                                            ? "1rem 1rem"
                                            : "0.5rem 0.5rem",
                                    }}
                                >
                                    {/* <Button
                                        onClick={() =>
                                            setCreateNewRecipeToggle(
                                                !createNewRecipeToggle
                                            )
                                        }
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: buttonLight2,
                                            color: followerIconOutline,
                                            p: "0.5rem",
                                            mb: "0.5rem",
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
                                        {createNewRecipeToggle ? (
                                            <RemoveIcon
                                                fontSize="medium"
                                                sx={{ pl: "0.25rem" }}
                                            />
                                        ) : (
                                            <AddIcon
                                                fontSize="medium"
                                                sx={{ pl: "0.25rem" }}
                                            />
                                        )}
                                    </Button> */}

                                    {/* Recipe Title */}
                                    <TextField
                                        label="Recipe Title"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.recipeTitle}
                                        name="recipeTitle"
                                        error={
                                            Boolean(touched.recipeTitle) &&
                                            Boolean(errors.recipeTitle)
                                        }
                                        helperText={
                                            touched.recipeTitle &&
                                            errors.recipeTitle
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Ingredients */}
                                    <TextField
                                        label="Ingredients"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.ingredients}
                                        name="ingredients"
                                        error={
                                            Boolean(touched.ingredients) &&
                                            Boolean(errors.ingredients)
                                        }
                                        helperText={
                                            touched.ingredients &&
                                            errors.ingredients
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Equipment */}
                                    <TextField
                                        label="Equipment"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.equipment}
                                        name="equipment"
                                        error={
                                            Boolean(touched.equipment) &&
                                            Boolean(errors.equipment)
                                        }
                                        helperText={
                                            touched.equipment &&
                                            errors.equipment
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Preparation Time */}
                                    <TextField
                                        label="Preparation Time"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.prepTime}
                                        name="prepTime"
                                        error={
                                            Boolean(touched.prepTime) &&
                                            Boolean(errors.prepTime)
                                        }
                                        helperText={
                                            touched.prepTime && errors.prepTime
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Cooking Time */}
                                    <TextField
                                        label="Cooking Time"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.cookTime}
                                        name="cookTime"
                                        error={
                                            Boolean(touched.cookTime) &&
                                            Boolean(errors.cookTime)
                                        }
                                        helperText={
                                            touched.cookTime && errors.cookTime
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Servings */}
                                    <TextField
                                        label="Servings"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.servings}
                                        name="servings"
                                        error={
                                            Boolean(touched.servings) &&
                                            Boolean(errors.servings)
                                        }
                                        helperText={
                                            touched.servings && errors.servings
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Spice Level */}
                                    <TextField
                                        label="Spice Level"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.spiceLevel}
                                        name="spiceLevel"
                                        error={
                                            Boolean(touched.spiceLevel) &&
                                            Boolean(errors.spiceLevel)
                                        }
                                        helperText={
                                            touched.spiceLevel &&
                                            errors.spiceLevel
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Steps */}
                                    <TextField
                                        label="Steps"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.steps}
                                        name="steps"
                                        error={
                                            Boolean(touched.steps) &&
                                            Boolean(errors.steps)
                                        }
                                        helperText={
                                            touched.steps && errors.steps
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Tags */}
                                    <TextField
                                        label="Tags"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.tags}
                                        name="tags"
                                        error={
                                            Boolean(touched.tags) &&
                                            Boolean(errors.tags)
                                        }
                                        helperText={touched.tags && errors.tags}
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Recipe Type */}
                                    <TextField
                                        label="Recipe Type"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.recipeType}
                                        name="recipeType"
                                        error={
                                            Boolean(touched.recipeType) &&
                                            Boolean(errors.recipeType)
                                        }
                                        helperText={
                                            touched.recipeType &&
                                            errors.recipeType
                                        }
                                        // sx={{ gridColumn: "span 2" }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {/* Notes */}
                                    <TextField
                                        label="Notes"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.notes}
                                        name="notes"
                                        error={
                                            Boolean(touched.notes) &&
                                            Boolean(errors.notes)
                                        }
                                        helperText={
                                            touched.notes && errors.notes
                                        }
                                        // sx={{  }}
                                        sx={{
                                            gridColumn: "span 2",
                                            width: "100%",
                                            backgroundColor: buttonLight2,
                                            borderRadius: "2rem",
                                            padding: isDesktopScreen
                                                ? ".5rem 1rem"
                                                : isMediumScreen
                                                ? "0.5rem 1rem"
                                                : "0.25rem 1rem",
                                        }}
                                    />

                                    {isImage && (
                                        <Box
                                            border={`1px solid ${palette.default.neutralGrey.medium}`}
                                            backgroundColor={
                                                palette.default.neutralGrey
                                                    .fade10
                                            }
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
                                                {({
                                                    getRootProps,
                                                    getInputProps,
                                                }) => (
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
                                                                    palette
                                                                        .default
                                                                        .primaryOne
                                                                        .light,
                                                                borderRadius:
                                                                    "0.25rem",
                                                            }}
                                                            width="100%"
                                                        >
                                                            <input
                                                                {...getInputProps()}
                                                            />
                                                            {!image ? (
                                                                <p>
                                                                    Drag & Drop
                                                                    Image Here
                                                                </p>
                                                            ) : (
                                                                <FlexBetween>
                                                                    <Typography>
                                                                        {
                                                                            image.name
                                                                        }
                                                                    </Typography>
                                                                    <EditOutlined />
                                                                </FlexBetween>
                                                            )}
                                                        </Box>
                                                        {image && (
                                                            <IconButton
                                                                onClick={() =>
                                                                    setImage(
                                                                        null
                                                                    )
                                                                }
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
                                            <Tooltip
                                                TransitionComponent={Zoom}
                                                placement="top"
                                                title="Upload Image"
                                                enterDelay="500"
                                                sx={{ fontSize: "1rem" }}
                                            >
                                                <Button
                                                    onClick={() =>
                                                        setIsImage(!isImage)
                                                    }
                                                    sx={{
                                                        color: headingText,
                                                        backgroundColor:
                                                            buttonLight2,
                                                        borderRadius: "3rem",
                                                        "&:hover": {
                                                            backgroundColor:
                                                                buttonHover,
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
                                                // disabled={
                                                //     !inputRecipeTitle &&
                                                //     !inputRecipeNotes &&
                                                //     !inputRecipeIngredients &&
                                                //     !inputRecipeEquipment &&
                                                //     !inputRecipePrepTime &&
                                                //     !inputRecipeCookTime &&
                                                //     !inputRecipeStepMethod &&
                                                //     !inputRecipeServings &&
                                                //     !inputRecipeSpiceLevel
                                                // }
                                                onClick={handleNewRecipe}
                                                sx={{
                                                    color: headingText,
                                                    backgroundColor:
                                                        buttonLight2,
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
                            )}
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default CreateRecipeWidget;
