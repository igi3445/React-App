import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import SprintPage from './SprintPage';
import AdminPanelPage from './AdminPanelPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/sprint" component={SprintPage} />
        <Route path="/admin" component={AdminPanelPage} />
      </Switch>
    </Router>
  );
}

export default App;
