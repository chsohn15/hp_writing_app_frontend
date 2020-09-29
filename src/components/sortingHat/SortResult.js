import React, {useState} from "react";
import CharacterPicker from "./CharacterPicker";
import HouseResult from './HouseResult'

const SortResult = (props) => {
  let [viewing, changeView] = useState("House")
  
  return (
    <div>
      {viewing === "House" ?
      <HouseResult house={props.house} changeView={changeView}/>
      :
      <CharacterPicker
        house={props.house}
        houseCharacters={props.houseCharacters}
        setAlterEgo={props.setAlterEgo}
        routerProps={props.routerProps}
      />
  }
    </div>
  );
};

export default SortResult;
