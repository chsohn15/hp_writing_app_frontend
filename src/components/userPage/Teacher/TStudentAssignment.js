import React from "react";
import { Card, Form, Alert} from 'react-bootstrap';
import { NavLink } from "react-router-dom";


class TStudentAssignment extends React.Component {
  state = {
    score: 10,
    feedback: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sa_id = this.props.assignment.id

  render() {
    return (
      <Card style={{width: '30rem', display: "block", margin: "auto", "margin-top":"10px"}}>
        <Card.Body>
          <Card.Title>Assignment Title: {this.props.assignment.assignment.name}</Card.Title>
          <Card.Title>Student's Submission: </Card.Title>
            <br />
          <Card.Text> {this.props.assignment.text}</Card.Text>
            <br />
            <div>Grade this Assignment (out of 10 Points):</div>
        <Form>
          <Form.Control style={{width: "50px", display: "block", margin: "auto", "margin-top":"10px"}}size="sm" as="select" name="score" onChange={(e) => this.handleChange(e)}>
            <option  value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
          </Form.Control>
          <br />
        <Form.Group>
          <Form.Label>Feedback:</Form.Label>
            <Form.Control as="textarea" rows="3" 
              name="feedback"
              onChange={(e) => this.handleChange(e)}
            ></Form.Control>
            <br />
        </Form.Group>
      </Form>
      <button onClick={()=>this.props.gradePaper(this.sa_id, this.state.score, this.state.feedback)}>
      <NavLink
              to={{ pathname: "/user_home" }}
              type="submit"
            >
              Submit Grade
            </NavLink>
            </button>
        </Card.Body>
      </Card>
    );
  }
}
export default TStudentAssignment;
