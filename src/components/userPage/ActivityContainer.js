import React from "react";
import ActivityLink from "./ActivityLink.js";
import CompletedActivityLink from "./CompletedActivityLink.js"
import {Card} from 'react-bootstrap';

const ActivityContainer = (props) => {

  //debugger
    //List of student_assignments
    const completed_activities =props.currentUser.student_assignments
    const s_a_ids =props.currentUser.student_assignments.map(sa=>sa.assignment.id)
    const incompleted_activities= props.assignments.filter(assignment=>!s_a_ids.includes(assignment.id))
    
    // const incompleted_activities =props.assignments.filter(assignment=>!props.currentUser.student_assignments.assignments.includes(assignment))
    return (
    <Card style={{"margin-top":"15px"}}>
      <Card.Body>
      <h2>Activities</h2>
      <Card.Text>{incompleted_activities.map(assignment => <ActivityLink assignment={assignment}/>)}</Card.Text>
      <h2>Completed Activities</h2>
      <Card.Text>{completed_activities.map(student_assignment => <CompletedActivityLink assignment={student_assignment}/>)}</Card.Text>
      <br/>
      </Card.Body>
    </Card>
  );
};

export default ActivityContainer;
