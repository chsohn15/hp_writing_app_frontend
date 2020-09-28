import React from "react";

const CompletedAssignment = (props) => {
    //console.log(props)
    let s_a = props.location.assignment
 return(<div>
     <h2>{s_a.assignment.name}</h2>
     <div>My submission: {s_a.text}</div>
 </div>)
}
export default CompletedAssignment