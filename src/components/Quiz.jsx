/* eslint-disable react/prop-types */
import './../styles/QuestionCard.css'
import { useState } from "react";
import { resultIntialState } from "../constants";

const Quiz = ({ questions }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { question, choices, correctAnswer } = questions[currentQuestion];
    const [choice, setChoice] = useState(null);
    const [choiceIndex, setChoiceIndex] = useState(null);
    const [result, setResult] = useState(resultIntialState);
    const [showResult, setShowResult] = useState(false);


    //let correctAnswers =0;

    const onClickAnswer = (choice, index) => {
        setChoiceIndex(index);
        if (choice === correctAnswer) {
            setChoice(true)
            //correctAnswers = correctAnswers+1;
        }
        else {
            setChoice(false)
        }

    }

    const onClickNext = () => {
        if (currentQuestion !== questions.length - 1) {
            setChoiceIndex(null);
            setCurrentQuestion(prev => prev + 1);
            setChoice(null);
        } else {
            setCurrentQuestion(0);
            setShowResult(true)
        }

        setResult(prev => choice ?
            {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }
            :
            {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }
        )
    }

    return (
        <div className="question-card">

            {!showResult ?
                <div className="card">
                    <div className="card-left">
                        <h1 id="question">
                            Question
                            <span id="question-number"> {currentQuestion + 1}</span>
                            <span id="question-sum">/{questions.length}</span>
                        </h1>
                        <p className="question-text">{question} ?</p>
                    </div>

                    <ul className="card-right">

                        {choices.map((choice, index) => (
                            <li
                                className="option"
                                key={choice}
                                onClick={() => onClickAnswer(choice, index)}
                            >
                                {choice}
                            </li>
                        ))}

                    </ul>

                    <div className="footer">
                        <button
                            onClick={onClickNext}
                            disabled={choiceIndex === null}
                        >
                            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>

                    </div>
                </div>

                :

                <div>
                    <h3>score: {result.score}</h3>
                    <h3>correct: {result.correctAnswers}</h3>
                    <h3>wrong: {result.wrongAnswers}</h3>
                </div>}
        </div>
    )
}

export default Quiz