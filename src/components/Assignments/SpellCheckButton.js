import React from 'react'
import {useState} from 'react'


const SpellCheckButton = (props) => {

return(
  <div>
    <button onClick={props.checkGrammar(props.text)}>Ask a Prefect to Check Your Grammar!</button>
      
      {props.errors.length > 1? 
      props.errors.map(error => <div>{error}</div>)
      :
      (<div>Your Writing Looks Good So Far!</div>)
      }
      
    </div>
    )}

export default SpellCheckButton