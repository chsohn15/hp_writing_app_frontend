import React from 'react';
import Character from './Character.js'

const CharacterPicker = (props) => {
    
    if (props.houseCharacters){
    return ( 
    <div>
        <h2>Choose an Alter Ego from {props.house}!</h2>
        <div>{props.houseCharacters.map(character=> <Character character={character} key={character.id}/>)}
        Character Picker Container</div>
    </div> );
    }else{
        return null
    }
}
 
export default CharacterPicker;