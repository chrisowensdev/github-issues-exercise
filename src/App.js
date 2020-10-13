import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import IssueList from './components/IssueList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <IssueList />
      </Router>
    </div>
  );
}

export default App;
