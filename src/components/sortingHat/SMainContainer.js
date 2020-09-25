import React from 'react';
import SQuestionContainer from './SQuestionContainer';
import SortResult from './SortResult.js'

class SMainContainer extends React.Component{
    state={
        onQuiz: true,

    }

    finishQuiz=()=>{
        this.setState({
            onQuiz:false
        })
    }

    render(){
    return (
        <div>
            <h1>Sorting Hat - maybe make into header component</h1>
            {this.state.onQuiz?<SQuestionContainer finishQuiz={this.finishQuiz}/>:<SortResult/>}
        </div>
      );
    }
}
export default SMainContainer;