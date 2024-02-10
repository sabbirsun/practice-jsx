import React from 'react';

function Expressions() {
    const obj = {
        name: "Sabbir",
        Roll: 109,
        Prof: "Programmer"
    };

    return (
        <div>
            <h4>I am a Programmer {obj.Prof + " " + obj.Roll}</h4>
            <h6>{`My name is ${obj.name}, & I am Professional ${obj.Prof}, & I read in ${obj.Roll}`}</h6>
        </div>
    );
}

export default Expressions;
