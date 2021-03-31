import React, { Component } from 'react';
import { randomWord } from './words';

import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import './Hangman.css';

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };
    constructor(props) {
        super(props);
        this.state = {
            numberOfWrong: 0,
            guessed: new Set(),
            answer : randomWord()
        };
        this.handleClicked = this.handleClicked.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleClicked(event) {
        let clickedChar = event.target.value;
        this.setState((currentState) => {
            return {
                guessed: currentState.guessed.add(clickedChar),
                numberOfWrong : currentState.numberOfWrong + (currentState.answer.includes(clickedChar) ? 0 : 1)
            }
        })
        
    }

    guessedWord() {
        let letters = this.state.answer.split("");
        return letters.map((letter) => {
            return (this.state.guessed.has(letter) ? letter : "_");
        })
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
            return <button
                key={letter}
                value={letter}
                onClick={this.handleClicked}
                disabled={this.state.guessed.has(letter)}
            >
              {letter}
            </button>
        })
    }

    reset() {
        const newWord = randomWord();

        this.setState((currentState) => {
            return {
                answer : newWord,
                numberOfWrong: 0,
                maxWrong: newWord.length,
                guessed: new Set(),
            }
        })
    }

    render() {
        const gameOver = this.state.numberOfWrong >= this.props.maxWrong;
        const altText = `${this.state.numberOfWrong}/${this.props.maxWrong}`;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameState = this.generateButtons();

        if (isWinner)
            gameState = 'You Win!';
        if (gameOver)
            gameState = 'You Lose!'
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.numberOfWrong]} alt={altText} />
                <p >Guessed Wrong : {this.state.numberOfWrong}</p>
                
                <p className="Hangman-word">
                    {!gameOver
                        ? this.guessedWord()
                        : this.state.answer
                    }
                </p>
                <p className="Hangman-btns">
                    {gameState}
                </p>
                <button id="reset" onClick={this.reset}>Restart</button>
            </div>

        );
    }
}

export default Hangman;
