import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';  

class BoxForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        const newItem = { ...this.state, id: uuid() };
        this.props.addBoxItem(newItem);
        this.setState({height : '',width:'',color:''});
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor="width">width</label>
                <input
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor="color">Color</label>
                <input
                    id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Add a new Box!</button>
            </form>
        );
    }
}

export default BoxForm;