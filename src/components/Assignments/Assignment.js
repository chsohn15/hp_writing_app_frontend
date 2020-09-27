import React from 'react';


class Assignment extends React.Component {

    state = {
        studentParagraph: ""
    }

    compile=(event)=>{
        event.preventDefault()
        //debugger
        let paragraph = ""

        for(let i=0; i<this.props.location.assignmentProps.assignment_questions.length; i++){
            paragraph += event.target[i].value
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

    render(){
        const assignment = this.props.location.assignmentProps
    return ( <div>

        <div>{assignment.name}</div>
        <div>{assignment.prompt}</div>

        <form onSubmit={(e) => this.compile(e)}>
            {assignment.assignment_questions.map(question=>
            
            <div>
            <label>{question.question}</label><br/>
            <textarea type ="text" style={{height:50, width:500}}/><br/>
            </div>)
    
            }
            <input type ="submit" value="Turn Into a Paragraph!"/>
        </form>
        <textarea onChange={(e) => this.editParagraph(e.target.value)} style={{height:200, width:500}} type ="text" value={this.state.studentParagraph} /><br/>
    </div> );
}
}
 
export default Assignment;