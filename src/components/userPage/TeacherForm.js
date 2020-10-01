import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Form, Button, Row} from 'react-bootstrap';

class TeacherForm extends React.Component {
  setTeacherId = (id) => {
    let teacherId = parseInt(id);
    this.setState({
      id: teacherId,
    });
  };

  render() {
    return (
      <div>
        <label> Choose a teacher</label>
        <br />
      <Form>
      <Form.Group as={Row}>
        <Form.Control style={{width: "400px"}} as="select" onChange={(e) => this.setTeacherId(e.target.value)}>
          <option selected="true" disabled="disabled">
            Select...
          </option>
          {this.props.teachers.map((teacher) => (
            <option value={teacher.id}>{teacher.full_name}</option>
          ))}
        </Form.Control>
        <Button variant="outline-secondary" style={{
          display: "inline-block",
          "margin-left": "15px"
        }} onClick={() => this.props.setTeacher(this.state.id)}>
          Submit
        </Button>
        </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TeacherForm;
