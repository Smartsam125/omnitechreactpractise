import { useState } from 'react'

//import './App.css'
import TaskOne from './Components/TaskOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TaskOne/>
      
      </div>
     
    </>
  )
}

export default App
