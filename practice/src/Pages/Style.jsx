import React from 'react'
import "./Style.css"

function Style() {
    const Element={
        color:"red", 
        backgroundColor:"green", 
        textAlign:"center"
    }
  return (
    <div>
        <h1 style={Element}>My First Style Component</h1>
        <h4 className='Sun'>My name is Md. Sabbirul Islam Sun</h4>
    </div>
  )
}

export default Style