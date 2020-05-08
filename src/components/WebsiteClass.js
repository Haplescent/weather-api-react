import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './SearchAppBar';
import TemporaryDrawer from './TemporaryDrawer';
import WeatherCard from './WeatherCard';

export default class SpacingGridClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        textInput = ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        textInput: event.target.value
    // console.log(event)
  })

  render() {
    return (
        <div className="App">
          <SearchAppBar handleChange={this.handleChange}/>
          <WeatherCard />
        </div>
      );
  }
}
