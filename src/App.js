import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import SMainContainer from './components/sortingHat/SMainContainer';

class App extends React.Component {
  
  componentDidMount(){
    fetch("http://localhost:3000/users/4")
    .then(res => res.json())
    .then(user => this.setState({
      currentUser: user
    }))
  }

  state = {
    currentUser: {}, 
  }

  setUserHouse = (house) => {

    this.setState({
      currentUser: {
        ...this.state.currentUser, 
        house: house}
    })
  }

  setAlterEgo = (charAlterEgo) => {
    //Update character_id in database
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

  // Update character_id in state
  fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, configObj)
  .then(res => res.json())
  .then(user =>{
      this.setState({
        currentUser: {
          ...this.state.currentUser, 
          character_id: user.character_id}
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
        <Route exact path="/sorting_hat" render = {() => <SMainContainer setUserHouse={this.setUserHouse} currentUserId = {this.state.currentUser.id} userHouse={this.state.currentUser.house} setAlterEgo={this.setAlterEgo}/>} />
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
