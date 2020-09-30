import React from 'react';
import { Card } from 'react-bootstrap';

const UserInfoCard = (props) => {
    const {character_id, first_name, last_name, username, house} = props.currentUser

    const character = {...props.currentUser.character}

    return ( <Card>

        <Card.Img src={character.image} alt="character"/>
        <Card.Body>
        <Card.Title>{first_name + " " + last_name}</Card.Title>
        <Card.Text>
        <div>Username: {username}</div>
        <div>House: {house}</div>
        <div>Alter Ego: {character.name}</div>
        </Card.Text>
        </Card.Body>
    </Card> );
}
 
export default UserInfoCard;