import React from "react";

import WeatherCard from "./components/CurrentWeather";
import CurrentWeatherv2 from "./components/CurrentWeatherv2";
import FiveDayForecast from "./components/FiveDayForecast";
import PreviousSearchHistory from "./components/PreviousSearchHistory";
import SearchAppBar from "./components/SearchAppBar";
import SearchForm from "./components/SearchForm";
import TemporaryDrawer from "./components/TemporaryDrawer";
import logo from "./logo.svg";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    console.log("Mounting App.js");
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
    console.log(
      `Is ${this.state.textInput} to ${nextState.textInput} in shouldComponentUpdate Different?`
    );
    console.log(this.state.textInput !== nextState.textInput);
    // console.log(`Is ${this.state.currentWeather} to ${nextState.currentWeather} in shouldComponentUpdate Different`)
    // console.log(Object.keys(this.state.currentWeather).length != Object.keys(nextState.currentWeather).length);
    return this.state.textInput != nextState.textInput;
  }

  componentDidUpdate() {
    console.log(
      `componentDidUpdate now making API call with ${this.state.textInput}`
    );
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.textInput}&appid=34e8be8ab272c61ff78f3bb3d24efbe0`
    )
      .catch((error) => {
        this.setState({
          currentWeather: {},
          textInput: "",
        });
      })
      .then((response) => response.json())
      .then((apiCallOne) => {
        console.log(apiCallOne);
        let lon = apiCallOne.coord.lon;
        let lat = apiCallOne.coord.lat;
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=34e8be8ab272c61ff78f3bb3d24efbe0`
        )
          .then((response) => response.json())
          .then((apiCallTwo) => {
            console.log(apiCallTwo);
            this.setState({
              currentWeather: apiCallOne,
              fiveDayForecast: apiCallTwo.daily,
              textInput: "",
            });
          });
      })
      .catch((error) => {
        this.setState({
          currentWeather: {},
          textInput: "",
        });
      });
  }

  handleSubmit(textToHandle) {
    // event.preventDefault();
    console.log("handleSubmit button in App class component working");
    let historyToPush = this.state.searchHistory.slice();
    historyToPush.push(textToHandle);
    let uniq = [...new Set(historyToPush)];
    this.setState({
      textInput: textToHandle,
      searchHistory: uniq,
    });
  }

  render() {
    console.log("rendering App.js");
    // console.log(this.state.searchHistory);
    // console.log(this.state.currentWeather)
    return (
      <div>
        <SearchForm handleClick={this.handleSubmit} />
        <PreviousSearchHistory
          searchHistory={this.state.searchHistory}
          handleClick={this.handleSubmit}
        />
        <CurrentWeatherv2 currentWeatherObj={this.state.currentWeather} />
        <FiveDayForecast forecastArray={this.state.fiveDayForecast} />
      </div>
    );
  }
}
