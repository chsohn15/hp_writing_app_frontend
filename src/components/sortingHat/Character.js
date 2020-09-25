import React from 'react';

const Character = (props) => {
    return ( <div onClick={null}>
         
         <img src={props.character.image} alt={props.character.name}/>
         <p>{props.character.name}</p>
         <p>Birth Year: {props.character.birthyear}</p>
         <p>Patronus: {props.character.patronus}</p>
    </div> );
}
 
export default Character;