import React, { Component } from 'react';
import './App.css';

// imports for the react tutorial
import Exercise from './Exercise/Exercise';

// imports for arnold-specific pages
import WorkoutWriter from './WorkoutWriter/WorkoutWriter';
import WritableExercise from './Exercise/WritableExercise';
import WorkoutWriterApp from './WorkoutWriterApp/WorkoutWriterApp'



class App extends Component {
  // stateful way 
  // this works because we extend Component -- hooks relate to this state concept for others
  state = {
    exercises: [
      { id: '1', name: "push ups" },
      { id: '11', name: "squats", reps: 24.8 },
      { id: '111',name: "mountain climbers" },
     
    ],
    showExercises: true
  }

  // handler suffix indicates 
  switchNameHandler = (event, index) => {
    const exerciseCopy = {...this.state.exercises[index]};
    exerciseCopy.name = event.target.value;

    const exercises = [...this.state.exercises]
    exercises[index] = exerciseCopy

    this.setState({exercises: exercises})
  }

  toggleExercisesHandler = () => {
    const doesShow = this.state.showExercises
    this.setState({ showExercises: !doesShow })
  }

  deleteExerciseHandler = (index) => {
    const exercises = [...this.state.exercises];
    exercises.splice(index, 1);
    this.setState({ exercises: exercises })
  }

  render() {

    let exercises = null;
    if (this.state.showExercises) {
      exercises = (
        <div>
          {this.state.exercises.map((ex, index) => {
            return <Exercise
              name={ex.name}
              reps={ex.reps}
              key={ex.id}
              click={() => this.deleteExerciseHandler(index)}
              changed={(event) => {this.switchNameHandler(event, index)}} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <WorkoutWriterApp/> 
      </div>
    );

    // add back in to resume work with udemy 
    // <h1> Get pumped with ARNOLD!</h1>
    // {exercises}
    // <button onClick={this.toggleExercisesHandler}>Show me what we're working with (or don't)</button>

    // button onClick - no parens. That will trigger the handler on initial load in the DOM, not each time the button is clicked
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Get pumped with ARNOLD 4 real!!'))
  }
}
export default App;


// const app = props => {
  // functional method

//   const [exercisesState, setExercisesState] = useState({
//     exercises: [
//       { name: "push ups" },
//       { name: "squats", reps: 24.8 },
//       { name: "mountain climbers" }
//     ]
//   })

//   const switchNameHandler = (newName) => {
//     console.log('You clicked the button!')
//     setExercisesState({
//       exercises: [
//         { name: newName },
//         { name: "squats", reps: 24.8 },
//         { name: "mountain climbers" }
//       ]
//     })
//   }

//   const nameChangedHandler = (event) => {
//     setExercisesState({
//       exercises: [
//         { name: "pushUps" },
//         { name: "squats", reps: 24.8 },
//         { name: event.target.value }
//       ]
//     })
//   }

//   const buttonStyle = {
//     color: 'lightgrey',
//     backgroundColor: 'navy',
//     font: 'inherit',
//     border: '1px solid purple',
//     padding: '4px'
//   }

//   return (
//     <div className="App">
//       <h2> Get pumped with ARNOLD!</h2>

//       <WorkoutWriterApp/>
//       { <div> 
//         <Exercise 
//           name={exercisesState.exercises[0].name} 
//           click = {() => {switchNameHandler("Diamond push ups")}}/>
//         <Exercise name={exercisesState.exercises[1].name} reps={exercisesState.exercises[1].reps} />
//         <Exercise name={exercisesState.exercises[2].name} changed={nameChangedHandler}> Last one fast one! Dig deep! </Exercise>
//       </div>}
//       <button 
//         style={buttonStyle}
//         onClick={toggleExercisesHandler}>Show me what we're working with (or don't)</button>
//     </div>
//   );

// }

// export default app;
