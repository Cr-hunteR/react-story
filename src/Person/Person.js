import React from 'react';

const person=(props)=>{

return (
<div>
    <p onClick={props.extra}>I am {props.name}. My age is {props.age}</p>
    <p>{props.children}</p>
</div>
)
}

export default person;
