import React from "react";
import { Toast} from 'react-bootstrap';

const StudentAnnouncements = (props) => {
    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
      }
    
    
    return (
      <div>
        <h2>Professor {props.currentUser.teacher.last_name}'s Announcements:</h2>


    {props.currentUser.teacher.announcements.map(ann=>{
    return (<div>
        <Toast style={{"maxWidth": "500px"}}>
        <Toast.Header>{formatDate(ann.created_at)}</Toast.Header>
        <Toast.Body>{ann.content}</Toast.Body>
        </Toast>
    </div>)
    })}

      </div>
    );
  };
  
  export default StudentAnnouncements;