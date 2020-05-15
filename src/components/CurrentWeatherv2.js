import React from "react";

export default function CurrentWeatherv2(props) {
  let weather = props.currentWeatherObj;
  let html;
  //   console.log(weather);
  //   console.log(weather === undefined);
  if (Object.keys(weather).length === 0) {
    html = <h1>Current Weather conditions here</h1>;
  }

  return html;
}
