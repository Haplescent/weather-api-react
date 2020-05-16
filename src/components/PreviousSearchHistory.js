import React from "react";

import TemporaryDrawer from "./TemporaryDrawer.js";

export default class PreviousSearchHistory extends React.Component {
  constructor(props) {
    console.log("Mounting PreviousSearchHistory");
    super(props);
    this.state = {
      textInput: "",
      currentWeather: {},
      fiveDayForecast: [],
      searchHistory: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
    let eventObject = event.target.getAttribute("value");
    console.log("handleSubmit is working");
    console.log(eventObject);
    this.props.handleClick(eventObject);
  }

  render() {
    let html = <div></div>;
    if (this.props.searchHistory.length > 0) {
      let array = this.props.searchHistory.map((text) => (
        <button onClick={this.handleSubmit} value={text}>
          {text}
        </button>
      ));
      console.log(array);
      return array;
    } else {
      return <h1>{this.props.searchHistory}</h1>;
    }
  }
}
