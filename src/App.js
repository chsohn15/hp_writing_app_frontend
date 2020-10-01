import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Welcome from "./components/Welcome";
import SMainContainer from "./components/sortingHat/SMainContainer";
import SStart from "./components/sortingHat/SStart";
import UserPageContainer from "./components/userPage/UserPageContainer";
import TeacherHome from "./components/userPage/Teacher/TeacherHome";
import Assignment from "./components/Assignments/Assignment.js";
import CompletedAssignment from "./components/Assignments/CompletedAssignment.js";
import TStudentInfo from "./components/userPage/Teacher/TStudentInfo";
import { Row } from 'react-bootstrap';

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
          teachers: teachers,
        });
      });
  }

  setCurrentUser = (id) => {
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
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, configObj)
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        this.setState({
          currentUser: user,
        });
      });

  };

  logOut = () => {
    localStorage.clear();

    this.setState({
      currentUser: null,
    });
  };

  directToLogIn = () => {
    this.routerProps.history.push("/login");
  };

  setTeacher = (id) => {
    let studentId = this.state.currentUser.id;

    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacher_id: id,
      }),
    };

    fetch(`http://localhost:3000/users/${studentId}`, configObj)
      .then((res) => res.json())
      .then((student) => {
        this.setState({
          currentUser: student,
        });
      });
  };

  gradePaper = (sa_id, score, feedback) => {
    let scoreInt = parseInt(score);
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        score: scoreInt,
        feedback: feedback,
      }),
    };

    fetch(`http://localhost:3000/student_assignments/` + sa_id, configObj)
      .then((res) => res.json())
      .then((sa) => {this.setCurrentUser(this.state.currentUser.id)});

  };


  render() {
    return (
      <div className="App" style={{height: "7vh", "background-color": "#170729",
        "background-image": 'url("https://www.transparenttextures.com/patterns/dark-wood.png")'}}>
        {/* <header className="App-header">
          <h1>Hogwarts</h1>
        </header> */}
        <Router>
          {this.state.currentUser? 
          <div style={{padding: "10px"}}>
            <Row>
              <div style={{"padding-top": "13px", "padding-left": "20px", color: "white", textAlign: "center", "font-size":"18px"}}>The Harry Potter Writing App</div>
              <NavLink  style={{padding: "12px", "justify-content": "right"}} onClick={this.logOut} to="/login">
                    Log Out
              </NavLink>
              </Row>
              </div>
                  :
          null}

          <div>
          <Route
              exact
              path="/welcome"
              render={(routerProps) => (
                <Welcome {...routerProps} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={(routerProps) => (
                <SignUp {...routerProps} setCurrentUser={this.setCurrentUser} />
              )}
            />
            <Route
              exact
              path="/sorting_hat_start"
              render={(routerProps) => (
                <SStart {...routerProps} currentUser={this.state.currentUser} />
              )}
            />
            <Route
              exact
              path="/login"
              render={(routerProps) => (
                <LogIn
                  useStyle={this.useStyles}
                  {...routerProps}
                  setCurrentUser={this.setCurrentUser}
                  currentUser={this.state.currentUser}
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
              render={(routerProps) => (
                <UserPageContainer
                  renderUserPage={this.renderUserPage}
                  alterEgo={this.state.alterEgo}
                  currentUser={this.state.currentUser}
                  assignments={this.state.assignments}
                  teachers={this.state.teachers}
                  setTeacher={this.setTeacher}
                  {...routerProps}
                  setCurrentUser={this.setCurrentUser}
                />
              )}
            />
            <Route
              exact
              path="/student_info"
              render={(routerProps) => (
                <TStudentInfo gradePaper={this.gradePaper} {...routerProps} />
              )}
            />
            <Route
              exact
              path="/assignment"
              render={(routerProps) => (
                <Assignment
                  {...routerProps}
                  currentUser={this.state.currentUser}
                  setCurrentUser={this.setCurrentUser}
                />
              )}
            />
            <Route
              exact
              path="/completed_assignment"
              render={(routerProps) => (
                <CompletedAssignment
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
