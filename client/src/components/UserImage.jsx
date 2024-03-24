import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserImage = ({
    image,
    size = "55px",
    friendId,
    firstName,
    lastName,
    name,
    occupation,
    themeColors,
}) => {
    const navigate = useNavigate();
    return (
        <Box
            width={size}
            height={size}
            display="flex"
            justifyContent="center"
            onClick={() => {
                navigate(`/profile/${friendId}`);
                navigate(0);
            }}
        >
            <img
                style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
                width={size}
                height={size}
                alt="user"
                src={`https://server-vukx.onrender.com/assets/profileImg/${image}`}
            />
        </Box>
    );
};

export default UserImage;
