import { useEffect, useState } from 'react';
import Quiz from '../Quiz/Quiz';
import { fetchAllQuestions } from '../Api/apiHandling';

const Home = () => {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchquestions();
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const fetchquestions = () => {
        fetchAllQuestions()
            .then(questions => {
                setQuestions(questions);
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });
    }

    return (
        <>
            {loading ?
                <h4>Loading...</h4>
                :
                <Quiz questions={questions} />
            }
        </>
    )
}

export default Home
