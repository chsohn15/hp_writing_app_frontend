import React from 'react';


const UserInfoCard = (props) => {
    const {character_id, first_name, last_name, username, house} = props.currentUser
    console.log(character_id)
    //FIX THIS BUG!!! Can't access nested json why!
    return ( <div>
        <div>User Info Card</div>
        {/* <img src={props.currentUser.character.image} alt="character"/> */}
        <div>{first_name + " " + last_name}</div>
        <div>Username: {username}</div>
        <div>House: {house}</div>
        {/* <div>Alter Ego: {props.alterEgo.name}</div> */}
        
    </div> );
}
 
export default UserInfoCard;