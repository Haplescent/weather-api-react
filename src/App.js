import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TemporaryDrawer from './components/TemporaryDrawer';
import WeatherCard from './components/CurrentWeather';
import SearchForm from './components/SearchForm'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      currentWeather: {},
      fiveDayForecast: {},
      searchHistory: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit button in App class component working")
    console.log(event.target.)
    let historyToPush = []
    historyToPush.push(event.target.value)
    this.setState({
      textInput: event.target.value,
      searchHistory: historyToPush
    })
  }

  render() {
    console.log(this.state.searchHistory)
    return (<div>
      <SearchForm handleClick={this.handleSubmit}/>
    </div>)
  }
}