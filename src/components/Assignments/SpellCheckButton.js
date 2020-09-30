import React from 'react'
import {useState} from 'react'


const SpellCheckButton = (props) => {

let text = "dont hi am here"

const [errors, addError] = useState([])

const checkGrammar = () => {
  for (var x = 0; x < text.length; x++)
  {
    let c = text.charAt(x);
    let d = text.charAt(x+1)
    let e = text.charAt(x+2)
    let f = text.charAt(x+3)

    if (c === " " && d === "i" && e===" "){
      console.log("please capitalize your I")
    }
    if (c === "d" && d === "o" &&e==="n" && f ==="t"){
      console.log("Please add an apostrophe to 'don't'")
    }
}
}

return(
    <button>Ask a Prefect to Check Your Grammar!</button>
)}

export default SpellCheckButton