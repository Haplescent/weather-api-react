import React from "react";
import logo from "../logo.svg";
import "../App.css";
import SearchAppBar from "./SearchAppBar";
import TemporaryDrawer from "./TemporaryDrawer";
import WeatherCard from "./WeatherCard";

export default class WebsiteClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handleChange function working");
    this.setState({
      textInput: event.target.value,
    });
  }

  render() {
    console.log(this.state.textInput);
    return (
      <div className="App">
        <SearchAppBar handleChange={this.handleChange} />
        <WeatherCard textInput={this.state.textInput} />
      </div>
    );
  }
}
