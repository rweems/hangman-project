import React, { Component } from 'react';
import './App.css';
import Word from './Words/Word';
import {getAllWords} from './client';
import Letter from './Letters/Letter';
import img1 from './img/hangman1.png';
import img2 from './img/hangman2.png';
import img3 from './img/hangman3.png';
import img4 from './img/hangman4.png';
import img5 from './img/hangman5.png';
import img6 from './img/hangman6.png';
import img7 from './img/hangman7.png';

class App extends Component {
  i = 0;
  state = {
    // imgs: ['./img/hangman1.png',
    //        './img/hangman2.png',
    //        './img/hangman3.png',
    //         './img/hangman4.png',
    //         './img/hangman5.png',
    //         './img/hangman6.png',
    //         './img/hangman7.png'],
    imgs: [img1,img2,img3,img4,img5,img6,img7],
    img: img1,
    words: [],
    letters: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'
    ]
  }

  imgSwitch(){
    this.i = (this.i+1)%this.state.imgs.length;
    this.setState({img:this.state.imgs[this.i]});
  }

  componentDidMount() {
    this.fetchWords();
    this.imgSwitch();
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
        <img src={this.state.img} alt="img" />
        <button onClick={()=>{this.imgSwitch()}}>click me</button>
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
