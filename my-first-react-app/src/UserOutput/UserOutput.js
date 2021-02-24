import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className='output'>
            <p>I am Para one with {props.username}</p>
            <p>I am Para two </p>
        </div>
    );
};

export default userOutput;