import React from "react";
import { Toast} from 'react-bootstrap';

const StudentAnnouncements = (props) => {
    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
      }
    
    const announcements = [...props.currentUser.teacher.announcements].reverse()
    
    return (
      <div style={{"margin-top":"15px"}}>
        <h2 className="user-home-text">Professor {props.currentUser.teacher.last_name}'s Announcements:</h2>
    {announcements.map(ann=>{
    return (<div style={{"padding-bottom": "25px"}}>
        <Toast style={{"maxWidth": "500px"}}>
        <Toast.Header style={{"font-size": "15px"}}>{formatDate(ann.created_at)}</Toast.Header>
        <Toast.Body style={{"font-size": "15px"}}>{ann.content}</Toast.Body>
        </Toast>
    </div>)
    })}

      </div>
    );
  };
  
  export default StudentAnnouncements;