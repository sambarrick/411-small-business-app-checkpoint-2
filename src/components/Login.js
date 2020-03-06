import React, { Component } from "react";
import {TextField, Button, Container} from "@material-ui/core";
//import {checkAuth} from '../Router'

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  handleTextChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  login = e => {
    e.preventDefault();
    // set cookie here
    document.cookie = "loggedIn=true;max-age=60*1000";
    window.location.replace("/");
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
              <br />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
              <br />
            <Button className="login-button"
              type="submit"
              variant="contained"
              >Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;