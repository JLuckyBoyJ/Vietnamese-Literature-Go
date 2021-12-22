import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Grid} from "@material-ui/core";
import {Container} from "@mui/material";
import Link from '@mui/material/Link';
import SearchBar from "material-ui-search-bar";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
    return (
        <div className="Header">
            <div className='left-header'>
                <div className='logo unselectable'>
                    vl<span>GO!</span> 
                </div>
                <input type="text" placeholder='Hãy nhập địa điểm muốn tìm '/>
            </div>
            <div className='right-header'>
                <ProfileMenu className='profile'/>
            </div>
            {/* <Container>
                <div className="HeaderContainer">
                    <Link href="/">
                        <img
                            id ="logo"
                            src=""
                            alt="logo"
                        />
                    </Link>
                    <div className="HeaderList">
                        <ul>
                            <li>
                                <SearchBar
                                style={{
                                    margin: "0 auto",
                                    height: '40px',
                                    border: "none",
                                }}
                                placeholder = 'Bạn muốn đi đâu ?'
                                />
                            </li>
                            <li><ProfileMenu/></li>
                        </ul>
                    </div>
                </div>
            </Container> */}
        </div>
    );
}
export default Header;