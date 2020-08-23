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
      {description: 'Eating salad', category: 'Eat', subcat: '--', date: '17/07/2020', time:'13:00'},
      {description: 'Coding', category: 'Work', subcat: 'Coding', date: '17/07/2020', time:'11:00'},
      {description: 'Scheduling Life Coach', category: 'Work', subcat: 'Coaching', date: '17/07/2020', time:'11:00'}
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

  editEntry = () => {
    //Need to select row corresponding to edit button
    //Update state
    //return ()
  }

  deleteEntry = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    return this.setState({tasks: updatedTasks})
  }

 //This does NOT work - I DO NOT UNDERSTAND WHY NOT
  // deleteEntry = (index) => {
  //   const updatedTasks = [...this.state.tasks];
  //   const reducedTasks = updatedTasks.splice(index, 1);
  //   return this.setState({tasks: reducedTasks})
  // }

  render(){
    return(
      <div>
        <h1>Welcome to the Task Logger</h1>
        <table className="table">
          <thead className="header">
              <tr>
                  <td>Description</td>
                  <td>Category</td>
                  <td>Sub-category</td>
                  <td>Date</td>
                  <td>Time</td>
              </tr>
          </thead>
          <tbody>
            <Task 
              changed={this.changeHandler}
              description = {this.state.description}
              category = {this.state.category}
              date = {this.state.date}
              time = {this.state.time}
              clicked = {this.addTask}
              />
            <Output 
              tasks = {this.state.tasks}
              edit = {this.editEntry}
              delete = {this.deleteEntry}/>
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;
