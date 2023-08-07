import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import { fetchAllQuestions } from './components/Api/apiHandling';
import Quiz from './components/Quiz/Quiz';
function App() {

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
    <Navbar />
      {loading ?
          <h4>Loading...</h4>
        :
          <Quiz questions={questions} /> 
      }

    </>
  )
}

export default App
