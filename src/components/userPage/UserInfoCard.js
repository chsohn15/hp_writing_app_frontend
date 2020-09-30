import React from 'react';
import { Card } from 'react-bootstrap';

const UserInfoCard = (props) => {
    const {first_name, last_name, username, house} = props.currentUser

    const character = {...props.currentUser.character}

    return ( <Card style={{opacity:"0.95"}}>

        <Card.Img src={character.image} alt="character"/>
        <Card.Body>
        <Card.Title style={{fontSize: "30px"}}>{first_name + " " + last_name}</Card.Title>
        <Card.Text style={{fontSize: "15px"}}>
        <div>Username: {username}</div>
        <div>House: {house}</div>
        <div>Alter Ego: {character.name}</div>
        </Card.Text>
        </Card.Body>
    </Card> );
}
 
export default UserInfoCard;