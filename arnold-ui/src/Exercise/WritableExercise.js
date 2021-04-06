import React from 'react';
import './Exercise.css'


const exercise = (props) => {
  const randReps = Math.floor(Math.random() * 20);
  const defaultName = "your favorite core move"

  const sideBySideDivStyle = {
    display: 'block'
  }

  const deleteButtonStyle = {
    margin: '8px'
  }

  return (
    <div className='Exercise'>
      <h3 onClick={props.click} > :flex: Let's hit {props.reps || randReps} reps of {props.name || defaultName}!</h3>
      <p> {props.children}</p>
      <div style={sideBySideDivStyle}>
        <p> Edit Exercise: </p>
        <input type="text" onChange={props.changed} value={props.name} className='ExerciseInput' />
      </div>
      <button
        style={deleteButtonStyle}
        onClick={props.delete}
        className='ExerciseButton'>Take a load off - delete me </button>
      <button
        onClick={props.changeReps}
        className='ExerciseButton'> Roll the dice - Change the Reps</button>
    </div>
  )
}


export default exercise