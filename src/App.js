import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <div>
          <Route path="/" exact>
          </Route>
      </div>
    </Router>
    </div>
  );
}

export default App;
