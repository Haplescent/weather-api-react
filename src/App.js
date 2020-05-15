import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import WeatherCard from "./components/CurrentWeather";
import SearchForm from "./components/SearchForm";
import CurrentWeatherv2 from "./components/CurrentWeatherv2";
import PreviousSearchHistory from "./components/PreviousSearchHistory";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      currentWeather: undefined,
      fiveDayForecast: [],
      searchHistory: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(nextState) {
    console.log(`comparing ${this.state.textInput} to ${nextState.textInput}`);
    return (
      this.state.textInput != nextState.textInput ||
      this.state.textInput != nextState.currentWeather
    );
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
      </div>
    );
  }
}
