import './style.scss'
import {Button, TextField} from "@material-ui/core";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
export default function Home(props) {
     const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

     const handleChange = (newValue) => {
         setValue(newValue);
     };
    return (
        <div className="Home">
            <div className = "left">
                <img src = "../../logo.svg" />
                adsfsadf
            </div>
            <div className = "right">
                <div className="login">
                    <div>
                        VietnameseLiteratureGO!
                        <br/>
                        Kiến thức văn học nhanh gọn dễ nhớ
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Tên đăng nhập" variant="standard" />
                    </div>
                    <div>
                        <TextField type="password" id="standard-basic" label="Mật khẩu" variant="standard" />
                    </div>
                    <div>
                        <Button variant="contained">Đăng nhập</Button>
                    </div>
                    <div>
                        <Button variant="contained">Đăng ký</Button>
                        <Button variant="contained">Quên mật khẩu</Button>
                    </div>
                </div>
                <div className="register">
                    <TextField id="standard-basic" label="Tên hiển thị" variant="standard" />
                    <TextField id="standard-basic" label="Tên đăng nhập" variant="standard" />
                            <DesktopDatePicker
                        date={value}
                        onChange={handleChange}
                        value={value}
                        openPicker={}
                        rawValue={value}
                        renderInput={sadfsd}/>
                    {/*<DesktopDatePicker*/}
                    {/*     label="Date desktop"*/}
                    {/*     inputFormat="dd/MM/yyyy"*/}
                    {/*     value={value}*/}
                    {/*     onChange={handleChange}*/}
                    {/*     renderInput={(params) => <TextField {...params} />}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
}