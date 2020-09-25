import React from 'react';


export default class SQuestionContainer extends React.Component{
    
    state = {
        questions:[],
        currentQuestion: {
            questionNumber: 1,
        },
        answeredQuestions: {
            values: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/sorting_hat_questions")
        .then(res => res.json())
        .then(questions => {this.setState({questions})})
    }
    
    displayQuestion = () => {
        let foundQuestion =  this.state.questions.find(question => question.number === this.state.currentQuestion.questionNumber)
        // console.log(foundQuestion)

        return foundQuestion
    }

    handleClick =(value) => {
        let nextQuestionNumber = this.state.currentQuestion.questionNumber + 1
        this.setState({
            answeredQuestions:{
                values: [...this.state.answeredQuestions.values, value]
            },
            currentQuestion: {
                questionNumber: nextQuestionNumber
            }
        })

    }

    render(){
        const question = this.displayQuestion()
        return(
            question ?
            <div>Sorting Hat Question
                <h3>Question : {question.question}</h3>
            </div>
            :   
            null

        )
    }
}