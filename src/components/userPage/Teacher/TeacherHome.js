import React from "react";
import UserInfoCard from "../UserInfoCard";
import ActivityContainer from "../ActivityContainer.js";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import TStudentInfo from "./TStudentInfo";
import AnnouncementForm from "./AnnouncementForm.js";
import { useState, useEffect } from "react";
import { Container, Row, Col, Toast} from 'react-bootstrap';
import { List, Image } from 'semantic-ui-react'

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

  const formatDate = (string) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  return (
    <Container>
      <Row>
      <Col sm={3}>
      <div>{props.currentUser.first_name}'s Home Page</div>
      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      </Col>
      <Col sm={6}>
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
              return <Toast style={{"maxWidth": "500px"}}>
                <Toast.Header>

                  
                  <strong className="mr-auto">{formatDate(ann.created_at)}</strong>
                  
                </Toast.Header>
                  <Toast.Body>{ann.content}</Toast.Body>
                <button onClick={() => deleteAnn(ann.id)}>Delete</button>
                </Toast>;
            })
          }
        </div>
      ) : null}
      </Col>
      <Col sm={3}>
      <h2>My Students</h2>
      <List selection verticalAlign='middle'>
        {props.currentUser.students
          ? props.currentUser.students.map((student) => (
            <List.Item>
              {student.character?
               <Image avatar src={student.character.image} />
               : null}
               <List.Content>
                <NavLink
                  to={{
                    pathname: "/student_info",
                    student: student,
                  }}
                >
                   <List.Header>
                  {student.first_name + " " + student.last_name}
                  </List.Header>
                </NavLink>
                </List.Content>
                </List.Item>
            ))
          : null}
      </List>
      </Col>
      </Row>
    </Container>
  );
};

export default TeacherHome;


{/* <List>
    <List.Item>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item> */}