import React from 'react';
import CharacterPicker from './CharacterPicker'

const SortResult = (props) => {
    return ( <div>
        You have been sorted into House {props.house}!
        <CharacterPicker  house={props.house} houseCharacters={props.houseCharacters} />
    </div> );
}
 
export default SortResult;