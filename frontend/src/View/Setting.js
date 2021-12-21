import Header from "./Header";
import React, {useState} from "react";
import {List, ListItem} from "@mui/material";

export default function Setting() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState("********");
    const [enable, setEnable] = useState(true);
    const [buttonContent, setButtonContent] = useState("Thay đổi");
    function update () {
        if (enable) {
            setEnable(false);
            setUserName("");
            setPassword("");
            setButtonContent("Lưu thay đổi")
        } else {
            setEnable(true);
            setUserName("");
            setPassword("********");
            setButtonContent("Thay đổi");
        }
    }
    return(
        <div>
            <Header/>
            <div>
                <List>
                    <ListItem>
                        Tên hiển thị
                    </ListItem>
                    <ListItem>
                        <input
                            disabled={enable}
                            type="text"
                            placeholder={userName}/>
                    </ListItem>
                    <ListItem>
                        Mật khẩu
                    </ListItem>
                    <ListItem>
                        <input
                            disabled={enable}
                            type="password"
                            placeholder={password}/>
                    </ListItem>
                    <ListItem>
                        Nhập lại mật khẩu
                    </ListItem>
                    <ListItem>
                        <input
                            disabled={enable}
                            type="password"
                            placeholder={password}/>
                    </ListItem>
                    <ListItem>
                        <button
                            onClick = {update}
                        >
                            {buttonContent}
                        </button>
                    </ListItem>
                </List>


            </div>
        </div>
    );
}