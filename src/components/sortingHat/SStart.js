import React from 'react'
import { Button} from 'react-bootstrap';

function SStart(props){

    const directToSortingHat =() => {
        props.history.push("/sorting_hat")
      }
    return(
    <div className="sstart">
        <h1 style={{"padding-top":"370px"}}>Welcome to Hogwarts, {props.currentUser.first_name}! It's time for the Sorting Hat!</h1>
        <Button variant="light" onClick={directToSortingHat} style={{"margin-top":"7px"}}>Discover Your House</Button>
    </div>
    )
}
export default SStart