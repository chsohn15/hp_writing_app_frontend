import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import { render } from "react-dom";

const TeacherHome = (props) => {
  //let character = props.character

  let id = localStorage.user_id;
  id = parseInt(id);

  let teacher = props.teachers.find((teacher) => teacher.id === id);

  let newTeacher = { ...teacher };
  let students = newTeacher.teachers_students;
  return (
    <div>
      <div>{props.currentUser.first_name}'s Home Page</div>
      This is a teacher home page
      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      <div>My Students</div>
      {students
        ? students.map((student) => (
            <div>{student.first_name + " " + student.last_name}</div>
          ))
        : null}
    </div>
  );
};

export default TeacherHome;
