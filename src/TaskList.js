
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.taskName}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
