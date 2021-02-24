import React from 'react';

const validation = (props) =>{
    let textLength = 'Text to Short';
    if(props.inputLenght >= 5){
        textLength = 'Text long enough';
    }
    return(
        <div>
            <p>{textLength}</p>
        </div>
    );
}

export default validation;