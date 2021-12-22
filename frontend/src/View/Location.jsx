import React, {useEffect} from 'react';
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
import Quiz from './QuizView'
import FactDataManager from "./FactDataManager"
import { useParams } from 'react-router-dom';



function Content(props) {
    const {id} = useParams();
    const factDataManager = new FactDataManager();
    const [factList, setFactList] = useState([]);
    const [authorList, setAuthorList] = useState([]);
    const [artworkList, setArtworkList] = useState([]);
    const [quizList, setQuizList] = useState([]);

    let handleGetDataSuccess = (datas) => {
        const facts = [];
        const author = [];
        const artWorks = [];
        const quizs = [];

        for (let i in datas) {
            facts.push(datas[i].content);

            if(datas[i].category.id == 1) {
                author.push(datas[i].target);
            } else {
                artWorks.push(datas[i].target)
            }

            for (let j in datas[i].quiz) {
                quizs.push(datas[i].quiz[j]);
            }
        }

        setFactList(facts);
        setAuthorList(author);
        setArtworkList(artWorks);
        setQuizList(quizs)
    }

    let handleFailure = (error) => {
        alert(error);
    }

    useEffect(() => {
        factDataManager.getListFact(id, handleGetDataSuccess, handleFailure);
    }, []);

    if (props.type == 0) {
        return(
            <Intro/>
        );
    }
    else if (props.type == 1) {
        return(
            <div>
                {factList.map(
                    fact => 
                    <Fact 
                        content = {fact}
                    />
                )}
            </div>
        );
    }
    else if (props.type == 2) {
        return(
            <div>
                {authorList.map(
                    author => 
                    <Author
                        name = {author.name}
                        penName = {author.penName}
                        yearOfBirth = {author.yearOfBirth}
                        placeOfBirth = {author.placeOfBirth}
                        yearPassed = {author.yearPassed}
                        description = {author.description}
                        imageLink = {author.imageLink}
                    />
                )}
            </div>
        );
    }
    else if (props.type == 3) {
        return(
            <div>
                {artworkList.map(
                    artwork => 
                    <Artwork
                        name = {artwork.name}
                        bornYear = {artwork.bornYear}
                        link = {artwork.link}
                        authorId = {artwork.authorId}
                        description = {artwork.description}
                    />
                )}
            </div>
        );
    } else {
        return(
            <div>
                {quizList.map(
                    quiz => {
                        <Quiz
                            question = {quiz.question}
                            answerA = {quiz.answerA}
                            answerB = {quiz.answerB}
                            answerC = {quiz.answerC}
                            answerD = {quiz.answerD}
                            correctAnswer = {quiz.correctAnswer}
                        />
                    }
                )}
                <input type="submit" value="Gửi câu trả lời"></input>
            </div>
        );
    }
}

Content.propTypes = {type: PropTypes.number};
export default function Location() {
    const {id} = useParams();
    const [value, setValue] = useState(1);
    const [locationName, setLocationName] = useState();
    const factDataManager = new FactDataManager();
    let handleGetLocationNameSuccess = (datas) => {
        setLocationName(datas[0].location.place);
    }
    let handleFailure = (error) => {
        alert(error);
    }
    factDataManager.getListFact(id, handleGetLocationNameSuccess, handleFailure);
    return (
        <div className="Location">
            <Header/>
            <div className="Intro">
                <div className="left">
                    <Avatar
                        alt = {locationName}
                        sx={{ width: 150, height: 150 }}
                    />
                </div>
                <div className="right">
                    <h1>
                        {locationName}
                    </h1>
                </div>
            </div>
            <div className="main">
                <div className="left">
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
                    <ListItem button onClick={() => {
                        setValue(4);
                    }}>
                        <Typography variant="h6">
                            Quiz
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
