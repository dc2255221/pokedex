import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layouts/NavBar.js';
import './App.css';
import Dashboard from './components/layouts/Dashboard.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
