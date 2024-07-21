import React from 'react';
import './TaskList.css';

function TaskList() {
  const tasks = [
    { id: '1', title: 'Задача 1', completed: true },
    { id: '2', title: 'Задача 2', completed: false },
    { id: '3', title: 'Задача 3', completed: true },
  ];

  return (
    <div className="task-list">
      <h2>Список выполненных задач</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
