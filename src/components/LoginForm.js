import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.username && this.state.password ? this.props.onSubmit(this.state) : console.log('Please enter your Username and Password')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" value="submit" name="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

  // handleUserChange = (event) =>{
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handlePassChange = (event) =>{
  //   this.setState({
  //     password: event.target.value
  //   })
  // }
