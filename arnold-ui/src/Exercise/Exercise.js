import React from 'react';
import './Exercise.css'

// analogous to Person in lecure 32
const exercise = (props) => {
  const randReps = Math.floor(Math.random() * 25);
  const defaultName = "your favorite core move"
  
  return (
    <div className='Exercise'>
      <p onClick={props.click}>I'm an Exercise :flex: Let's hit {props.reps || randReps} reps of {props.name || defaultName}!</p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )}

export default exercise