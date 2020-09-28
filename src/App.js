import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import SMainContainer from "./components/sortingHat/SMainContainer";
import UserPageContainer from "./components/userPage/UserPageContainer";
import TeacherHome from "./components/userPage/TeacherHome";
import Assignment from "./components/Assignments/Assignment.js";

class App extends React.Component {
  state = {
    currentUser: {},
    assignments: [],
    teachers: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          currentUser: user,
        });
      });

    fetch("http://localhost:3000/assignments", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((assignments) => {
        this.setState({
          assignments,
        });
      });

    fetch("http://localhost:3000/teachers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((teachers) => {
        this.setState({
          teachers,
        });
      });
  }

  setCurrentUserByLogin = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          currentUser: user,
        });
      });

    fetch("http://localhost:3000/assignments", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((assignments) => {
        this.setState({
          assignments,
        });
      });
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
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        character_id: charAlterEgo.id,
      }),
    };

    //Update character_id in state
    fetch(
      `http://localhost:3000/users/${this.state.currentUser.id}`,
      configObj
    ).then((res) => res.json());
  };

  renderUserPage = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          currentUser: user,
        });
      });
  };

  logOut = () => {
    localStorage.clear();
  };

  directToLogIn = () => {
    this.routerProps.history.push("/login");
    // localStorage.clear()
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hogwarts</h1>
        </header>
        <Router>
          <NavLink to="/login">Log Out</NavLink>
          <div>
            <Route
              exact
              path="/signup"
              render={(routerProps) => (
                <SignUp
                  {...routerProps}
                  setCurrentUser={this.setCurrentUserByLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(routerProps) => (
                <LogIn
                  {...routerProps}
                  setCurrentUser={this.setCurrentUserByLogin}
                />
              )}
            />
            <Route
              exact
              path="/sorting_hat"
              render={(routerProps) => (
                <SMainContainer
                  routerProps={routerProps}
                  setUserHouse={this.setUserHouse}
                  currentUserId={this.state.currentUser.id}
                  currentUser={this.state.currentUser}
                  userHouse={this.state.currentUser.house}
                  setAlterEgo={this.setAlterEgo}
                />
              )}
            />
            <Route
              exact
              path="/user_home"
              render={() => (
                <UserPageContainer
                  renderUserPage={this.renderUserPage}
                  alterEgo={this.state.alterEgo}
                  currentUser={this.state.currentUser}
                  assignments={this.state.assignments}
                  teachers={this.state.teachers}
                />
              )}
            />
            <Route
              exact
              path="/teacher_home"
              render={() => (
                <TeacherHome
                  renderUserPage={this.renderUserPage}
                  alterEgo={this.state.alterEgo}
                  currentUser={this.state.currentUser}
                  assignments={this.state.assignments}
                />
              )}
            />
            <Route
              exact
              path="/assignment"
              render={(routerProps) => (
                <Assignment
                  {...routerProps}
                  currentUser={this.state.currentUser}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
