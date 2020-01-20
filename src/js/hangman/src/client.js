import fetch from 'unfetch';

export const getAllWords = () => 
    fetch('http://localhost:8080/words');

export const addNewWord = word => 
    fetch('http://localhost:8080/words', {
        headers: {
            'Content-Type': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(word)
    });

export const getRndWord = () =>
    fetch('http://localhost:8080/words/word');