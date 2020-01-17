import React, { Component } from 'react';
import './App.css';
import Word from './Words/Word';

class App extends Component {

  state = {
    word: {
      name: 'myWord',
      description: 'some description',
      difficulty: 3
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Hello all!</h1>
        <Word word={this.state.word}/>
      </div>
    );
  }
}

export default App;
