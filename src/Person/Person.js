import React from 'react';
import './Person.css'

const person=(props)=>{

return (
<div className='Person'>
    <p onClick={props.extra}>I am {props.name}. My age is {props.age}</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}></input>
</div>
)
}

export default person;
