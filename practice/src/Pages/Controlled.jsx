import React from 'react'

function Controlled() {
    function Submit(){

    }
  return (
    <div className='container'><br />
        <input type="text" placeholder='Uncontrolled Form' value="" onChange={Submit}/>
    </div>
  )
}

export default Controlled