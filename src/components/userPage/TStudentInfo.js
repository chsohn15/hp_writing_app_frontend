import { render } from "react-dom";
import React from "react";
import TStudentAssignment from "./TStudentAssignment";
import GradedAssignment from "./GradedAssignment";

const TStudentInfo = (props) => {
  const student = props.location.student;
  const ungraded_assignments = student.student_assignments.filter(
    assignment => assignment.score === null
  )
  const graded_assignments =student.student_assignments.filter(assignment=>assignment.score) 
 return (
    <div>
      <h3>
        Student Info: {student.first_name} {student.last_name}
      </h3>
      <ul>
        Assignments To Be Graded:
        {ungraded_assignments.map((sa) => (
          <li>
            {sa.assignment.name}
            <div>{<TStudentAssignment gradePaper={props.gradePaper} assignment={sa} />}</div>
          </li>
        ))}
      </ul>

      <ul>
      Graded Assignments: <br />
       {graded_assignments.map(sa=> (
       <li><GradedAssignment assignment={sa}/></li>
       ))}
      </ul>
      
    </div>
  );
};

export default TStudentInfo;
