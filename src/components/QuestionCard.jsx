import './../styles/QuestionCard.css'

function QuestionCard() {
    return (
        <div className="question-card">
            <div className="card">
                <div className="card-left">
                    <h1 id="question">
                        Question
                        <span id="question-number"> 1</span><span id="question-sum">/4</span>
                    </h1>
                    <p className="question-text">what is the capital city of Tunisia ?</p>
                </div>
                <div className="card-right">
                    <div className="option">Option</div>
                    <div className="option">Option</div>
                    <div className="option">Option</div>
                    <div className="option">Option</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard