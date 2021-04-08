import React, { Component } from 'react';
import Todo from './Todo';
import TodoListForm from './TodoListForm';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTaskItem = this.addTaskItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    //Add a new taskItem to array
    addTaskItem(newTask) {
        this.setState({
            todos : [...this.state.todos,newTask]
        })
        
    }

    //Remove an item
    removeItem(taskId) {
        this.setState({
            todos : this.state.todos.filter((todo) => todo.id  !== taskId)
        })
    }
    render() {
        return <div>
            <h1>Todoey</h1>
            <h2> A Simple React To do List App</h2>
            {this.state.todos.map((todo) => {
                return <Todo key={todo.id} id={ todo.id} task={todo.task} removeItem={this.removeItem}/>
            })}
            <TodoListForm addTaskItem={this.addTaskItem}/>
        </div>
    }
}

export default TodoList;