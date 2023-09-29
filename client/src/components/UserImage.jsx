import { Box } from "@mui/material";

// Environment Variable
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 6001;
const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
                width={size}
                height={size}
                alt="user"
                src={`http://localhost:${PORT}/assets/${image}`}
            />
        </Box>
    );
};

export default UserImage;
