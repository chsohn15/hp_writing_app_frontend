import React from "react";
import { NavLink } from "react-router-dom";

const Character = (props) => {
  const goToUserPage = () => {
    props.routerProps.history.push("/user_home");
  };

  return (
    <div>
      <img src={props.character.image} alt={props.character.name} />
      <p>{props.character.name}</p>
      <p>Birth Year: {props.character.birthyear}</p>
      <p>Patronus: {props.character.patronus}</p>

      <NavLink
        onClick={() => {
          props.setAlterEgo(props.character);
        }}
        to={{ pathname: "/user_home", character: props.character }}
      >
        Choose This Character
      </NavLink>
      {/* {props.currentUser.isStudent ? (
        <NavLink
          onClick={() => {
            props.setAlterEgo(props.character);
          }}
          to={{ pathname: "/user_home", character: props.character }}
        >
          Choose This Character
        </NavLink>
      ) : (
        <NavLink
          onClick={() => {
            props.setAlterEgo(props.character);
          }}
          to={{ pathname: "/teacher_home", character: props.character }}
        >
          Choose This Character
        </NavLink>
      )} */}
    </div>
  );
};

export default Character;
