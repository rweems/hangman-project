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
    imgs: [img1,img2,img3,img4,img5,img6,img7],
    img: img1,
    word: null,
    words: [],
    letters: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'
    ]
  }

  imgSwitch(){
    this.setState({img:this.state.imgs[this.i]});
    this.i = (this.i+1)%this.state.imgs.length;
  }

  componentDidMount(){
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
        this.chooseRandomWord();
      }));
  }

  guessLetter = () => {
    alert('you just guessed a letter!');
  }

  chooseRandomWord(){
    console.log("length is: " + this.state.words.length);
    const rng = Math.floor(Math.random() * this.state.words.length);
    console.log("rng: "+rng);
    this.setState((state)=>{ 
      return {word:state.words[rng]};
    });
    console.log("rng word: "+this.state.word);
  }

  render() {

    return (
      <div className="App">
        <h1>Hangman</h1>
        <img src={this.state.img} alt="img" />
        <button onClick={()=>{this.imgSwitch()}}>click me</button>
        {/* <Word key={this.state.word.wordId} word={this.state.word}/> */}
        {this.state.words.map(word => (
          <Word key={word.wordId} word={word} />
        ))}
        <div className='container'>
          {this.state.letters.map((char, index) => (
            <div onClick={(char)=>this.guessLetter()}>
              <Letter key={index} char={char}  />
            </div>
          ))}
        </div>
        {/* {this.state.words.map(word => (
          <Word key={word.wordId} word={word} />
        ))} */}
      </div>
    );
  }
}

export default App;
