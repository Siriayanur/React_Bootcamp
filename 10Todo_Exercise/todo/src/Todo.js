import React, { Component } from 'react';
 
class Todo extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.removeItem(this.props.id);
    }
    render() {
        return (
            <div>
                <h1>Hello this is todo item with {this.props.task}</h1>
                <button onClick={this.handleClick}>X</button>
            </div>
            
        );
    }
}

export default Todo;