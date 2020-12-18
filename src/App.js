import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from './../components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
      <main className="App-main">
          Main content container
      </main>
      <footer className="App-footer">
          Footer container
      </footer>
    </div>
  );
}

export default App;
