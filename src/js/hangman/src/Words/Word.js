import React from 'react';
import './Word.css';

const word = (props) => {
    return (
        <div className='Word'>
            <h1>{props.word.name}</h1>
            <h4>{props.word.description}</h4>
            <p>Difficulty: {props.word.difficulty}</p>
        </div>
    );
}

export default word;