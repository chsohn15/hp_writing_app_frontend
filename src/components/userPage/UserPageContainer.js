import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import TeacherForm from "./TeacherForm";
import TeacherHome from "./TeacherHome";
import { render } from "react-dom";

const UserPageContainer = (props) => {
  //let character = props.character
  const teacher = { ...props.currentUser.teacher };
  let id = localStorage.user_id;

  //props.renderUserPage(id)

  return props.currentUser.isStudent ? (
    <div>
      <div>{props.currentUser.first_name}'s Home Page</div>
      {!teacher === undefined ? (
        <div>My Teacher: {teacher.first_name + " " + teacher.last_name}</div>
      ) : (
        <div>
          {" "}
          Choose a teacher
          <TeacherForm teachers={props.teachers} />
        </div>
      )}

      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      <ActivityContainer assignments={props.assignments} />
    </div>
  ) : (
    <TeacherHome
      assignments={props.assignments}
      alterEgo={props.alterEgo}
      currentUser={props.currentUser}
    />
  );
};

export default UserPageContainer;
