import { useState } from 'react'
import './App.css'

function App() {
  console.log("Hello from component")
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello World</p>
        <Name />
        <Name />
      </div>
    </>
  )
}

const Name =() =>{
  return(
    <h1>Greetings</h1>
  )
}



export default App
