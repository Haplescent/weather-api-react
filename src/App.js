import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import WeatherCard from "./components/CurrentWeather";
import SearchForm from "./components/SearchForm";
import CurrentWeatherv2 from "./components/CurrentWeatherv2";
import PreviousSearchHistory from "./components/PreviousSearchHistory";
import FiveDayForecast from "./components/FiveDayForecast";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      currentWeather: {},
      fiveDayForecast: [],
      searchHistory: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`comparing ${this.state.textInput} to ${nextState.textInput}`);
    console.log(Object.keys(this.state.currentWeather).length === 0);
    return (
      this.state.textInput != nextState.textInput ||
      this.state.currentWeather != nextState.currentWeather
    );
  }

  componentDidUpdate(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=34e8be8ab272c61ff78f3bb3d24efbe0')
  .then(response => response.json())
  .then(data => console.log(data));

  }

  handleSubmit(textToHandle) {
    // event.preventDefault();
    console.log("handleSubmit button in App class component working");
    let historyToPush = this.state.searchHistory.slice();
    historyToPush.push(textToHandle);
    this.setState({
      textInput: textToHandle,
      searchHistory: historyToPush,
    });
  }

  render() {
    console.log(this.state.searchHistory);
    return (
      <div>
        <SearchForm handleClick={this.handleSubmit} />
        <CurrentWeatherv2 currentWeatherObj={this.state.currentWeather} />
        <PreviousSearchHistory searchHistory={this.state.searchHistory} />
        <FiveDayForecast forecastArray={this.state.fiveDayForecast} />
      </div>
    );
  }
}
