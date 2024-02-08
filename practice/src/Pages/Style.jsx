import React from 'react'

function Style() {
    const Element={
        color:"red", 
        backgroundColor:"green", 
        textAlign:"center"
    }
  return (
    <div>
        <h1 style={Element}>My First Style Component</h1>
    </div>
  )
}

export default Style