import React from 'react'



const HouseResult = (props) => {
    let logoObj = {} 

    return (
        <div>
            <h1>You've been sorted into {props.house}!</h1>
            <button onClick={()=>props.changeView("Character")}>Select an Alter Ego</button>
        </div>
    )
}

export default HouseResult
