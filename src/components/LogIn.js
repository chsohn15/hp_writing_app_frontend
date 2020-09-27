import React from 'react';

class LogIn extends React.Component {
    
  state={
    username: "",
    password: ""  
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

 logIn = (e) =>{
    e.preventDefault()

    let configObj = {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }
    
    fetch('http://localhost:3000/login',configObj)
    .then(res => res.json())
    .then(userInfo => {
      localStorage.token = userInfo.token
      localStorage.user_id = userInfo.user_id
      this.props.setCurrentUser(userInfo.user_id)
      })

  }

  goToUserPage = () => {
    this.props.history.push("/user_home")
  }
 
  render(){
  return (
      <div className="App">
        <header className="App-header">
          <h1>Log into your Account!</h1>
          <form onSubmit={(e) => {
                  this.logIn(e)
                  this.goToUserPage()}}>
            <label>Username</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text"/>
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password"/>
            <input type="submit"/>
          </form>

        </header>
      </div>
    );
  }
}
  
  export default LogIn;


