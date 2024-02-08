import React from 'react'

function Focus() {
    const onFocus =()=>{
        alert("You Have Focus in Input");
    }
    const onBlur =()=>{
        alert("You Have Blur in Input")
    }
  return (
    <div> <br /><br />
        <h1>Focus Event</h1>
        <input type="text" onFocus={onFocus}/>
        <input type="text" onBlur={onBlur}/>
    </div>
  )
}

export default Focus