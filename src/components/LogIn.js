import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";


class LogIn extends React.Component {
  
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logIn = (e) => {
    e.preventDefault();

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };

    fetch("http://localhost:3000/login", configObj)
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo)
        this.props.setCurrentUser(userInfo.user_id);
        localStorage.token = userInfo.token;
        localStorage.user_id = userInfo.user_id;
        localStorage.username = userInfo.username;
      })
      .then(() => this.props.history.push("/user_home"));
  };

  goToUserPage = () => {
    this.props.history.push("/user_home");
  };



  
  render() {
   return(
      <div className="App">
        <div className="login">
        <header className="App-header">
          <h1>The</h1>
          <img style={{width: "30%", height: "10%", color: "white", justifyContent: "center"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"/>
          <h1>Writing App</h1>
          <h1>Log into your Account!</h1>
          <form
            onSubmit={(e) => {
              this.logIn(e);
              //this.goToUserPage();
            }}
          >
            <label>Username</label>
            <input
              onChange={(e) => this.handleChange(e)}
              name="username"
              type="text"
            />
            <label>Password</label>
            <input
              onChange={(e) => this.handleChange(e)}
              name="password"
              type="password"
            />
            <input type="submit" />
          </form>
        </header>
        </div>
      </div>
    );
  }
}

export default LogIn;
