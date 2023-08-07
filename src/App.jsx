import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import { fetchAllQuestions } from './components/Api/apiHandling';
import Quiz from './components/Quiz/Quiz';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

      <Router>
        <Navbar />
        {loading ?
          <h4>Loading...</h4>
          :
          <Quiz questions={questions} />
        }

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


const Home = () => {
  return <div>Welcome to the Home Page</div>;
};


const About = () => {
  return <div>Welcome to the about Page</div>;
};


const NoMatch = () => {
  return <div>Welcome to the NoMatch Page</div>;
};

