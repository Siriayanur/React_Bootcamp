import React, { Component } from 'react';

class Rando extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let rand = Math.floor(Math.random() * this.props.maxSize) + 1;
        this.setState({ num : rand });
    }


    render() {
        return (
            <div>
                <h1>The number is : {this.state.num}</h1>
                {this.state.num === 7 ? <p>You won</p> : <button onClick={this.handleClick}>Random Number</button> }
            </div>
        );
    }
}

export default Rando;