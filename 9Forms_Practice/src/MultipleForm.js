import React, { Component } from "react";

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.username)
  }
  render() {
    return (<div>
      <h1>Multiple Form</h1>
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>)
  }
}

export default MultipleForm;
