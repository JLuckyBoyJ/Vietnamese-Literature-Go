import * as React from 'react';
import Header from "./Header";
import "./Location.scss"
import {Avatar} from "@mui/material";
import {ListItem, Typography} from "@material-ui/core";
import {useState} from "react";
import * as PropTypes from "prop-types";
import Intro from "./Intro";
import Author from "./Author";
import Artwork from "./Artwork";
import Fact from "./Fact";

function Content(props) {
    if (props.type == 0) {
        return(
            <Intro/>
        );
    }

    if (props.type == 1) {
        return(
            <div>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
                <Fact/>
            </div>

        );
    }
    if (props.type == 2) {
        return(
            <Author/>
        );
    }
    return(
        <Artwork/>
    );
}

Content.propTypes = {type: PropTypes.number};
export default function Location() {
    const [value, setValue] = useState(0);
    return (
        <div className="Location">
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
                        Văn Miếu Xích Đằng
                    </h1>
                </div>
            </div>
            <div className="main">
                <div className="left">
                    <ListItem button onClick={() => {
                        setValue(0);
                    }}>
                        <Typography variant="h5">
                            Giới thiệu
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => {
                        setValue(1);
                    }}>
                        <Typography variant="h6">
                            Fact
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => {
                        setValue(2);
                    }}>
                        <Typography variant="h6">
                            Tác giả liên quan
                        </Typography>
                    </ListItem>
                    <ListItem button onClick={() => {
                        setValue(3);
                    }}>
                        <Typography variant="h6">
                            Tác phẩm liên quan
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
