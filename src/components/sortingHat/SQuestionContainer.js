import React from "react";
import SAnswer from "./SAnswer";
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';


export default class SQuestionContainer extends React.Component {
  state = {
    questions: [],
    currentQuestion: {
      questionNumber: 1,
    },
    answeredQuestions: {
      values: [],
    },
    horizontal: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/sorting_hat_questions", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((questions) => {
        this.setState({ questions });
      });
  }

  displayQuestion = () => {
    let foundQuestion = this.state.questions.find(
      (question) =>
        question.number === this.state.currentQuestion.questionNumber
    );

    return foundQuestion;
  };

  findHouse = () => {
    let answers = this.state.answeredQuestions.values;
    let hash = {};
    answers.forEach((answer) => {
      if (hash[answer]) {
        hash[answer] += 1;
      } else {
        hash[answer] = 1;
      }
    });

    let mode = Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));

    this.props.finishQuiz(mode);
  };

  handleClick = (value) => {

    let nextQuestionNumber = this.state.currentQuestion.questionNumber + 1;

    if (nextQuestionNumber > this.state.questions.length) {
      this.setState(
        {
          answeredQuestions: {
            values: [...this.state.answeredQuestions.values, value],
          },
        },
        this.findHouse
      );
    } else {

      this.setState({
        answeredQuestions: {
          values: [...this.state.answeredQuestions.values, value],
        },
        currentQuestion: {
          questionNumber: nextQuestionNumber,
        },
        horizontal: !this.state.horizontal
      });
    }


  };

  imageArray = [
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/08/Harry-Potter-Goblet-of-Fire-maze.jpg?q=50&fit=crop&w=740&h=333",
    null,
    "https://vignette.wikia.nocookie.net/pottermore/images/9/9d/B1C10M3.jpg/revision/latest?cb=20120607124755",
    null, 
    "https://images.ctfassets.net/usf1vwtuqyxm/1Xu3upypGYkU8G2EW02oeg/2da84507e8a3588a5bf13f05f89ec341/HoraceSlughorn_PM_B6C9M1_SlughornsPotionsClass_Moment.jpg",
    null]



  changeOrientation = () => {
    if (this.state.currentQuestion === 2 || this.state.currentQuestion === 4 || this.state.currentQuestion === 6){
      return true
    }
    else{
      return false
    }
  }

  render() {
    const question = this.displayQuestion();
    if (this.state.answeredQuestions.values.length === 6) {
      console.log(this.state.answeredQuestions);
    }
    return question ? (
      <div className="sorting_question" style={{backgroundImage: `url(${this.imageArray[this.state.currentQuestion.questionNumber - 1]})`}}>
        <Card id="card" style={{ width: '30rem' }}>
        <Card.Body>
        <Card.Title>
          Question {question.number}: {question.question}
        </Card.Title>
        </Card.Body>
        <ListGroup  horizontal={this.state.horizontal} className="list-group-flush horizontal" variant="flush">
        {question.sorting_hat_answers.map((answer) => (
          <ListGroupItem>
            <SAnswer
              answer={answer}
              key={answer.id}
              handleClick={this.handleClick}
            />
            </ListGroupItem>
        ))}
      </ListGroup>
        </Card>
      </div>
    ) : null;
  }
}
