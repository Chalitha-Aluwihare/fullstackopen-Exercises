import { useState } from 'react'
import './App.css'

function App() {
  console.log("Hello from component")
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello World</p>
      </div>
    </>
  )
}



export default App