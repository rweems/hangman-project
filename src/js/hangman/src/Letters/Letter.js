import React from 'react';
import './Letter.css';

const letter = (props) => {
    return (
        // <div className='Letter'>
            <button className='Letter'>
                <h1>
                    {props.char}
                </h1>
            </button>
        // </div>
    );
}

export default letter;