import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import SMainContainer from "./components/sortingHat/SMainContainer";
import UserPageContainer from "./components/userPage/UserPageContainer";
import Assignment from "./components/Assignments/Assignment.js"

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/users/5")
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          currentUser: user
        });
      });
    fetch("http://localhost:3000/assignments")
      .then((res) => res.json())
      .then(assignments => {
        this.setState({
          assignments
        })
      });
  }

  state = {
    currentUser: {},
    assignments: []
  };

  setUserHouse = (house) => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        house: house,
      },
    });
  };

  setAlterEgo = (charAlterEgo) => {
    //Update character_id in database
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        character_id: charAlterEgo.id,
      }),
    };

    // Update character_id in state
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, configObj)
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          currentUser: user,
          alterEgo: charAlterEgo
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hogwarts</h1>
          <button>Login</button>
          <button>Signup</button>
        </header>
        <Router>
          <div>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route
              exact
              path="/sorting_hat"
              render={() => (
                <SMainContainer
                  setUserHouse={this.setUserHouse}
                  currentUserId={this.state.currentUser.id}
                  userHouse={this.state.currentUser.house}
                  setAlterEgo={this.setAlterEgo}
                />
              )}
            />
            <Route
              exact
              path="/user_home"
              render={() => (
                <UserPageContainer alterEgo={this.state.alterEgo} currentUser={this.state.currentUser} assignments={this.state.assignments}/>
              )}
            />
            <Route
              exact
              path="/assignment"
              render={(routerProps) => (
                <Assignment {...routerProps} currentUser={this.state.currentUser} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
