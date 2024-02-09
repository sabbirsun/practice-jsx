import React from 'react';

function Input() {
    const FormChange = (e) => {
        console.log(e.target.value); // Use e.target.value to get the selected value
    };
   
    return (
        <div className='container'><br /><br />
            <input type="text" name ='ChannelName' placeholder='Channel Name' className='form-control' onChange={FormChange} />
            <input type="text" name ='Subscriber' placeholder='Subscriber' className='form-control' onChange={FormChange} />
           <select name="category" onChange={FormChange} className='form-control'> {/* Use FormChange directly */}
                <option value="Select">Select</option>
                <option value="C-Programming">C-Programming</option>
                <option value="C++">C++</option>
                <option value="JavaScript">JavaScript</option>
            </select>
        </div>
    );
}

export default Input;