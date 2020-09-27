import React from "react";
import ActivityLink from "./ActivityLink.js";

const ActivityContainer = (props) => {
 
    return (
    <div>
      <h1>My Activities</h1>
      {props.assignments.map(assignment => <ActivityLink assignment={assignment}/>)}
    </div>
  );
};

export default ActivityContainer;
