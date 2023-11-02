import { SvgIcon } from "@mui/material";

const PrepIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <svg
                height="100"
                width="100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 268.333 268.333"
            >
                <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22.373 19.44a1.5 1.5 0 0 1-2.121 2.12l-4.596-4.596L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179L22.373 19.44z" />
                </g>
            </svg>
        </SvgIcon>
    );
};

export default PrepIcon;
