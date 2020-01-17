import React from 'react';
import './Letter.css';

const letter = (props) => {
    return (
        <div className='Letter'>
            <h1>{props.char}</h1>
        </div>
    );
}

export default letter;