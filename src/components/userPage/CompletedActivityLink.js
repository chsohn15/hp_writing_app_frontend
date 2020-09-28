import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const CompletedActivityLink = (props) => {
  const s_a = props.assignment

    return (
    <div>
      <h3>{s_a.assignment.name}</h3>
      <NavLink to={{pathname: "/completed_assignment", assignment: s_a }}>Click Here</NavLink>
    </div>
  );
};

export default CompletedActivityLink;