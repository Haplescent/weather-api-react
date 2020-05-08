import SimplePaper from "./Paper";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default class SpacingGridClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        forecast: {},
        coord: props.coord,
        value: props.value
    };
  }

  componentDidMount() {
      console.log(this.state.coord[0])
      console.log(this.state.coord[1])
    fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coord[0]}&lon=${this.state.coord[0]}&%20exclude=hourly,daily&appid=344b01fedf4f336e1535a4118f1c46df&units=imperial`
      ).then(
        (res) => res.json()
        ).then((res) => {
        console.log(res)
        console.log(res.daily[this.state.value].dew_point)
        console.log(typeof(res.daily[this.state.value]))
        console.log(this.state.value)
        this.setState({
            forecast: res.daily[this.state.value],
            isLoaded: true,
        })
        });
  }

  render() {
    const { error, isLoaded, forecast, coord, value } = this.state;

    let getHTMLFromValuelet = function  (value) {
        return <p>{forecast[value].clouds}</p>
    }
    
    if (error) {
      let htmlReturn = <div>Error: {error.message}</div>;
      return <SimplePaper children={htmlReturn} />
    } else if (!isLoaded) {
      let htmlReturn = <div>Loading...</div>;
      return htmlReturn
    } else {
      let htmlReturn = <ul><li>{forecast.clouds}</li><li>{forecast.temp.day}</li><li>{forecast.uvi}</li><li>{forecast.weather[0].description}</li><li>{forecast.wind_speed}</li></ul>
      return htmlReturn
    }
  }
}
