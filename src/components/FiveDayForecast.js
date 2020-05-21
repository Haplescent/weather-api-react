import React from "react";

export default function FiveDayForecast(props) {
  let forecast = props.forecast;
  let html;
  // if (forecast.length === 0) {
  //   html = <h1>Five Day Forcast here</h1>;
  // } else {
  //   html = <h1>{forecastArray[0].clouds}</h1>;
  // }
  html = <h1>{forecast.clouds}</h1>;

  return html;
}
