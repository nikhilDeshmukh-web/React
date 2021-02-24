import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  
  state = {
    username: "SuperNick"
  }

  nameChangeHandler = (e) => {
    this.setState(
      {username: e.target.value}
    )
    console.log('Event fired');
  }

  render(){

    return(
      <div>
        <UserInput 
          changed={this.nameChangeHandler} 
          currentName={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username="Prabin"/>
      </div>

    );

  }
}

export default App;
