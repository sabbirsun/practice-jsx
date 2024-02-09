import React from 'react'

function Form() {
    const FormChange=(e)=>{
        console.log(e.target.name)
    }
  return (
    <div className='container'>
        <select name="category" onChange={FormChange} className='form-control'>
            <option value="Select">Select</option>
            <option value="Select">PHP</option>
            <option value="Select">JavaScript</option>
            <option value="Select">Java</option>
        </select>
    </div>
  )
}

export default Form