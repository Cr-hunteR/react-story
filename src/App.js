import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
  state={
    persons:[
      {name:'janet', age:23},
      {name:'jane', age:15},
      {name:'roy', age:34}
    ]
  }
  stateChanger=()=>{
    //this.setState.persons[0].name='jesse';
    this.setState({
      persons:[
        {name:'jensen', age:18},
        {name:'jane', age:15},
        {name:'roy', age:34}
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <h1>hello world, This is React</h1>
        <Person name='kamal' age='19'></Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>This is some extra info about dean.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <button onClick={this.stateChanger}>Changer</button>
      </div>
    );
  }
  
}
export default App;
