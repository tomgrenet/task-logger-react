import React, {Component} from 'react';
import './App.css';
import Task from './Input/Task'
import Output from './Output/Output'

//1. Capture task data
//2. Add new task to array of already existing task
//3. Render task


class App extends Component {
  
  state = {
    tasks: [
      {description: 'Eating salad', category: 'Eat', date: '17/07/2020', time:'13:00'},
      {description: 'Coding', category: 'Work', date: '17/07/2020', time:'11:00'}
    ]
  }

  //Update property on change
  changeHandler = (event) => {
    const value = event.target.value
     return(
      //Allows for updating each specific property on an onChange event
      this.setState({...this.state, [event.target.id]:value})
    )
  }

  addTask = (event) => {
    const newTask = [{description: this.state.description, category: this.state.category, date: this.state.date, time: this.state.time}]
    return(
      this.setState({
        // Does not work without the spread operator applied on newTask; not sure why
        tasks: [...this.state.tasks, ...newTask]
      })
    ) 
  }

  //testestest

  render(){
    return(
      <div>
        <h1>Welcome to the Task Logger</h1>
        <h2>ADD A TASK</h2>
        <Task 
          changed={this.changeHandler}
          description = {this.state.description}
          category = {this.state.category}
          date = {this.state.date}
          time = {this.state.time}
          clicked = {this.addTask}
          />
        <br/>
        <h2>OUTPUT</h2>
        <Output tasks = {this.state.tasks}/>
      </div>
    )
  }

}

export default App;
