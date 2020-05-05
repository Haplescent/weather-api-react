import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TemporaryDrawer from './components/TemporaryDrawer';


function App() {
  return (
    <div className="App">
      {SearchAppBar()}
      {TemporaryDrawer()}
    </div>
  );
}

export default App;
