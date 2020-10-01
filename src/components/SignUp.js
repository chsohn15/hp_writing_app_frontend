import React from 'react';
import { Form, Button, Row, Card } from 'react-bootstrap';

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
    this.props.history.push("/sorting_hat_start")
  }
 
  render(){
  return (
      <div className="signup">
        <div className="welcome-text">
          <h1 style={{"color":"white", "margin-bottom":"15px", "padding-top":"180px"}}>Sign Up For the Writing App Today!</h1>
        </div>
          {/* <div className="welcome-text">
                <img
                  style={{
                    width: "30%",
                    height: "10%",
                    color: "white",
                    justifyContent: "center",
                  }}
                  src="https://www.logolynx.com/images/logolynx/47/4718783b27b71677a205ebed08d2cf4c.png"
                />
                <h1 style={{"color":"white", "margin-bottom":"15px"}}>Sign Up For the Writing App Today!</h1>
          </div> */}
          <Form onSubmit={(e) => {
            this.signUp(e)
          }
            }>
            <Form.Group as={Row}>
              <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "590px", "margin-top":"11px"}}>First Name</Form.Label>
              <Form.Control onChange={(e) => this.handleChange(e)} name="first_name" type="text" style={{"font-size":"17px", "width":"160px", "margin-left":"14px", "margin-top":"11px"}}/><br/>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "590px", "margin-top":"11px"}}>Last Name</Form.Label>
              <Form.Control onChange={(e) => this.handleChange(e)} name="last_name" type="text" style={{"font-size":"17px", "width":"160px", "margin-left":"15px"}}/><br/>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "595px", "margin-top":"11px"}}>Username</Form.Label>
              <Form.Control onChange={(e) => this.handleChange(e)} name="username" type="text" style={{"font-size":"17px", "width":"160px", "margin-left":"18px"}}/><br/>
              </Form.Group>
            <Form.Group as={Row}>
              <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "600px", "margin-top":"11px"}}>Password</Form.Label>
              <Form.Control onChange={(e) => this.handleChange(e)} name="password" type="password" style={{"font-size":"17px", "width":"160px", "margin-left":"18px"}}/><br/>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label style={{"font-size":"22px", "color":"white", "margin-left": "641px", "margin-top":"11px"}}>Role</Form.Label>
                <Form.Control as="select" size="sm" onChange={(e) => this.handleRole(e)} name="role" type="text" style={{"font-size":"17px", "width":"160px", "margin-left":"18px"}}><br/>
                  <option name="isStudent" value={true}>Student</option>
                  <option name="isStudent" value={false}>Teacher</option>
                </Form.Control>
            </Form.Group>
            <Button style={{"margin-left": "690px", "margin-top":"11px"}} variant="dark" type="submit">Sign Up</Button>
          </Form>

      </div>
    );
  }
}
  
  export default SignUp;

