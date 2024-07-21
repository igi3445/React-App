import React from 'react';
import KanbanBoard from './KanbanBoard';
import MemberFilter from './MemberFilter';

function SprintPage() {
  return (
    <div>
      <h1>Активный спринт</h1>
      <MemberFilter />
      <KanbanBoard />
    </div>
  );
}

export default SprintPage;
