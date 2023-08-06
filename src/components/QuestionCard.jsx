/* eslint-disable react/prop-types */
import './../styles/QuestionCard.css'

const QuestionCard = ({questionText, option1, option2, option3, option4, answer}) => {





    return (
        <div className="question-card">
            <div className="card">
                <div className="card-left">
                    <h1 id="question">
                        Question
                        <span id="question-number"> 1</span><span id="question-sum">/4</span>
                    </h1>
                    <p className="question-text">{questionText} ?</p>
                </div>
                <div className="card-right">
                    <div className="option">{option1}</div>
                    <div className="option">{option2}</div>
                    <div className="option">{option3}</div>
                    <div className="option">{option4}</div>
                </div>
                <div className="option">{answer}</div>

            </div>
        </div>
    )
}

export default QuestionCard