import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helper';

class CoinFlip extends Component {
    static defaultProps = {
        facets: [
            { desc: 'head', imgSrc: `https://ih1.redbubble.net/image.233422447.1590/raf,750x1000,075,t,FFFFFF:97ab1c12de.u1.jpg` },
            {desc : 'tail', imgSrc : `https://images-na.ssl-images-amazon.com/images/I/41ArO9X6q-L.jpg` }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            flips: 0,
           currentCoin : null  
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        // Setting coin image
        const newCoin = choice(this.props.facets);
        this.setState((currentState) => {
            return {
                currentCoin: newCoin,
                flips: currentState.flips + 1,
                heads: currentState.heads + (newCoin.desc === 'head' ? 1 : 0),
                tails: currentState.tails + (newCoin.desc === 'tail' ? 1 : 0),
            };
        });
    }   

    

    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <h1>Working</h1>
                { this.state.currentCoin && <Coin info={this.state.currentCoin} />}
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>Total Flips is {this.state.flips}, heads : {this.state.heads}, tails : {this.state.tails}</p>
            </div>
        );
    }

}

export default CoinFlip;