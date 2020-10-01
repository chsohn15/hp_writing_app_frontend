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
        margin: theme.spacing(5),
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
    <div className="student-info-div" >
    <Container className="student-info-page">
      <Avatar className={classes.large} style={{display: "block",margin: "auto"}} src={student.character.image}/>
      <h2 style={{color:"white"}}>
        Student: {student.first_name} {student.last_name}
      </h2>

        <h3 style={{color:"white"}}>Assignments To Be Graded:</h3>
        {ungraded_assignments.length>0? ungraded_assignments.map((sa) => (
            <div>{<TStudentAssignment gradePaper={props.gradePaper} assignment={sa} />}</div>
        )
        ): <div style={{color:"white"}}>None</div>
      }



      <h3 style={{color:"white"}}>Graded Assignments: </h3><br />
       {graded_assignments.length>0? graded_assignments.map(sa=> (
       <GradedAssignment assignment={sa}/>
       )):<div style={{color:"white"}}>None</div>
      }
    </Container>
    </div>
  );
};

export default TStudentInfo;
