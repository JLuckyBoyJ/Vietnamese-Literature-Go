import React, { useState } from "react";
import './LoginView.css'

const LoginView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-view">
            <div className="background-image-field"> </div>
            <div className="login-field">
                <div className="app-logo">Vietnam Literature <span className="logo-light">Go!</span> </div>
                <div className="app-slogan">Kiến thức mới nhanh, gọn, dễ nhớ</div>
                <div className="login-box">
                    <input type="text" placeholder="Tài khoản hoặc email"/> 
                    <input type="password" placeholder="Mật khẩu"/>
                    <div className="button"> Đăng nhập </div>
                    <div className="more-option">
                        <div>Quên mật khẩu</div>
                        <div>Đăng kí tài khoản mới</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginView