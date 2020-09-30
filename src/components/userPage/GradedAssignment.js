import React from "react";
import { Card } from 'react-bootstrap';

const GradedAssignment = (props) => {

return(
    <Card style={{width: '30rem', display: "block", margin: "auto"}}>
        <Card.Body>
            <Card.Title>Assignment Name: {props.assignment.assignment.name}</Card.Title>
            {/* <div>{props.assignment.student}</div> */}
    <Card.Text>{props.assignment.text}</Card.Text>
    <Card.Text>Score: {props.assignment.score}/10</Card.Text>
    <Card.Text>Feedback: {props.assignment.feedback}</Card.Text>
    </Card.Body>
    </Card>
)
}

export default GradedAssignment