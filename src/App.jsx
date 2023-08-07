import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

      <Router>
        <Navbar />

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




const About = () => {
  return <div>Welcome to the about Page</div>;
};


const NoMatch = () => {
  return <div>404 Page</div>;
};

