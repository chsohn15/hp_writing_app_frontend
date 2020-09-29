import React from 'react';
import { NavLink } from "react-router-dom";


class Assignment extends React.Component {

    state = {
        studentParagraph: "",
        currentIndex: 1,
        display: "none"
    }


    compile=(event)=>{
        event.preventDefault()

        let paragraph = ""

        for(let i=0; i<this.props.location.assignmentProps.assignment_questions.length; i++){
            paragraph += event.target[i].value + " "
        }

        this.setState({
            studentParagraph: paragraph
        })
    }

    editParagraph =(paragraph) => {
        this.setState({
            studentParagraph: paragraph
        })
    }

    submitParagraph = (e, text) => {
        //e.preventDefault()
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text, 
                assignment_id: this.props.location.assignmentProps.id, 
                student_id: this.props.currentUser.id,
            })
        }

        fetch("http://localhost:3000/student_assignments", configObj)
        .then(res => res.json())
        .then(paragraph => console.log(paragraph))

        // this.props.history.push("/user_home");
    }

    showNextQuestion = () => {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
     
    }

    displayParagraph=()=>{
        this.setState({
            display: "block"
        })
    }
    
    
    render(){
        const assignment = this.props.location.assignmentProps
    return ( <div>

        <div>{assignment.name}</div>
        <div>{assignment.prompt}</div>

        <form onSubmit={(e) => this.compile(e)}>
            {assignment.assignment_questions.slice(0, this.state.currentIndex).map((question, index)=>
            
            <div id={index}>
            <label>{question.question}</label><br/>
            <textarea type ="text" style={{height:50, width:500}}/><br/>
            
            </div>)
    
            }
            {this.state.currentIndex < assignment.assignment_questions.length
            ?
            <button onClick={() => this.showNextQuestion()}>Next</button>
            :
            <input onClick={() => this.displayParagraph()} type ="submit" value="Turn Into a Paragraph!"/>}
        </form>
        <form  style={{"display": `${this.state.display}`}} onSubmit={(e) => this.submitParagraph(e, e.target[0].value)}>
        <textarea  onChange={(e) => this.editParagraph(e.target.value)} style={{height:200, width:500}} type ="text" value={this.state.studentParagraph} /><br/>
        <button type="submit">
        <NavLink onClick={this.submitParagraph.bind(this)} to={{ pathname: "/user_home" }} type="submit">Submit Your Final Paragraph!</NavLink>
        </button>
        
        </form>
    </div> );
}
}
 
export default Assignment;

