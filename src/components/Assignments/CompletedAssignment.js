import React from "react";
import { Card} from 'react-bootstrap';

const CompletedAssignment = (props) => {

    let s_a = props.location.assignment

    return(<div className="completed-assignment-div">
        <Card style={{width: '30rem', display: "block", margin: "auto", "margin-top":"10px"}}>
        <Card.Body>
     <h2>{s_a.assignment.name}</h2>
     <h4>My submission: {s_a.text}</h4><br/>
     {s_a.score
     ?
     <div>
    <h3>Teacher Feedback</h3>
     <div>Score: {s_a.score}/10</div><br/>
     <div>Comments: {s_a.feedback}</div><br/>
     </div>
     : 
     <div>
         This assignment has not yet been scored!
    </div>}
    </Card.Body>
    </Card>
    </div>)
}
export default CompletedAssignment