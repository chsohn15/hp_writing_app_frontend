import { render } from "react-dom";
import React from "react";
import TStudentAssignment from "./TStudentAssignment";
import GradedAssignment from "../GradedAssignment";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Container, Row, Col, Toast} from 'react-bootstrap';

const TStudentInfo = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));
  
  const classes = useStyles();

  const student = props.location.student;
  const ungraded_assignments = student.student_assignments.filter(
    assignment => assignment.score === null
  )

  const graded_assignments =student.student_assignments.filter(assignment=>assignment.score) 
 
  return (
    <Container>
      <h3>
      <Avatar className={classes.large} src={student.character.image}/>
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
      
    </Container>
  );
};

export default TStudentInfo;
