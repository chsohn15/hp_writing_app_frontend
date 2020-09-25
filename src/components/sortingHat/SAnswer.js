import React from 'react';

function SAnswer(props){
    return(
        <div>
        <div data-id={props.answer.house} onClick={(e)=>props.handleClick(e.target.dataset.id)}>
            {props.answer.text}
        </div>
        <br/>
        </div>
    )
}
export default SAnswer