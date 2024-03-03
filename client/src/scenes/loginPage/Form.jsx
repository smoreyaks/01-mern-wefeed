// React Packages
import { useState } from "react";

// MUI Components
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

// Form Packages
import { Formik } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

import Dropzone from "react-dropzone";

// Custom Components
import FlexBetween from "../../components/FlexBetween";

// Register Form Data Schema
const registerSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup.string().required("Required"),
    location: yup.string().required("Required"),
    occupation: yup.string().required("Required"),
    picture: yup.string().required("Required"),
});

// Login Form Data Schema
const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup.string().required("Required"),
});

// Blank Initial Values for Registration Form
const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
};

// Blank Initial Values for Login Form
const initialValuesLogin = {
    email: "",
    password: "",
};

const Form = (isDesktopScreen, isMediumScreen, isSmallScreen) => {
    // State
    const [pageType, setPageType] = useState("login");
    const [isGuest, setIsGuest] = useState(false);

    // Local State
    const dispatch = useDispatch();

    // Theme
    const { palette } = useTheme();
    const buttonLight2 = palette.default.primaryTwo.light2;
    const formBG = palette.default.primaryOne.form;

    // Navigate
    const navigate = useNavigate();

    // Media Queries
    const isNonMobile = useMediaQuery("(min-width:600px)");

    // Login
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    // User Register Function - New User Sign Up
    const register = async (values, onSubmitProps) => {
        // Sends Form Info with Image
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            `https://server-vukx.onrender.com/auth/register`,
            {
                method: "POST",
                body: formData,
            }
        );

        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();

        if (savedUser) {
            setPageType("login");
        }
    };

    // User Login Function
    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch(
            `https://server-vukx.onrender.com/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            }
        );
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/home");
        }
    };

    // Guest User Login Function
    const guestLogin = async () => {
        const loggedInResponse = await fetch(
            `https://server-vukx.onrender.com/auth/guestLogin`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }
        );
        const loggedIn = await loggedInResponse.json();
        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/home");
        }
    };

    // Form Data Submit Function
    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
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
                                gridColumn: isNonMobile ? undefined : "span 4",
                            },
                        }}
                    >
                        {isRegister && (
                            <>
                                {/* New User First Name Input */}
                                <TextField
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={
                                        Boolean(touched.firstName) &&
                                        Boolean(errors.firstName)
                                    }
                                    helperText={
                                        touched.firstName && errors.firstName
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: formBG,
                                            borderRadius: "0.25rem",
                                        },
                                    }}
                                />

                                {/* New User Last Name Input */}
                                <TextField
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={
                                        Boolean(touched.lastName) &&
                                        Boolean(errors.lastName)
                                    }
                                    helperText={
                                        touched.lastName && errors.lastName
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: formBG,
                                            borderRadius: "0.25rem",
                                        },
                                    }}
                                />

                                {/* New User Location Input */}
                                <TextField
                                    label="Location"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    name="location"
                                    error={
                                        Boolean(touched.location) &&
                                        Boolean(errors.location)
                                    }
                                    helperText={
                                        touched.location && errors.location
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: formBG,
                                            borderRadius: "0.25rem",
                                        },
                                    }}
                                />

                                {/* New User Occupation Input */}
                                <TextField
                                    label="Occupation"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.occupation}
                                    name="occupation"
                                    error={
                                        Boolean(touched.occupation) &&
                                        Boolean(errors.occupation)
                                    }
                                    helperText={
                                        touched.occupation && errors.occupation
                                    }
                                    sx={{ gridColumn: "span 4" }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: formBG,
                                            borderRadius: "0.25rem",
                                        },
                                    }}
                                />
                                <Box
                                    gridColumn="span 4"
                                    border={`1px solid ${palette.default.neutralGrey.medium}`}
                                    backgroundColor={
                                        palette.default.neutralGrey.fade10
                                    }
                                    borderRadius="5px"
                                    p="1rem"
                                >
                                    {/* Image Upload with React Dropzone */}
                                    <Dropzone
                                        acceptedFiles=".jpg,.jpeg,.png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                            setFieldValue(
                                                "picture",
                                                acceptedFiles[0]
                                            )
                                        }
                                        sx={{
                                            backgroundColor:
                                                palette.default.primaryOne
                                                    .light,
                                            borderRadius: "0.25rem",
                                        }}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`1px solid ${palette.default.neutralGrey.medium}`}
                                                p="1rem"
                                                sx={{
                                                    "&:hover": {
                                                        cursor: "pointer",
                                                    },

                                                    backgroundColor: formBG,
                                                    borderRadius: "0.25rem",
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                {!values.picture ? (
                                                    <Typography fontWeight="bold">
                                                        Drag & Drop Image Here
                                                    </Typography>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>
                                                            {
                                                                values.picture
                                                                    .name
                                                            }
                                                        </Typography>
                                                        <EditOutlinedIcon />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}
                                    </Dropzone>
                                </Box>
                            </>
                        )}

                        {/* Login Email Input  */}
                        <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={
                                Boolean(touched.email) && Boolean(errors.email)
                            }
                            helperText={touched.email && errors.email}
                            sx={{
                                gridColumn: "span 4",
                            }}
                            inputProps={{
                                style: {
                                    backgroundColor: formBG,
                                    borderRadius: "0.25rem",
                                },
                            }}
                        />
                        {/* Login Password Input */}
                        <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={
                                Boolean(touched.password) &&
                                Boolean(errors.password)
                            }
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                            inputProps={{
                                style: {
                                    backgroundColor: formBG,
                                    borderRadius: "0.25rem",
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        {/* Login Button */}
                        <Button
                            fullWidth
                            type="submit"
                            fontFamily="Poppins"
                            fontStyle="bold"
                            sx={{
                                m: isDesktopScreen
                                    ? "0.75rem 0"
                                    : isMediumScreen
                                    ? "2rem 0"
                                    : "1rem 0",
                                p: "1rem",
                                border: `1px solid ${palette.default.primaryTwo.dark}`,
                                backgroundColor:
                                    palette.default.primaryTwo.light2,
                                color: palette.default.neutralGrey.white,
                                "&:hover": {
                                    color: palette.default.neutralGrey.white,
                                    backgroundColor:
                                        palette.default.primaryTwo.dark,
                                },
                            }}
                        >
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>

                        {/* Guest Login Button */}
                        {isLogin ? (
                            <Button
                                fullWidth
                                // type="submit"
                                fontFamily="Poppins"
                                fontStyle="bold"
                                onClick={() => guestLogin()}
                                sx={{
                                    m: "1rem 0",
                                    p: "1rem",
                                    border: `1px solid ${palette.default.primaryTwo.dark}`,
                                    backgroundColor:
                                        palette.default.primaryTwo.light2,
                                    color: palette.default.neutralGrey.white,
                                    "&:hover": {
                                        color: palette.default.neutralGrey
                                            .white,
                                        backgroundColor:
                                            palette.default.primaryTwo.dark,
                                    },
                                }}
                            >
                                {isLogin && "GUEST LOGIN"}
                            </Button>
                        ) : null}

                        {/* New User Sign Up */}
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                textAlign: "center",
                                p: "0",
                                m: "0",
                                color: palette.default.neutralGrey.white,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: palette.default.neutralGrey.fade,
                                },
                            }}
                        >
                            {isLogin
                                ? "Need an account? Sign up here!"
                                : "Already have an account? Log in here!"}
                        </Typography>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;
