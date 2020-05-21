import React from "react";

export default function FiveDayForecast(props) {
  let forecast = props.forecast;
  let html;
  // if (forecast.length === 0) {
  //   html = <h1>Five Day Forcast here</h1>;
  // } else {
  //   html = <h1>{forecastArray[0].clouds}</h1>;
  // }
  html = <div>
    <h1>Weather: {forecast.weather[0].description}</h1>
    <h1>Temperature: {forecast.temp.day}</h1>
    <h1>UVI: {forecast.uvi}</h1>
    <h1>Wind Speeds: {forecast.wind_speed}</h1>
    </div>;

  return html;
}
