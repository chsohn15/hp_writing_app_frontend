import React from "react";
import { NavLink } from "react-router-dom";
import { Progress } from 'semantic-ui-react'
import {Form, Container, Button} from 'react-bootstrap';

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
        <h1 className="assignment-content" style={{"font-family":"'Parisienne', cursive", "font-size":"55px"}}>{assignment.name}</h1>
        <Progress percent={this.state.progress} active color="yellow"></Progress>
        <h2 style={{"font-family":"'Parisienne', cursive","font-size":"45px"}}>{assignment.prompt}</h2>

        <Form onSubmit={(e) => this.compile(e)}>
          {assignment.assignment_questions
            .slice(0, this.state.currentIndex)
            .map((question, index) => (
              <div className="assignment-content" id={index}>
                <label style={{"font-family": "'Cardo', serif", "font-size":"20px"}}>{question.question}</label>
                <br />
                <textarea type="text" placeholder="Begin writing here..." style={{ padding: "10px", border: "none", background: "transparent", height: 70, width: 597, "font-family": "'Cardo', serif", "font-size":"15px" }} />
                <br />
              </div>
            ))}
          {this.state.currentIndex < assignment.assignment_questions.length ? (
            <Button style={{"font-family": "'Cardo', serif"}} variant="light" className="assignment-content d-flex justify-content-center" onClick={() => this.showNextQuestion()}>Next</Button>
          ) : (
            <div>
            <Button style={{"font-family": "'Cardo', serif"}} variant="light" className="assignment-content d-flex justify-content-center"
              onClick={() => this.displayParagraph()}
              type="submit"
              value="Transform Into a Paragraph!"
            >Transform into a Paragraph!</Button>
            </div>
          )}
        </Form>
        <Form
          style={{ display: `${this.state.display}` }}
          onSubmit={(e) => this.submitParagraph(e, e.target[0].value)}
        >
          <textarea
            onChange={(e) => this.editParagraph(e.target.value)}
            className="assignment-content"
            style={{ padding: "10px", "margin-top": "25px", "padding-top": "25px", border: "none", background: "transparent", height: 200, width: 500, "font-family": "'Cardo', serif", "font-size":"15px" }}
            type="text"
            value={this.state.studentParagraph}
          />
          <br />
          <Button style={{"font-family": "'Cardo', serif", "font-color": "black"}} variant="light" className="assignment-content d-flex justify-content-center" type="submit">
            <NavLink
              onClick={this.submitParagraph.bind(this)}
              to={{ pathname: "/user_home" }}
              type="submit"
            >
              Submit Your Final Paragraph!
            </NavLink>
          </Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default Assignment;
