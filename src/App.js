import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TemporaryDrawer from './components/TemporaryDrawer';
import WeatherCard from './components/WeatherCard';


function App() {
  return (
    <div className="App">
      {SearchAppBar()}
      <WeatherCard />
    </div>
  );
}

export default App;
