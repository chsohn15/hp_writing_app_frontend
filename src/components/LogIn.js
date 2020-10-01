import React from "react";
import { Form, Button, Row } from 'react-bootstrap';

class LogIn extends React.Component {
  state = {
    username: "",
    password: "",
    errors: [],
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
        console.log(userInfo);
        if (userInfo.errors) {
          this.setState({
            errors: [...userInfo.errors],
          });
          localStorage.errors = true;
        } else {
          this.props.setCurrentUser(userInfo.user_id);
          localStorage.token = userInfo.token;
          localStorage.user_id = userInfo.user_id;
          localStorage.username = userInfo.username;
          setTimeout(() => this.goToUserPage(), 50);
        }
      });
  };

  goToUserPage = () => {
    this.props.history.push("/user_home");
  };

  render() {
    switch (true) {
      case !this.props.currentUser:
        return (
          <div className="App">
            <div className="login">
              <header className="App-header">
                <div className="welcome-text">
                <img
                  style={{
                    width: "30%",
                    height: "10%",
                    color: "white",
                    justifyContent: "center",
                  }}
                  src="https://www.logolynx.com/images/logolynx/47/4718783b27b71677a205ebed08d2cf4c.png"
                />
                <h1 style={{"color":"white"}}>Log into The Writing App!</h1>
                <Form className="login-form"
                  onSubmit={(e) => {
                    this.logIn(e);
                    //this.goToUserPage();
                  }}
                >
                  <Form.Group as={Row}>
                    <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "590px", "margin-top":"11px"}}>Username</Form.Label>
                    <Form.Control
                      onChange={(e) => this.handleChange(e)}
                      name="username"
                      type="text"
                      style={{"font-size":"17px", "width":"150px", "margin-left":"15px"}}
                    />
                  </Form.Group>
                  <Form.Group as={Row}>
                  <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "594px", "margin-top":"11px"}}>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleChange(e)}
                    name="password"
                    type="password"
                    style={{"font-size":"17px", "width":"150px", "margin-left":"15px"}}
                  />
                  </Form.Group>
                  <Button style={{"margin-right":"10px"}} variant="dark" type="submit" value="Log In">Log In</Button>
                  {this.state.errors.length > 0
                    ? this.state.errors.map((error) => <div style={{"font-size":"19px", "color":"white"}}>{error}</div>)
                    : null}
                </Form>
                </div>
              </header>
            </div>
          </div>
        );
      default:
        this.goToUserPage();
        return null;
    }
  }
}

export default LogIn;
