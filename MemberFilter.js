import React from 'react';

function MemberFilter() {
  const members = ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'];

  return (
    <div>
      <h2>Фильтр участников</h2>
      <select>
        {members.map((member, index) => (
          <option key={index}>{member}</option>
        ))}
      </select>
    </div>
  );
}

export default MemberFilter;
