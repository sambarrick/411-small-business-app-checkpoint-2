import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
      <Grid container direction="row" justify="center" alignItems="center">
        <form>
          <TextField
            variant="standard"
            margin="normal"
            id="email"
            label="Username*"
            name="email"
          />
          <br />
          <TextField
            variant="standard"
            margin="normal"
            id="password"
            label="Password*"
            type="password"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => {
              this.props.onLogin();
            }}
          >
            LOGIN
          </Button>
        </form>
      </Grid>
    );
  }
}

export default App