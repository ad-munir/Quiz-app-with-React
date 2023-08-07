import { useState, useEffect } from 'react';
import { fetchAllQuestions } from './Api/apiHandling';

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(3);

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        fetchAllQuestions()
            .then(questions => {
                setQuestions(questions);
                console.log(questions)
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });

    }, []);

    if (questions.length === 0) {
        return <div>Loading questions...</div>;
    }

    const { questionText, option1, option2, option3, option4, correctOption } = questions[currentQuestion];

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionText}</p>
            <ul>
                <li>{option1}</li>
                <li>{option2}</li>
                <li>{option3}</li>
                <li>{option4}</li>
            </ul>
            <p>Correct Option: {correctOption}</p>
            {/* Add your answer selection and navigation buttons */}
        </div>
    );
};

export default Test;
