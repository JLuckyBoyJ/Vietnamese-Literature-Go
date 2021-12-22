import React, { useState } from "react";
import './LoginView.css'
import {Grid, TextField} from "@material-ui/core";
import Header from "../Header";
import LoginDataManager from "./LoginDataManager";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dataManager = new LoginDataManager();
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    let handleLoginSuccess = (posts) => {
        alert('Login success!!!')
        navigate("/home");
    }

    let handleLoginFailure = (error) => {
        alert(error)
    }

    let loginUser = () => {
        dataManager.loginUser(username, password, handleLoginSuccess, handleLoginFailure)
    }

    let handleRegisterSuccess = () => {

    }

    let handleRegisterFailure = () => {
        
    }

    let registerUser = () => {

    }

    if (isSignUp) {
        return (
            <div className="login-view">
                <div className="background-image-field"> </div>
                <div className="login-field">
                    <div className="app-logo">Vietnam Literature <span className="logo-light">Go!</span> </div>
                    <div className="app-slogan">Kiến thức mới nhanh, gọn, dễ nhớ</div>
                    <div className="login-box">
                        <input type="text" placeholder="Tên hiển thị"/>
                        <Grid container>
                            <Grid item xs={6}>
                                <input type="radio" id="male" name="gender" value="male"/>
                                <label htmlFor="male">Nam</label>
                            </Grid>
                            <Grid item xs={6}>
                                <input type="radio" id="female" name="gender" value="female"/>
                                <label htmlFor="female">Nữ</label>
                            </Grid>
                        </Grid>
                        <input type="text" placeholder="Ngày sinh (Ví dụ 20/05/1989)"/>
                        <input type="text" placeholder="Tên tài khoản (dùng để đăng nhập)"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Mật khẩu"/>
                        <input type="password" placeholder="Nhập lại mật khẩu"/>
                        <div className="button"> Tạo tài khoản </div>
                        <div className="more-option">
                            <div onClick={() => {setIsSignUp(false)}}>Đã có tài khoản ?</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="login-view">
                <div className="background-image-field"> </div>
                <div className="login-field">
                    <div className="app-logo">Vietnam Literature <span className="logo-light">Go!</span> </div>
                    <div className="app-slogan">Kiến thức mới nhanh, gọn, dễ nhớ</div>
                    <div className="login-box">
                        <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Tài khoản hoặc email"/>
                        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Mật khẩu"/>
                        <div className="button" onClick={loginUser}> Đăng nhập </div>
                        <div className="more-option">
                            <div>Quên mật khẩu</div>
                            <div onClick={() => {setIsSignUp(true)}}>Đăng kí tài khoản mới</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginView