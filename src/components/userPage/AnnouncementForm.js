import React from "react";

const AnnouncementForm = (props) => {
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
      .then((ann) => console.log(ann));

    //props.addAnnouncement([...props.announcements, e.target[0].value]);
  };

  return (
    <div>
      <h2>Make an Announcement to Your Students!</h2>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AnnouncementForm;
