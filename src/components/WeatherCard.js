import SimplePaper from './Paper';
import React from 'react';
import SpacingGrid from './SpacingGrid';

export default class WeatherCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=344b01fedf4f336e1535a4118f1c46df")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: [result.name, result.weather[0].main, result.main.temp, result.main.humidity, result.wind.speed] 
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        let htmlReturn = <div>Error: {error.message}</div>;
        return <SimplePaper children = {htmlReturn} />
      } else if (!isLoaded) {
        let htmlReturn = <div>Loading...</div>;
        return <SimplePaper children = {htmlReturn} />
      } else {
        let htmlReturn = <ul>{items.map(item => (<li key={item.name}>{item}</li>))}</ul>
        return (
        <div>
        <SimplePaper children = {htmlReturn} />
        <SpacingGrid/>
        </div>
        )
      }
    }
  }