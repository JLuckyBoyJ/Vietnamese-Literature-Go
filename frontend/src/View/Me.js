import * as React from 'react';
import Header from "./Header";
import {Avatar} from "@mui/material";
import {ListItem, Typography} from "@material-ui/core";
import {useState} from "react";
import * as PropTypes from "prop-types";
import "./Me.scss"
import Visited from './VisitedView';
import Achievement from './AchievementView';
function Content(props) {
    if (props.type == 0) {
        return(
            <Visited/>
        );
    }
    return(
        <Achievement/>
    );
}

Content.propTypes = {type: PropTypes.number};
export default function Me() {
    const [value, setValue] = useState(0);
    return (
        <div className="Me">
            <Header/>
            <div className="Intro">
                <div className="left">
                    <Avatar
                        alt = "location name"
                        sx={{ width: 150, height: 150 }}
                    />
                </div>
                <div className="right">
                    <h1>
                        Tên người dùng
                    </h1>
                </div>
            </div>
            <div className="main">
                <div className="left">
                    <ListItem button onClick={() => {
                        setValue(0);
                    }}>
                        <Typography variant="h5">
                            Những địa điểm đã đi qua
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => {
                        setValue(1);
                    }}>
                        <Typography variant="h6">
                            Thành tích nhận được
                        </Typography>
                    </ListItem>
                </div>
                <div className="right">
                    <Content type={value}/>
                </div>
            </div>
        </div>
    );
}
