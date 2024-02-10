import React, { useState } from 'react';

function Form() {
    const [state, setState] = useState({
        ChannelName: "",
        Subscriber: "",
        category: "",
        CreationDate: "",
        About: "",
        gender: "",
        checkbox: false
    });

    const FormChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const CheckBoxHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.checked
        });
    };

    const handleSubmit = () => {
        console.log(state);
        // Add your form submission logic here
    };

    return (
        <div className='container'>
            <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control' onChange={FormChange} value={state.ChannelName} />
            <input type="text" name='Subscriber' placeholder='Subscriber' className='form-control' onChange={FormChange} value={state.Subscriber} />
            <select name="category" onChange={FormChange} className='form-control' value={state.category}>
                <option value="Select">Select</option>
                <option value="PHP">PHP</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
            </select>

            <input type="date" name='CreationDate' onChange={FormChange} className='form-control' value={state.CreationDate} />

            <textarea name="About" onChange={FormChange} placeholder='Tell me about yourself' className='form-control' value={state.About}> </textarea>

            {/* Radio Buttons */}

            <div>
                <input type="radio" name="gender" onChange={FormChange} id="male" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" onChange={FormChange} id="female" value="female" />
                <label htmlFor="female">Female</label>
            </div>

            {/* Checkbox */}

            <input type="checkbox" name='checkbox' onChange={CheckBoxHandler} checked={state.checkbox} />
            <label htmlFor="checkbox">I agree & Continue</label>
<br />
            <button className='btn btn-secondary' onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default Form;
