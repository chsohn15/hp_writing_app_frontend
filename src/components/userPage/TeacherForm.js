import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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

        <select onChange={(e) => this.setTeacherId(e.target.value)}>
          <option selected="true" disabled="disabled">
            Select...
          </option>
          {this.props.teachers.map((teacher) => (
            <option value={teacher.id}>{teacher.full_name}</option>
          ))}
        </select>
        <button onClick={() => this.props.setTeacher(this.state.id)}>
          Submit
        </button>
      </div>
    );
  }
}

export default TeacherForm;
