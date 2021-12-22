import './Artwork.scss'
import Link from "@mui/material/Link";
import {Divider} from "@mui/material";
export default function Artwork(props) {
    return (
        <div>
            <div>
                <Link
                    href={props.link}
                    color="inherit"
                    underline="hover"
                >
                    {props.name}
                </Link>
            </div>
            <div>
                {props.description}
            </div>
            <br/>
        </div>
    );
}