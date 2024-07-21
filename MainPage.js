import React from 'react';
import TaskList from './TaskList';
import SprintInfo from './SprintInfo';
import UserSelection from './UserSelection';
import TeamStatistics from './TeamStatistics';
import './MainPage.css';

function MainPage() {
  return (
    <div className="container">
      <h1>Главная (Рабочий стол)</h1>
      <div className="task-list">
        <TaskList />
      </div>
      <div className="sprint-info">
        <SprintInfo />
      </div>
      <div className="user-selection">
        <UserSelection />
      </div>
      <div className="team-statistics">
        <TeamStatistics />
      </div>
    </div>
  );
}

export default MainPage;
