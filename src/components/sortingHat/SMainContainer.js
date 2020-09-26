import React from 'react';
import SQuestionContainer from './SQuestionContainer';
import SortResult from './SortResult.js'

class SMainContainer extends React.Component{
    state={
        onQuiz: true,
        houseCharacters: null
    }

    finishQuiz=(house)=>{
        if (house === "g"){
            house="Gryffindor"
        } else if(house === "r"){
            house="Ravenclaw"
        }else if(house === "h"){
            house="Hufflepuff"
        }else if(house === "s"){
            house="Slytherin"
        }

        
        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                house: house
            })
        }

        // Update house in database
        fetch(`http://localhost:3000/users/${this.props.currentUserId}`, configObj)
        .then(res => res.json())
        .then(user => {
            this.setState({
                onQuiz:false,
            })
            // Change state of current user house in App.js
            this.props.setUserHouse(house)
        })
        
        let houseLower = house.toLowerCase()

        let url = `http://localhost:3000/${houseLower}_students`
        
        // Fetch characters from that house
        fetch(url)
        .then(res=>res.json())
        .then(characters => {
            this.setState({
                houseCharacters:characters
            })
            
        })

    }

    render(){
    return (
        <div>
            <h1>Sorting Hat - maybe make into header component</h1>
            {this.state.onQuiz?<SQuestionContainer finishQuiz={this.finishQuiz}/>:<SortResult houseCharacters={this.state.houseCharacters} house={this.props.userHouse} setAlterEgo={this.props.setAlterEgo}/>}
        </div>
      );
    }
}
export default SMainContainer;