import React from 'react';

function Input() {
    const FormChange = (e) => {
        console.log(e.target.value);
    };
   
    return (
        <div className='container'><br /> <br />
            <input type="text" name ='ChannelName' placeholder='Channel Name' className='form-control' onChange={FormChange} />
        </div>
    );
}

export default Input;
