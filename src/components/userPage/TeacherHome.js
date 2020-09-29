import React from "react";
import UserInfoCard from "./UserInfoCard";
import ActivityContainer from "./ActivityContainer.js";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import TStudentInfo from "./TStudentInfo";
import AnnouncementForm from "./AnnouncementForm.js";
import { useState, useEffect } from "react";

const TeacherHome = (props) => {
  let [announcements, addAnnouncement] = useState(
    props.currentUser.announcements ? props.currentUser.announcements : []
  );
  
  
  useEffect(()=>{
    if (props.currentUser.announcements) {
      addAnnouncement([...props.currentUser.announcements])
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
        addAnnouncement([...announcements, ann])
        });

    // return props.announcements
    //   ? props.addAnnouncement([...props.announcements, e.target[0].value])
    //   : null;
  };

  return (
    <div>
      <div>{props.currentUser.first_name}'s Home Page</div>
      This is a teacher home page
      <UserInfoCard alterEgo={props.alterEgo} currentUser={props.currentUser} />
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
              return <div>{ann.content}</div>;
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
    </div>
  );
};

export default TeacherHome;
