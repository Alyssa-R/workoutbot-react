import React from 'react';
import './WorkoutWriter.css'

const workoutWriter = (props) => {
  return (
    <div className='WorkoutWriter'>
      <h1> Get Pumped! </h1>
      <h3> Title: ToDo ;P </h3>
      <p> {props.children}</p>
      <button className='WorkoutWriterButton'
        onClick={props.addExerciseHandler}
      > Add another! </button>
    </div>
  )
}

// expect to be passed writableWorkouts
export default workoutWriter