import './Artwork.scss'
import Link from "@mui/material/Link";
import {Divider} from "@mui/material";
export default function Artwork() {
    return (
        <div>
            <div>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                >
                    Tôi thấy hoa vàng trên cỏ xanh
                </Link>
            </div>
            <div>
                Đây là một tác phẩm nổi tiếng của Nguyễn Nhật Ánh
            </div>
            <Divider/>
        </div>
    );
}