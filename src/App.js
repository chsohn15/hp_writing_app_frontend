import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import SMainContainer from './components/sortingHat/SMainContainer';

class App extends React.Component {
  
  state = {
    userHouse: null,
    userAlterEgo: ""
  }

  setUserHouse = (house) => {
    this.setState({
      userHouse: house
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
        <Route exact path="/sorting_hat" render = {() => <SMainContainer setUserHouse={this.setUserHouse} userHouse={this.state.userHouse}/>} />
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
