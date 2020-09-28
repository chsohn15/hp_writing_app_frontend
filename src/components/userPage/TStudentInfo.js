import { render } from "react-dom";
import React from "react";
import TStudentAssignment from "./TStudentAssignment";

const TStudentInfo = (props) => {
  const student = props.location.student;

  return (
    <div>
      <h3>
        Student Info: {student.first_name} {student.last_name}
      </h3>
      <ul>
        Assignments Completed:
        {student.student_assignments.map((sa) => (
          <li>
            {sa.assignment.name}
            <div>{<TStudentAssignment assignment={sa} />}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TStudentInfo;
