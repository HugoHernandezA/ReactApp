import React from "react";
import {Card} from "../organisms/Card";
import {fetchQuestions} from "../services/triviaService";

const counterStyle = {
    backgroundColor: "#D9EAF8",
    margin: "50px",
    borderRadius: "15px", 
    padding: "30px"
};

const buttonStyle = {
    margin: "10px", 
    fontSize: "20px"
};

const buttonNavigation = {
    display: "flex",
    justifyContent: "center"
};


export const Trivia = () => {
    const [questions, updateQuestions] = React.useState();
    const [isLoading, updateLoading] = React.useState(true);
    const [questionNo, updateQuestionNo] = React.useState(0);
    const [score, updateScore] = React.useState(0);

    React.useEffect(() => {
        const receiveQuestions = async () => {
            updateQuestions(await fetchQuestions());
            updateLoading(false);
        };
        receiveQuestions();
    }, []);

    const handleCallback = (isCorrect) => {
        if(isCorrect){
            updateScore(score + 1);
        }
    };

    const handleQuestionJump = (step) => {
        if (questionNo < 7 && step === "forth") {
            updateQuestionNo(questionNo +1);
        }
        if (questionNo >0 && step === "back") {
            updateQuestionNo(questionNo -1);
        }
    };

    if(isLoading){
        return <p>Loading...</p>
    };

    if (!isLoading){
        return (
            <React.Fragment>
                <p style={counterStyle}>SCORE: {score}/10</p>
                <Card 
                    question = {questions[questionNo].question}
                    answers = {questions[questionNo].incorrect_answers}
                    correctAnswer = {questions[questionNo].correct_answer}
                    isCorrect = {handleCallback}
                />
                <div style={buttonNavigation}>
                    <button style={buttonStyle}
                    onClick={() => handleQuestionJump("back")}>Previous</button>
                    <button style={buttonStyle}
                    onClick={() => handleQuestionJump("forth")}>Next</button>
                </div>
            </React.Fragment>
        );
    };
};