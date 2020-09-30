import React from "react";
import { NavLink } from "react-router-dom";
import {CardDeck, Card} from 'react-bootstrap';

const Character = (props) => {
  // const goToUserPage = () => {
  //   props.routerProps.history.push("/user_home");
  // };

  return (
    <CardDeck style={{color:"black"}}>
      <Card>
        <Card.Img variant="top" src={props.character.image} alt={props.character.name} />
          <Card.Body>
            <Card.Title>{props.character.name}</Card.Title>
            <Card.Text>
              <p>Birth Year: {props.character.birthyear}</p>
              <p>Patronus: {props.character.patronus}</p>
            <NavLink
              onClick={() => {
              props.setAlterEgo(props.character);
              }}
              to={{ pathname: "/user_home" }}
              >
              Choose This Character
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default Character;

//character: props.character
