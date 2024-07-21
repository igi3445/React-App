import React from 'react';
import './UserSelection.css';

function UserSelection() {
  const users = ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'];

  return (
    <div className="user-selection">
      <h2>Выбор пользователя</h2>
      <select>
        {users.map((user, index) => (
          <option key={index}>{user}</option>
        ))}
      </select>
    </div>
  );
}

export default UserSelection;
