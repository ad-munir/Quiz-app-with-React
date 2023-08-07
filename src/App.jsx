import Navbar from './components/Navbar/Navbar'
import {jsQuizz} from './constants'
import Quiz from './components/Quiz/Quiz'
import Api from './components/Api/Api'

function App() {

  return (
    <>
      <Navbar />
      <Quiz questions={jsQuizz.questions} />
      <Api />
    </>
  )
}

export default App
