import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Grid} from "@material-ui/core";
import {Container} from "@mui/material";
import Link from '@mui/material/Link';
const Header = () => {
    return (
        <div className="Header">
            <div className="LeftHeader">
                <Grid container>
                    <Grid item xs={1}>
                        <MenuIcon
                            sx={{fontSize:40}}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        Logo
                    </Grid>
                    <Grid item xs={6}>
                        <div className="mid">
                            <input type="text" placeholder="Hãy nhập địa chỉ muốn tìm"/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="RightHeader">
                <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={1}>
                        <div className="mid">
                            <Avatar/>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <Link href="#" color="inherit" underline="none">
                            <div className="userName">
                                Nguyyễn Văn A
                            </div>
                        </Link>
                    </Grid>
                </Grid>

            </div>
            {/*<Container>*/}
            {/*    <div className="HeaderContainer">*/}
            {/*        <MenuIcon/>*/}
            {/*        <p>Logo</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <ul>*/}
            {/*            <li>Search</li>*/}
            {/*            <li>Avatar</li>*/}
            {/*            <li>Name</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</Container>*/}
        </div>
    );
}
export default Header;