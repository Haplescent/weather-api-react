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
    // weatherIcon = weatherObj.weather[0].icon;
    html = (
      <SimplePaper
        elevation={3}
        children={
          <div>
            <h1>{weatherObj.name}</h1>
            <img
              src={`http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`}
            />
            <h1>{weatherObj.weather[0].description}</h1>
            <h1>{weatherObj.main.temp} °F</h1>
            <h1>Humidity: {weatherObj.main.humidity}</h1>
            <h1>Wind Speed: {weatherObj.wind.speed} mph</h1>
          </div>
        }
      />
    );
  }

  return html;
}
