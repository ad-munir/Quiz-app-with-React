import { useState } from 'react'
import Navbar from './components/Navbar'
import {jsQuizz} from './constants'
import Quiz from './components/Quiz'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <Navbar />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Quiz questions={jsQuizz.questions} />
    </>
  )
}

export default App
