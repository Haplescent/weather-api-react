import React from "react";

export default function CurrentWeatherv2(props) {
  let weather = props.currentWeatherObj;
  let html;
  //   console.log(weather);
  //   console.log(weather === undefined);
  if (weather === undefined) {
    html = <h1>Search Weather conditions</h1>;
  }

  return html;
}
