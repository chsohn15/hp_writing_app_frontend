import React from "react";

const GradedAssignment = (props) => {

return(
    <div>
    <div>{props.assignment.assignment.name}</div>
    {/* <div>{props.assignment.student}</div> */}
    <div>{props.assignment.text}</div>
    <div>Score: {props.assignment.score}/10</div>
    <div>Feedback: {props.assignment.feedback}</div>
    </div>
)
}

export default GradedAssignment