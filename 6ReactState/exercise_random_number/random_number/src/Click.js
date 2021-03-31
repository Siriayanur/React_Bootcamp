import React, { Component } from 'react';

class Click extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score: 1
        };
        this.handleClicked = this.handleClicked.bind(this);
        this.handleTripleClick = this.handleTripleClick.bind(this)
    }

    handleClicked() {
        this.setState((currentState) => {
            return { score: currentState.score + 1 };
        })
    }

    /**

    */
    increment(currentState) {
        return { score: currentState.score + 1 };
    }

    handleTripleClick() {
        this.setState((currentState) => {
            return { score: currentState.score + 3 };
        })
        
        this.setState(this.increment);
        this.setState(this.increment);
        this.setState(this.increment);

    }
    render() {
        return (
            <div>
                <h1>Working!  {this.state.score}</h1>
                <button onClick={this.handleClicked}>Click</button>
                <button onClick={this.handleTripleClick}>Triple Click</button>
            </div>
        );
    }
}

export default Click;