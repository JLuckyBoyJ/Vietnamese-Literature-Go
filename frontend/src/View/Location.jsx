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
    let handleGetFactSuccess = (posts) => {
        const temp = [];
        for (let i in posts) {
            temp.push(posts[i].content);
        }
        setFactList(temp);
    }
    let handleGetAuthorSuccess = (posts) => {
        const temp = [];
        for (let i in posts) {
            if(posts[i].category.id == 1) {
                temp.push(posts[i].target);
            }
        }
        setAuthorList(temp);
    }
    let handleGetArtworkSuccess = (posts) => {
        const temp = [];
        for (let i in posts) {
            if(posts[i].category.id == 2) {
                temp.push(posts[i].target);
            }
        }
        setArtworkList(temp);
        
    }
    let handleGetQuizSuccess = (posts) => {
       const temp = [];
       for (let i in posts) {
           for (let j in posts[i].quiz) {
               temp.push(posts[i].quiz[j]);
           }
       }
       setQuizList(temp);
    }

    let handleFailure = (error) => {
        alert(error);
    }
    if (props.type == 0) {
        return(
            <Intro/>
        );
    }
    else if (props.type == 1) {
        factDataManager.getListFact(id, handleGetFactSuccess, handleFailure);
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
        factDataManager.getListFact(id, handleGetAuthorSuccess, handleFailure);
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
        factDataManager.getListFact(id, handleGetArtworkSuccess, handleFailure);
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
        // factDataManager.getListFact(id, handleGetAuthorSuccess, handleFailure);
        // return(
        //     <div>
        //         {authorList.map(
        //             author => 
        //             <Author
        //                 name = {author.name}
        //                 penName = {author.penName}
        //                 yearOfBirth = {author.yearOfBirth}
        //                 placeOfBirth = {author.placeOfBirth}
        //                 yearPassed = {author.yearPassed}
        //                 description = {author.description}
        //                 imageLink = {author.imageLink}
        //             />
        //         )}
        //     </div>
        // );
        factDataManager.getListFact(id, handleGetQuizSuccess, handleFailure);
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
    let handleGetLocationNameSuccess = (posts) => {
        setLocationName(posts[0].location.place);
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
                    {/* <ListItem button onClick={() => {
                        setValue(0);
                    }}>
                        <Typography variant="h5">
                            Giới thiệu
                        </Typography>
                    </ListItem> */}
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
