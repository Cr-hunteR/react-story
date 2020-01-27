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
  stateChanger=(newName)=>{
    //this.setState.persons[0].name='jesse';
    this.setState({
      persons:[
        {name:newName, age:1},
        {name:'jane', age:15},
        {name:'roy', age:34}
      ]
    })
  }
  nameChanger=(event)=>{
    this.setState({
      persons:[
        {name: 'janet', age:1},
        {name: event.target.value, age:15},
        {name: 'roy', age:34}
      ]
    })
  }
  render(){
    /*React Inline CSS  */
    const reactInlineCss={
      backgroundColor:'#999',
      padding:'15px',
      border:'1px solid black',
      cursor:'pointer',
      borderRadius:'10px',
      margin:'20px'
    }
    return (
      <div className="App">
        <h1>hello world, This is React</h1>
        <Person name='kamal' 
        age='19'></Person>
        
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age} extra={()=>this.stateChanger('arrow function')}>
        This is some extra info about dean.</Person>{/* using arrow function */}

        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age} changed={this.nameChanger}></Person>{/*name changer using a text box */}

        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} extra={this.stateChanger.bind(this,'bicycle')}></Person>
        <button style={reactInlineCss} onClick={this.stateChanger.bind(this,'butn')}>Changer</button>
      </div>
    );
  }
  
}
export default App;
