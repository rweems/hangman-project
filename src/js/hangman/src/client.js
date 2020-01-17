import fetch from 'unfetch';

export const getAllWords = () => 
    fetch('/words');

export const addNewWord = word => 
    fetch('/words', {
        headers: {
            'Content-Type': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(word)
    });