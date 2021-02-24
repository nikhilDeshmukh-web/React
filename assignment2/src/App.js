import React, {Component} from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

  state = {
    userinput : ''
  }
  
  userInputHandler = (e) => {
    this.setState({
      userinput : e.target.value
    })
    //console.log("Current State:", this.state.userinput);
  }

  removeCharHandler = (index) => {
    const text = this.state.userinput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userinput: updatedText})
  }

  render(){

      const charList = this.state.userinput.split('').map((ch, index) => {
      return <Char 
      char={ch} 
      key={index}
      clicked={() => this.removeCharHandler(index)}
      />
  });

    return(
      <div>
        <input type="text" onChange={this.userInputHandler}/>
        <p>{this.state.userinput}</p>
        <Validation inputLenght={this.state.userinput.length}/>
        {charList}
      </div>

    );

  }
}

export default App;
