import React, { Component } from 'react';
import './App.css';
import Word from './Words/Word';
import {getAllWords, getRndWord} from './client';
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
    word: "",
    letter: [],
    answer:[],
    guesses: [],
    letters: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'
    ],
      word: '',
      desc: '',
      wordLength: [],
      isHidden: true,
      lives: 7
  }



  imgSwitch(){
    this.setState({img:this.state.imgs[this.i]});
    this.i = (this.i+1)%this.state.imgs.length;

    this.state.lives--;
    console.log("lives: " + this.state.lives)
    if(this.state.lives === 0){
        this.gameOver();
        setTimeout( () =>{
            window.location.reload();
        },2000 );

    }
  }

  gameOver(){
      alert('Oh no, he\'s gone');
  }

  gameWin(){
    alert("You Won");
    setTimeout( () =>{
      window.location.reload();
  },2000 );
  }

  componentDidMount(){
    this.fetchWord();
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
  fetchWord = () => {
    getRndWord()
    .then(res => res.json()
    .then(word => {
      console.log(word);
      const letter = word.name.split("");
      const answer = [];
      for(var i = 0; i<letter.length; i++){
        answer.push("_");
      }
      this.setState({word, letter, answer});
      
    }));
  }
  guessLetter(guess,index){
    console.log(guess);
    const answer = this.state.answer;
    var rightguess = false;
    for(var i = 0; i<answer.length; i++){
      if(this.state.letter[i].toUpperCase()===guess.toUpperCase()){
        answer[i]=this.state.letter[i];
        this.setState({answer});
        rightguess=true;
      }
    }
    if(rightguess===false){
      this.imgSwitch();
    }
    if(!answer.includes("_")){
      this.gameWin();
    }
    this.disableLetter(guess,index);
  }

  disableLetter(letter,index){
    const letterId = `id` + index;
    const getId = document.getElementById(letterId);
    console.log(getId);
    console.log(letter + " from disable " + index);
    document.getElementById(letterId).childNodes[0].disabled = true;
    document.getElementById(letterId).removeEventListener('click',this.guessLetter,false);
    
   
    // console.log(document.getElementById(idd).childNodes.length);
    
  }


  chooseRandomWord(){
    console.log("length is: " + this.state.letter.length);
    const rng = Math.floor(Math.random() * this.state.letter.length);
    console.log("rng: "+rng);
    this.setState({ 
      word:this.state.words[rng]
    });
    console.log("rng word: "+this.state.word.name);
  }

  // wordToArray(){
  //   for(var i = 0; i<this.state.word.length; i++){
  //     <Letter key={this.state.word.charAt(i)} char={this.state.word.charAt(i)}  />
  //   }
  // }

  render() {
      const divStyle = {


      };

    return (
      <div className="App">
        <h1>Hangman</h1>
        <img src={this.state.img} alt="img" />
        {/* <div>
          <button onClick={()=>{this.imgSwitch()}}>click me</button>
        </div> */}
        <div className='container'>
          {this.state.answer.map((char, index) =>(
            <Letter key={index} char={char}  />
            
          ))}
        </div>
        {/* <Word key={this.state.word.wordId} word={this.state.word}/> */}
        {/* {this.state.words.map(word => (
          <Word key={word.wordId} word={word} />
        ))} */}
        <div className='container'>
          {this.state.letters.map((letter, index) => (
            
            <div onClick={()=>this.guessLetter(letter,index)} id={`id${index}`}> 
            
                <Letter key={index} char={letter}  />
              
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
