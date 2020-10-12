import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import components
import IssueList from './components/IssueList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
      <IssueList />
      </Route>
      </Router>  
    </div>
  );
}

export default App;
