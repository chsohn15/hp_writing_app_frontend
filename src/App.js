import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import SMainContainer from './components/sortingHat/SMainContainer';

class App extends React.Component {
  
  state = {
    currentUserId: 4, 
    userHouse: null,
    userAlterEgo: null
  }

  setUserHouse = (house) => {
    this.setState({
      userHouse: house
    })
  }

  setAlterEgo = (charAlterEgo) => {
    
    let configObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
          character_id: charAlterEgo.id
      })
  }

  fetch(`http://localhost:3000/users/${this.state.currentUserId}`, configObj)
  .then(res => res.json())
  .then(user => {
      this.setState({
        userAlterEgo: charAlterEgo
      })
  })

  }
  
  render(){
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
        <Route exact path="/sorting_hat" render = {() => <SMainContainer setUserHouse={this.setUserHouse} currentUserId = {this.state.currentUserId} userHouse={this.state.userHouse} setAlterEgo={this.setAlterEgo}/>} />
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
