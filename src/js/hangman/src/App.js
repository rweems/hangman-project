import React, { Component } from 'react';
import './App.css';
import Word from './Words/Word';
import {getAllWords} from './client';

class App extends Component {

  state = {
    words: [],
    word: {
      name: 'myWord',
      description: 'some description',
      difficulty: 3
    }
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
      </div>
    );
  }
}

export default App;
