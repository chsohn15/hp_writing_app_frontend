import React from "react";
import Character from "./Character.js";
import {Col, Row, Container} from 'react-bootstrap';

const CharacterPicker = (props) => {
  if (props.houseCharacters) {
    return (
      <Container>
        <Row>
          
        <h2>Choose an Alter Ego from {props.house}!</h2>
        <Col>
          {props.houseCharacters.map((character) => (
            <Character
              currentUser={props.currentUser}
              routerProps={props.routerProps}
              character={character}
              key={character.id}
              setAlterEgo={props.setAlterEgo}
            />
          ))}
          Character Picker Container
        </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

export default CharacterPicker;
