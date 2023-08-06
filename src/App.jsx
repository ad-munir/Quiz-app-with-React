import Navbar from './components/Navbar/Navbar'
import {jsQuizz} from './constants'
import Quiz from './components/Quiz/Quiz'

function App() {

  
  return (
    <>
      <Navbar />
      <Quiz questions={jsQuizz.questions} />
    </>
  )
}

export default App
