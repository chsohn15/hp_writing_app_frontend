import React from "react";
import ActivityLink from "./ActivityLink.js";
import CompletedActivityLink from "./CompletedActivityLink.js"

const ActivityContainer = (props) => {

  //debugger
    //List of student_assignments
    const completed_activities =props.currentUser.student_assignments
    const s_a_ids =props.currentUser.student_assignments.map(sa=>sa.assignment.id)
    const incompleted_activities= props.assignments.filter(assignment=>!s_a_ids.includes(assignment.id))
    
    // const incompleted_activities =props.assignments.filter(assignment=>!props.currentUser.student_assignments.assignments.includes(assignment))
    return (
    <div>
      <h1>Activities</h1>
      <div>{incompleted_activities.map(assignment => <ActivityLink assignment={assignment}/>)}</div>
      <h1>Completed Activities</h1>
      <div>{completed_activities.map(student_assignment => <CompletedActivityLink assignment={student_assignment}/>)}</div>
      <br/>
    </div>
  );
};

export default ActivityContainer;
