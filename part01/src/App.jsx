import { useState } from 'react'
import './App.css'

function App() {
  console.log("Hello from component")
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2= "Using poprs to pass data"
  const exercises2 = 7
  const part3 = "State of component"
  const exercises3 = 14
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Hello World</p>
        <h1>{course}</h1>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
        <p>Number of exercises {exercises1 + exercises2 +exercises3}</p>
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
