import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const TeacherForm = (props) => {
  return (
    <div>
      <select>
        {props.teachers.map((teacher) => (
          <option id={teacher.id} value={teacher.full_name}>
            {teacher.full_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeacherForm;
