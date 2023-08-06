import Navbar from './components/Navbar'
import {jsQuizz} from './constants'
import Quiz from './components/Quiz'

function App() {

  
  return (
    <>
      <Navbar />
      <Quiz questions={jsQuizz.questions} />
    </>
  )
}

export default App
