import React from 'react'

const Props = () => {
  return (
    <div>
            <Name name="Chalitha"/>
    </div>
  )
}
const Name = (props) =>{
            return(
                        <h1>my name is {props.name}</h1>
            )
}
export default Props
