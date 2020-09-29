import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import TeacherForm from "./TeacherForm";
import TeacherHome from "./TeacherHome";
import { render } from "react-dom";

const UserPageContainer = (props) => {
  if (!props.currentUser) 
    props.history.push("/login") 


  let teacher = null
  if (props.currentUser && props.currentUser.teacher_id){
    teacher =  { ...props.currentUser.teacher };
  }
  let id = localStorage.user_id;

  return props.currentUser && props.currentUser.is_student ? (
    <div>
      <div>{props.currentUser.first_name}'s Home Page</div>
      {teacher ? (
        <div>My Teacher: {teacher.first_name + " " + teacher.last_name}</div>
      ) : (
        <div>
          {" "}
          <TeacherForm
            setTeacher={props.setTeacher}
            teachers={props.teachers}
          />
        </div>
      )}

      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
      <ActivityContainer currentUser={props.currentUser} assignments={props.assignments} />
    </div>
  ) : (
    <TeacherHome
      assignments={props.assignments}
      alterEgo={props.alterEgo}
      currentUser={props.currentUser}
      teachers={props.teachers}

    />
  );
};

export default UserPageContainer;
