import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import TStudentInfo from "./TStudentInfo";

const TeacherHome = (props) => {
  return (
    <div>
      <div>{props.currentUser.first_name}'s Home Page</div>
      This is a teacher home page
      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      <div>My Students</div>
      {props.currentUser.students
        ? props.currentUser.students.map((student) => (
            <NavLink
              to={{
                pathname: "/student_info",
                student: student,
              }}
            >
              {student.first_name + " " + student.last_name}
            </NavLink>
          ))
        : null}
    </div>
  );
};

export default TeacherHome;
