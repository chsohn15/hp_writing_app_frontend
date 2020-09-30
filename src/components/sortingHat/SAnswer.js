import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

function SAnswer(props){
    return(<div onClick={(e)=>props.handleClick(e.target.dataset.id)}>
            {props.answer.image ? 
            <img id = "answer-image" src={props.answer.image} alt="image"/>
        :
        null}
        <div style={{cursor: "pointer"}} data-id={props.answer.house}>
            {props.answer.text}
        </div>
        <br/>
        </div>
    )
}
export default SAnswer