import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import TeacherForm from "./TeacherForm";
import TeacherHome from "./Teacher/TeacherHome";
import { render } from "react-dom";
import StudentAnnouncements from './StudentAnnouncements'
import { Container, Row, Col, Toast} from 'react-bootstrap';

const UserPageContainer = (props) => {

  switch (true) {
    case props.currentUser && props.currentUser.is_student:
      let teacher = null;
      if (props.currentUser.teacher_id) {
        teacher = { ...props.currentUser.teacher };
      }

      return (
        <Container>
          <Row>
          <Col sm={3}>
          <div>{props.currentUser.first_name}'s Home Page</div>
          {teacher ? (
            <div>
              My Teacher: {teacher.first_name + " " + teacher.last_name}
            </div>
          ) : (
            <div>
              {" "}
              <TeacherForm
                setTeacher={props.setTeacher}
                teachers={props.teachers}
              />
            </div>
          )}

          <UserInfoCard
            alterEgo={props.alterEgo}
            currentUser={props.currentUser}
          />
          </Col>
          <Col sm={6}>
          {props.currentUser.teacher && props.currentUser.teacher.announcements ? 
          <StudentAnnouncements currentUser={props.currentUser}/>
          : 
          null
          }
          </Col>
          <Col sm={3}>
          <ActivityContainer
            currentUser={props.currentUser}
            assignments={props.assignments}
          />
          </Col>
          </Row>
        </Container>
      );
    case props.currentUser && !props.currentUser.is_student:
      return (
        <TeacherHome
          assignments={props.assignments}
          alterEgo={props.alterEgo}
          currentUser={props.currentUser}
          teachers={props.teachers}
          setCurrentUser={props.setCurrentUser}
        />
      );
    case !props.currentUser:
      props.history.push("/login");
    default:
      return null;
  }
};

export default UserPageContainer;
