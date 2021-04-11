import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task : this.props.task,
            isEditing : false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }
    handleClick() {
        this.props.removeItem(this.props.id);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    toggleForm() {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }
    handleUpdate(event) {
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing : false
        })
    }

    toggleCompleted() {
        this.props.toggleCompleted(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = <div>
                <form onSubmit={this.handleUpdate}>
                    <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                <button>Save!</button>
                </form>
                </div>
            
        } else {
            result = (<div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleClick}>X</button>
                <li className={this.props.completed ? 'completed' : ''} onClick={this.toggleCompleted}>{this.props.task}</li>
            </div>);
        }
        return result;
        
    }
}

export default Todo;