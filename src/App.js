import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
