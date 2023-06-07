import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <div>
      <h2 style={{color:"teal"}}>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" required />
        <button type="submit" style={{width:"10%"}}>ADD</button>
      </form>
    </div>
  );
};

export default TaskForm;
