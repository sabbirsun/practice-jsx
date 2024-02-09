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

        <input type="date" name='CreationDate' onChange={FormChange} className='form-control'/>

        <textarea name="About" onChange={FormChange} placeholder='Tell me your about yourself' className='form-control'> </textarea>

            {/* Radio Button */}

            <div>
                <input type="radio" name="gender" onChange={FormChange} id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" onChange={FormChange} id="female" />
                <label htmlFor="female">Female</label>
            </div>

       
    </div>
  )
}

export default Form