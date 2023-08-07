/* eslint-disable react/prop-types */
import './Quiz.css'
import { useState } from "react";
import { resultIntialState } from "../../constants";

const Quiz = ({ questions }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { questionText, option1, option2, option3, option4, correctOption } = questions[currentQuestion];
    
    const choices = [option1, option2, option3, option4];
    const correctAnswer = correctOption;

    const [choice, setChoice] = useState(null);
    const [choiceIndex, setChoiceIndex] = useState(null);
    const [result, setResult] = useState(resultIntialState);
    const [showResult, setShowResult] = useState(false);

    const onClickAnswer = (choice, index) => {
        setChoiceIndex(index);
        if (choice === correctAnswer) {
            setChoice(true)
        }
        else {
            setChoice(false)
        }

    }

    const onClickNext = () => {
        setChoiceIndex(null);
        setChoice(null);

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
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

    const onclickTryAgain = ()=> {
        setResult(resultIntialState);
        setShowResult(false);
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
                        <p className="question-text">{questionText}</p>
                    </div>

                    <ul className="card-right">

                        {choices.map((choice, index) => (
                            <li
                                key={choice}
                                onClick={() => onClickAnswer(choice, index)}
                                className={choiceIndex === index ? "selected-option option" : "option"}
                            >
                                {choice}
                            </li>
                        ))}

                    </ul>

                    <div className="card-footer">
                        <button
                            onClick={onClickNext}
                            disabled={choiceIndex === null}
                        >
                            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>

                :

                <div className='result-board'>
                    <h1>Result</h1>
                    <h3>Total Questions: <span>{questions.length}</span></h3>
                    <h3>Score: <span>{result.score}</span></h3>
                    <h3>Correct Answers: <span id='correct-answers'>{result.correctAnswers}</span></h3>
                    <h3>Wrong Answers: <span id='wrong-answers'>{result.wrongAnswers}</span></h3>

                    <button onClick={() =>onclickTryAgain()}>Try again</button>
                </div>}
        </div>
    )
}

export default Quiz