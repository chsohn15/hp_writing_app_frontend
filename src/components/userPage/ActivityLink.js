import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const ActivityLink = (props) => {
  return (
    <div>
      <h3>{props.assignment.name}</h3>
      <NavLink to={{pathname:"/assignment", assignmentProps: props.assignment }}>Click Here</NavLink>
    </div>
  );
};

export default ActivityLink;
