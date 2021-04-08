import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price : 0
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ name: "", price: 0 })
        this.props.addItem({name:this.state.name,price:this.state.price});
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            <label>Price</label>
            <input
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
            />
            <button>Add Item!</button>
        </form>
    }
}
export default ShoppingListForm;