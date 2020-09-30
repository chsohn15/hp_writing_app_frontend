import React from "react";
import { NavLink } from "react-router-dom";
import SpellCheckButton from "./SpellCheckButton.js"
import { Progress } from 'semantic-ui-react'
import {Form, Container} from 'react-bootstrap';

class Assignment extends React.Component {
  state = {
    studentParagraph: "",
    currentIndex: 1,
    display: "none",
    progress: 0
  };

  compile = (event) => {
    event.preventDefault();

    let paragraph = "";

    for (
      let i = 0;
      i < this.props.location.assignmentProps.assignment_questions.length;
      i++
    ) {
      paragraph += event.target[i].value + " ";
    }

    this.setState({
      studentParagraph: paragraph,
    });
  };

  editParagraph = (paragraph) => {
    this.setState({
      studentParagraph: paragraph,
    });
  };

  submitParagraph = (e, text) => {
    //e.preventDefault()
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: this.state.studentParagraph,
        assignment_id: this.props.location.assignmentProps.id,
        student_id: this.props.currentUser.id,
      }),
    };

    fetch("http://localhost:3000/student_assignments", configObj)
      .then((res) => res.json())
      .then((paragraph) => {
        this.props.setCurrentUser(paragraph.student_id);
      });
  };

  showNextQuestion = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      progress: this.state.progress+25
    });
  };

  displayParagraph = () => {
    this.setState({
      display: "block",
      progress: 100
    });
  };

  render() {
    const assignment = this.props.location.assignmentProps;
    return (
      <div className="assignment-div">
        <Container>
        <div>{assignment.name}</div>
        <Progress percent={this.state.progress} active success></Progress>
        <div>{assignment.prompt}</div>

        <form onSubmit={(e) => this.compile(e)}>
          {assignment.assignment_questions
            .slice(0, this.state.currentIndex)
            .map((question, index) => (
              <div id={index}>
                <label>{question.question}</label>
                <br />
                <textarea type="text" style={{ height: 50, width: 500 }} />
                <br />
              </div>
            ))}
          {this.state.currentIndex < assignment.assignment_questions.length ? (
            <button onClick={() => this.showNextQuestion()}>Next</button>
          ) : (
            <div>
            <input
              onClick={() => this.displayParagraph()}
              type="submit"
              value="Turn Into a Paragraph!"
            />
            </div>
          )}
        </form>
        <form
          style={{ display: `${this.state.display}` }}
          onSubmit={(e) => this.submitParagraph(e, e.target[0].value)}
        >
          <textarea
            onChange={(e) => this.editParagraph(e.target.value)}
            style={{ height: 200, width: 500 }}
            type="text"
            value={this.state.studentParagraph}
          />
          <br />
          <SpellCheckButton />
          <button type="submit">
            <NavLink
              onClick={this.submitParagraph.bind(this)}
              to={{ pathname: "/user_home" }}
              type="submit"
            >
              Submit Your Final Paragraph!
            </NavLink>
          </button>
        </form>
        </Container>
      </div>
    );
  }
}

export default Assignment;
