import React from "react";
import SimplePaper from "./Paper";

export default function CurrentWeatherv2(props) {
  let weatherObj = props.currentWeatherObj;
  let html;
  //   console.log(weather);
  //   console.log(weather === undefined);
  if (Object.keys(weatherObj).length === 0) {
    html = <h1>Current Weather conditions here</h1>;
  } else {
    console.log(weatherObj.coord.lon);
    html = (
      <SimplePaper
        elevation={3}
        children={
          <div>
            <h1>
              City: {weatherObj.name} lon {weatherObj.coord.lon} lat{" "}
              {weatherObj.coord.lat}
            </h1>
            <h1>Weather: {weatherObj.weather[0].description}</h1>
            <h1>Temperature: {weatherObj.main.temp}</h1>
            <h1>Humidity: {weatherObj.main.humidity}</h1>
            <h1>Wind Speed: {weatherObj.wind.speed}</h1>
          </div>
        }
      />
    );
  }

  return html;
}
