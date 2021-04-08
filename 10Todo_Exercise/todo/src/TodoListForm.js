import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';


class TodoListForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            task : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTaskItem = {...this.state,id : uuid()}
        this.props.addTaskItem(newTaskItem)
        this.setState({task : ''})
    }
    
    render() {
        return <form onSubmit={this.handleSubmit    }>
            <label htmlFor="todo">New Todo</label>
            <input
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
                type="text" 
            />
            <button>Add Task</button>
        </form>
    }
}
export default TodoListForm;