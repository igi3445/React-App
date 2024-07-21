import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import Chart from './Chart';
import CreateSprintForm from './CreateSprintForm';
import AddMemberForm from './AddMemberForm';

function AdminPanelPage() {
  return (
    <div>
      <h1>Панель администратора</h1>
      <CreateTaskForm />
      <Chart />
      <CreateSprintForm />
      <AddMemberForm />
    </div>
  );
}

export default AdminPanelPage;
