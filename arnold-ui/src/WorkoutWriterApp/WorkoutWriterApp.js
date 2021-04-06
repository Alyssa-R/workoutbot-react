import React, { useState, Component } from 'react';
// import './WorkoutWriter.css'

import WritableExercise from '../Exercise/WritableExercise'
import Exercise from '../Exercise/Exercise'
import WorkoutWriter from '../WorkoutWriter/WorkoutWriter'
import { randomName, randomReps } from '../Utils/Utils'

class workoutWriterApp extends Component {


  state = {
    exercises: [
      { name: "push ups", reps: 10 },
      { name: "mountain climbers", reps: 20 },
    ]
  }

  switchNameHandler = (event, index) => {
    const exerciseCopy = { ...this.state.exercises[index] };
    exerciseCopy.name = event.target.value;

    const exercises = [...this.state.exercises]
    exercises[index] = exerciseCopy

    this.setState({ exercises: exercises })
  }

  addExerciseHandler = () => {
    const newExercise = { name: randomName(), reps: randomReps() }
    const newExercisesState = [...this.state.exercises, newExercise]
    this.setState({ exercises: newExercisesState })
  }

  deleteExerciseHandler = (index) => {
    const exercises = [...this.state.exercises];
    exercises.splice(index, 1);
    this.setState({ exercises: exercises })
  }

  changeReps = (index) => {
    const newReps = randomReps();
    const editedReps = { ...this.state.exercises[index] };
    editedReps.reps = newReps

    const newExercises = [...this.state.exercises]
    newExercises[index] = editedReps

    this.setState({ exercises: newExercises })
  }



  render() {

    let exercises = (
      <div>
        {this.state.exercises.map((ex, index) => {
          return <WritableExercise
            name={ex.name}
            reps={ex.reps}
            key={ex.id}
            delete={() => this.deleteExerciseHandler(index)}
            changed={(event) => { this.switchNameHandler(event, index) }}
            changeReps={() => { this.changeReps(index) }} />
        })}
      </div>
    )

    return (
      <WorkoutWriter
        addExerciseHandler={this.addExerciseHandler}>
        {exercises}
      </WorkoutWriter>
    )

  }


}

// expect to be passed writableWorkouts
export default workoutWriterApp

const oldObject = {oldProp: 'who are you?'}
const newObject = {...oldObject, newProp: 'I am you, but stronger'}


const makeArray = (...nums) => {
  return nums
}
// > makeArray (3,4,5) => [3,4,5]