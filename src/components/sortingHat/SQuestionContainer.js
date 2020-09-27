import React from 'react';
import SAnswer from "./SAnswer"


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
        fetch("http://localhost:3000/sorting_hat_questions", {
            method:"GET",
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
          })
        .then(res => res.json())
        .then(questions => {this.setState({questions})})
    }
    
    displayQuestion = () => {
        let foundQuestion =  this.state.questions.find(question => question.number === this.state.currentQuestion.questionNumber)

        return foundQuestion
    }

    findHouse=()=>{
        let answers = this.state.answeredQuestions.values
        let hash={}
        answers.forEach(answer=>{
            if(hash[answer]){hash[answer]+=1}else{hash[answer]=1}}
            )
        

        let mode = Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b);
        console.log(mode)
        this.props.finishQuiz(mode)
    }

    handleClick =(value) => {
        let nextQuestionNumber = this.state.currentQuestion.questionNumber + 1
        console.log(nextQuestionNumber)
        if(nextQuestionNumber>this.state.questions.length){
            // console.log(value)
            // console.log(this.state.answeredQuestions.values)
            this.setState({
                answeredQuestions:{
                    values: [...this.state.answeredQuestions.values, value]
                }},this.findHouse,
                )
        }else{
            console.log(value)
        this.setState({
            answeredQuestions:{
                values: [...this.state.answeredQuestions.values, value]
            },
            currentQuestion: {
                questionNumber: nextQuestionNumber
            }
        })
    }
    }

    render(){
        const question = this.displayQuestion()
        if(this.state.answeredQuestions.values.length===6){console.log(this.state.answeredQuestions)}
        return(
            question ?
            <div>Sorting Hat Question
                <h3>Question {question.number}: {question.question}</h3>
                {question.sorting_hat_answers.map(answer=><SAnswer answer={answer} key ={answer.id} handleClick={this.handleClick}/>)}
            </div>
            :   
            null

        )
    }
}