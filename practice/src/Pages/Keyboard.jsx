import React from 'react'

function Keyboard() {
    const onKeyDownText =()=>{
        console.log("Key Pressed");
    }
    const onKeyUpText =()=>{
        console.log("Key Up");
    }
    const onKeyPressText =()=>{
        console.log("Key Press");
    }
  return (
    <div> <br /><br />
        <h1>Key Board Event</h1>
        <input type="text" onKeyDown={onKeyDownText} />
        <input type="text" onKeyUp={onKeyUpText} />
        <input type="text" onKeyPress={onKeyPressText} />
    </div>
  )
}

export default Keyboard