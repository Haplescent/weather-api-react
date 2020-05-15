import React from "react";

export default function CurrentWeatherv2(props) {
  let weatherObj = props.currentWeatherObj;
  let html;
  //   console.log(weather);
  //   console.log(weather === undefined);
  if (Object.keys(weatherObj).length === 0) {
    html = <h1>Current Weather conditions here</h1>;
  } else {
    console.log(weatherObj.coord.lon)
    html = <h1>lon {weatherObj.coord.lon} lat {weatherObj.coord.lat}</h1>
  }

  return html;
}
