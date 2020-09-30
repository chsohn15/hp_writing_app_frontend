import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Card} from 'react-bootstrap';


const ActivityLink = (props) => {
  return (
    <div>
      <Card.Title>{props.assignment.name}</Card.Title>
      <NavLink to={{pathname:"/assignment", assignmentProps: props.assignment }}>Click Here</NavLink>
    </div>
  );
};

export default ActivityLink;
