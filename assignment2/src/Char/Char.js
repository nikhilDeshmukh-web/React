import React from 'react';

const char = (prop) => {
    const mystyle = {
        display: 'inline-block',
        padding: '20 px',
        margin: '30 px',
        border: '5px solid red',
        textAlign: 'center'
    };
    return(
        <div style={mystyle} onClick={prop.clicked}>
            {prop.char}
            
        </div>
    )
}

export default char;