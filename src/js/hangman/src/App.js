import React, { Component } from 'react';
import './App.css';
import Word from './Words/Word';
import {getAllWords} from './client';
import Letter from './Letters/Letter';

class App extends Component {

  state = {
    words: [],
    letters: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'
    ]
  }

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords = () => {
    getAllWords()
      .then(res => res.json()
      .then(words => {
        console.log(words);
        this.setState({
          words
        });
      }));
  }

  render() {

    return (
      <div className="App">
        <h1>Hangman</h1>
        {this.state.words.map(word => (
          <Word key={word.wordId} word={word} />
        ))}
        <div className='container'>
          {this.state.letters.map((char, index) => (
            <Letter key={index} char={char} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
