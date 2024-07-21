import React from 'react';

function KanbanBoard() {
  const tasks = [
    { id: '1', title: 'Задача 1', assignedTo: 'Пользователь 1', status: 'В процессе' },
    { id: '2', title: 'Задача 2', assignedTo: 'Пользователь 2', status: 'Завершено' },
    { id: '3', title: 'Задача 3', assignedTo: 'Пользователь 3', status: 'В ожидании' },
  ];

  return (
    <div>
      <h2>Доска канбан с активными задачами</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>Назначено: {task.assignedTo}</p>
          <p>Статус: {task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
