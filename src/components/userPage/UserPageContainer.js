import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import { render } from "react-dom";

const UserPageContainer = (props) => {
    //let character = props.character
    const teacher = {...props.currentUser.teacher}
    let id = localStorage.user_id
    
    props.renderUserPage(id)

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
