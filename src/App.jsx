import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Vite + React</h1>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
    </>
  )
}

export default App
