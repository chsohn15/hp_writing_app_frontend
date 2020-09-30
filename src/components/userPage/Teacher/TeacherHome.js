import React from "react";
import UserInfoCard from "../UserInfoCard";
import ActivityContainer from "../ActivityContainer.js";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import TStudentInfo from "./TStudentInfo";
import AnnouncementForm from "./AnnouncementForm.js";
import { useState, useEffect } from "react";
import { Container, Row, Col, Toast, Card} from 'react-bootstrap';
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
    <div id="teacher-home-container">
    <Container >
      <Row>
      <Col sm={3}>
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
          <h2 style={{color:"white"}}>My Announcements</h2>
          {
            // props.currentUser.announcements
            announcements.map((ann) => {
              return <div><Toast style={{"maxWidth": "700px", opacity: "1.0"}}>
                <Toast.Body style={{"font-size": "15px"}}>
                  <strong className="mr-auto">{formatDate(ann.created_at)}</strong>
                  
                <i class="fa fa-close float-right" onClick={() => deleteAnn(ann.id)} style={{cursor:"pointer"}}/>
                </Toast.Body>
                  <Toast.Body style={{"font-size": "15px"}}>{ann.content}</Toast.Body>
                </Toast>
                </div>;
            })
          }
        </div>
      ) : null}
      </Col>
      <Col sm={3}>
      <h2 style={{color:"white"}}>My Students</h2>
      <Card style={{opacity:"0.95"}}>
      <List animated selection verticalAlign='middle' >
        {props.currentUser.students
          ? props.currentUser.students.map((student) => (
            <List.Item>
              {student.character?
               <Image avatar size="mini" src={student.character.image} />
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
      </Card>
      </Col>
      </Row>
    </Container>
    </div>
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