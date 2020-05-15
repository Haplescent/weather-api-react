import React from "react";

export default function FiveDayForecast(props) {
  let forecastArray = props.forecastArray;
  let html;
  //   console.log(weather);
  //   console.log(weather === undefined);
  if (forecastArray.length === 0) {
    html = <h1>Five Day Forcast here</h1>;
  } else {
    html = <h1>{forecastArray[0].clouds}</h1>
  }

  return html;
}
