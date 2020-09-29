import React from 'react';

class SignUp extends React.Component {
    
  state={
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    isStudent: true  
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleRole = (e) => {

    if(e.target.value === "true"){
      this.setState({
        isStudent: true
      })
    }
    else{
      this.setState({
        isStudent: false
      })
    }
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
        password: this.state.password,
        is_student: this.state.isStudent
      })
    }
    
    fetch('http://localhost:3000/users',configObj)
    .then(res => res.json())
    .then(data => {
      localStorage.token = data.token
      localStorage.user_id = data.user_id 
      localStorage.username = data.username
      this.props.setCurrentUser(data.user_id)
      setTimeout(() => this.directToSortingHat(), 50);
    })
      

  }

  directToSortingHat =() => {
    this.props.history.push("/sorting_hat")
  }
 
  render(){
  return (
      <div className="signup">
        <header className="App-header">
          <h1>Sign Up for an Account!</h1>
          <form onSubmit={(e) => {
            this.signUp(e)
            // this.directToSortingHat()
          }
            }>
            <label>First Name</label>
            <input onChange={(e) => this.handleChange(e)} name="first_name" type="text"/><br/>
            <label>Last Name</label>
            <input onChange={(e) => this.handleChange(e)} name="last_name" type="text"/><br/>
            <label>Username</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text"/><br/>
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password"/><br/>
            <label>Role</label>
            <select onChange={(e) => this.handleRole(e)} name="role" type="text"><br/>
              <option name="isStudent" value={true}>Student</option>
              <option name="isStudent" value={false}>Teacher</option>
            </select>
            <input type="submit"/>
          </form>

        </header>
      </div>
    );
  }
}
  
  export default SignUp;

