import React from "react";
import { NavLink } from "react-router-dom";
import SpellCheckButton from "./SpellCheckButton.js"

class Assignment extends React.Component {
  state = {
    studentParagraph: "",
    currentIndex: 1,
    display: "none",
    errors: [],
    grammarCheckOn: false
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
    });
  };

  displayParagraph = () => {
    this.setState({
      display: "block",
    });
  };

  checkGrammar = (text) => {
    let errors = []

    for (var x = 0; x < text.length; x++)
    {
      let c = text.charAt(x);
      let d = text.charAt(x+1)
      let e = text.charAt(x+2)
      let f = text.charAt(x+3)
    
  
      if (c === " " && d === "i" && e===" "){
        errors = [...errors, "Please capitalize all instances of 'I'."]
      }
      if (c === "d" && d === "o" &&e==="n" && f ==="t"){
        errors = [...errors, "Please add an apostrophe to 'don't.'"]
      }
    }

    if (errors.length > 1){
      this.setState({
        errors: [...errors]
      })
    }
  }
  

  render() {
    const assignment = this.props.location.assignmentProps;
    return (
      <div>
        <div>{assignment.name}</div>
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
          <SpellCheckButton grammarCheckOn={this.state.grammarCheckOn} text={this.state.studentParagraph} errors={this.state.errors} checkGrammar={this.checkGrammar}/>
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
      </div>
    );
  }
}

export default Assignment;
