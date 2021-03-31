import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css';
class RollDice extends Component {
    static defaultProps = {
        facets : ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = {
            die_one: "one",
            die_two: "two",
            isRolling : false
        };
        this.roll = this.roll.bind(this);
    }

    roll(e) {
        
        let rand1 = Math.floor(Math.random() * 6);
        let rand2 = Math.floor(Math.random() * 6) ;
        this.setState({
            die_one: this.props.facets[rand1],
            die_two: this.props.facets[rand2],
            isRolling : true
        });
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die_one} />
                    <Die face={this.state.die_two} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    { this.state.isRolling ? 'Rolling...' : 'Roll Dice'}</button>
            </div>
        );
    }
}

export default RollDice;