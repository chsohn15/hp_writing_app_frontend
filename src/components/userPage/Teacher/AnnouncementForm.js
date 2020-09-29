import React from "react";
import { useState } from "react";
const AnnouncementForm = (props) => {
  return (
    <div>
      <h2>Make an Announcement to Your Students!</h2>
      <form onSubmit={(e) => props.submitForm(e)}>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AnnouncementForm;
