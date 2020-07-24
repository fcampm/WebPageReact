import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './components/Home';
import ToolbarWebPage from './components/Toolbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <ToolbarWebPage />
          <HomeComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
