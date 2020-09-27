import React from 'react';


const UserInfoCard = (props) => {
    const {character_id, first_name, last_name, username, house} = props.currentUser

    const character = {...props.currentUser.character}

    return ( <div>
        <div>User Info Card</div>
        <img src={character.image} alt="character"/>
        <div>{first_name + " " + last_name}</div>
        <div>Username: {username}</div>
        <div>House: {house}</div>
        <div>Alter Ego: {character.name}</div>
        
    </div> );
}
 
export default UserInfoCard;