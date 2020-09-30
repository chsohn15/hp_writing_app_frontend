import React from "react";
import Character from "./Character.js";
import {Col, Row, Container} from 'react-bootstrap';

const CharacterPicker = (props) => {
  if (props.houseCharacters) {
    return (
      <Container>
        <Row style={{"padding-top": "50px", "padding-bottom": "80px"}}>
        <h1 id="char-picker-title">Choose an Alter Ego from {props.house}!</h1>
          </Row>
          <Row>
            <br />
          </Row>
          <Row>
          {props.houseCharacters.map((character) => (
          <Col >
            <Character 
              currentUser={props.currentUser}
              routerProps={props.routerProps}
              character={character}
              key={character.id}
              setAlterEgo={props.setAlterEgo}
            />
        </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

export default CharacterPicker;
