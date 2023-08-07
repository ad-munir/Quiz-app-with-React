import Navbar from './components/Navbar/Navbar'
import Quiz from './components/Quiz/Quiz'
import Api from './components/Api/Api'
import { useEffect, useState } from 'react';
import { fetchAllQuestions } from './components/Api/apiHandling';

function App() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {

    fetchAllQuestions()
        .then(questions => {
          setQuestions(questions);
        })
        .catch(error => {
            console.error('Error fetching questions:', error);
        });

}, []);
  return (
    <>
      <Navbar />
      <Quiz questions={questions} />
      <Api />
    </>
  )
}

export default App
