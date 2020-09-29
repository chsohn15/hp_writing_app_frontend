import React from "react";

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
    return (
      <div className="App">
        <div className="login">
          <header className="App-header">
            <h1>The</h1>
            <img
              style={{
                width: "30%",
                height: "10%",
                color: "white",
                justifyContent: "center",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"
            />
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
              {this.state.errors.length > 0
                ? this.state.errors.map((error) => <div>{error}</div>)
                : null}
            </form>
          </header>
        </div>
      </div>
    );
  }
}

export default LogIn;
