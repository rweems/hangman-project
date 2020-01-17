import React from 'react';
import './Word.css';

const word = (props) => {
    return (
        <div className='Word'>
            <h3>{props.word.name}</h3>
            <p>{props.word.definition}</p>
            <p>Difficulty: {props.word.difficulty}</p>
        </div>
    );
}

export default word;