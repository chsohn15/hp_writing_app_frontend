import React from 'react'
import { Button } from 'semantic-ui-react'
//import Image from 'react-image-resizer';

const HouseResult = (props) => {
    
    let logoObj = {
        "Gryffindor": "https://vignette.wikia.nocookie.net/dumbledoresarmyroleplay/images/6/6b/Gryffindorcrest.png/revision/latest?cb=20130326163626",
        "Slytherin":"https://i.dlpng.com/static/png/6554833_preview.png",
        "HufflePuff": "https://www.pinclipart.com/picdir/middle/453-4537332_crest-banner-png-harry-potter-hufflepuff-crest-clipart.png",
        "Ravenclaw": "https://img.pngio.com/crest-png-for-free-download-on-harry-potter-house-crests-ravenclaw-crest-png-727_886.png"
    } 

    return (
        <div className="house-text">
            <img className="house-text" style={{width: "250px"}}src="https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5-200x0-c-default.png"/>
            <h1 className="house-text">You've been sorted into {props.house}!</h1>
            <img id="house-logo" src={logoObj[props.house]}/>
            <br/>
            <br/>

            <Button inverted color="black" className="house-text" onClick={()=>props.changeView("Character")}>Select an Alter Ego</Button>
        </div>
    )
}

export default HouseResult
