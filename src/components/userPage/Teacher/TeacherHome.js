import React from "react";
import UserInfoCard from "../UserInfoCard";
import ActivityContainer from "../ActivityContainer.js";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import TStudentInfo from "./TStudentInfo";
import AnnouncementForm from "./AnnouncementForm.js";
import { useState, useEffect } from "react";
import { Container, Row, Col, Toast} from 'react-bootstrap';

const TeacherHome = (props) => {
  let [announcements, addAnnouncement] = useState(
    props.currentUser.announcements ? props.currentUser.announcements : []
  );
  
  
  useEffect(()=>{
    if (props.currentUser.announcements) {
      addAnnouncement([...props.currentUser.announcements.reverse()])
    }},[props.currentUser.announcements]);



  const submitForm = (e) => {
    e.preventDefault();

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        content: e.target[0].value,
        teacher_id: props.currentUser.id,
      }),
    };

    fetch("http://localhost:3000/announcements", configObj)
      .then((res) => res.json())
      .then((ann) => {
        addAnnouncement([ann,...announcements])
        });
    
    e.target.reset()
  };

  const deleteAnn = (id) => {

    fetch(`http://localhost:3000/announcements/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })

    let updatedAnn = announcements.filter(ann => ann.id !== id)
    addAnnouncement(updatedAnn)

  }

  return (
    <Container>
      <Row>
      <Col sm={4}>
      <div>{props.currentUser.first_name}'s Home Page</div>
      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      </Col>
      <Col sm={8}>
      <AnnouncementForm
        addAnnouncement={addAnnouncement}
        announcements={announcements}
        currentUser={props.currentUser}
        submitForm={submitForm}
      />
      <br />
      {props.currentUser.announcements ? (
        <div>
          <h2>My Announcements</h2>
          {
            // props.currentUser.announcements
            announcements.map((ann) => {
              return <Toast>
                <Toast.Header>

                  <img onClick={() => deleteAnn(ann.id)} style={{"pointer-events": "all"}} src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">{ann.created_at}</strong>
                  
                </Toast.Header>
                  <Toast.Body>{ann.content}</Toast.Body>
                <button onClick={() => deleteAnn(ann.id)}>Delete</button>
                </Toast>;
            })
          }
        </div>
      ) : null}
      <div></div>
      <ul></ul>
      <h2>My Students</h2>
      <ul>
        {props.currentUser.students
          ? props.currentUser.students.map((student) => (
              <li>
                <NavLink
                  to={{
                    pathname: "/student_info",
                    student: student,
                  }}
                >
                  {student.first_name + " " + student.last_name}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
      </Col>
      </Row>
    </Container>
  );
};

export default TeacherHome;
