import React from "react";

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

  studentId = this.props.assignment.student_id;
  assignmentId = this.props.assignment.assignment_id;
  //teacherId =

  render() {
    return (
      <div>
        <div>Student's Submission: </div>
        <br />
        <div> {this.props.assignment.text}</div>
        <br />
        <div>Grade this Assignment (out of 10 Points)</div>
        <select name="score" onChange={(e) => this.handleChange(e)}>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
        </select>
        <br />
        <label>Feedback</label> <br />
        <textarea
          name="feedback"
          onChange={(e) => this.handleChange(e)}
        ></textarea>{" "}
        <br />
        <button>Submit Grade</button>
      </div>
    );
  }
}
export default TStudentAssignment;
