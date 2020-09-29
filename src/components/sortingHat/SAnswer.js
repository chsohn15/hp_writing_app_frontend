import React from 'react';

function SAnswer(props){
    return(
        <div>
            {props.answer.image ? 
            <img src={props.answer.image} alt="image"/>
        :
        null}
        <div data-id={props.answer.house} onClick={(e)=>props.handleClick(e.target.dataset.id)}>
            {props.answer.text}
        </div>
        <br/>
        </div>
    )
}
export default SAnswer