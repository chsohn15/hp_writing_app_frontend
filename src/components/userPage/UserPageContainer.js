import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import { render } from "react-dom";

const UserPageContainer = (props) => {
    const teacher = {...props.currentUser.teacher}
    return (
      <div>
        <div>{props.currentUser.first_name}'s Home Page</div>
        <div>My Teacher: {teacher.first_name + " " + teacher.last_name}</div>
        <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
        <ActivityContainer assignments={props.assignments}/>
      </div>
    );
}

export default UserPageContainer;
