import React from 'react';

class SignUp extends React.Component {
    
  state={
    first_name: "",
    last_name: "",
    username: "",
    password: ""  
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  signUp = (e) =>{
    e.preventDefault()

    let configObj = {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password
      })
    }
    
    fetch('http://localhost:3000/users',configObj)
    .then(res => res.json())

  }
 
  render(){
  return (
      <div className="App">
        <header className="App-header">
          <h1>Sign Up for an Account!</h1>
          <form onSubmit={(e) => this.signUp(e)}>
            <label>First Name</label>
            <input onChange={(e) => this.handleChange(e)} name="first_name" type="text"/>
            <label>Last Name</label>
            <input onChange={(e) => this.handleChange(e)} name="last_name" type="text"/>
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
  
  export default SignUp;

