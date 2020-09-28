import React from "react";

const CompletedAssignment = (props) => {
    //console.log(props)
    let s_a = props.location.assignment
 return(<div>
     <h2>{s_a.assignment.name}</h2>
     <div>My submission: {s_a.text}</div><br/>
     {s_a.score
     ?
     <div>
    <h3>Teacher Feedback</h3>
     <div>Score: {s_a.score}/10</div><br/>
     <div>Comments: {s_a.feedback}</div><br/>
     </div>
     : 
     <div>
         This assignment has not yet been scored!
    </div>}
    </div>)
}
export default CompletedAssignment