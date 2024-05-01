import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      description: '',
      dueDate: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, description, dueDate } = this.state;
    if (!taskName || !description || !dueDate) {
      this.setState({ error: 'All fields are required' });
      return;
    }
    this.props.addTask({ taskName, description, dueDate });
    this.setState({ taskName: '', description: '', dueDate: '', error: '' });
  };

  render() {
    return (
      <div>
        <h2>Add New Task</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Task Name:</label>
            <input
              type="text"
              name="taskName"
              value={this.state.taskName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
