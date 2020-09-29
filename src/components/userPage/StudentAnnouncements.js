import React from "react";

const StudentAnnouncements = (props) => {
    return (
      <div>
        <h2>Ms. {props.currentUser.teacher.last_name}'s Announcements:</h2>
        <ul>
            {props.currentUser.teacher.announcements.map(ann=><li>{ann.content}</li>)}
         </ul>
      </div>
    );
  };
  
  export default StudentAnnouncements;