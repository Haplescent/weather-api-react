import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar'

function App() {
  return (
    <div className="App">
      {SearchAppBar()}
    </div>
  );
}

export default App;
