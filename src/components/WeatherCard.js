import SimplePaper from "./Paper";
import React from "react";
import SpacingGrid from "./SpacingGrid";
import SpacingGridClass from "./SpacingGridClass";

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      // isLoaded: false,
      // currentWeather: [],
      // coord: [],
      // textInput: this.props.textInput,
    };
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    console.log(props.textInput);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.textInput !== this.props.textInput) {
  //     //Perform some operation
  //     this.setState({ textInput: this.props.textInput });
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${this.state.textInput}&appid=344b01fedf4f336e1535a4118f1c46df`
  //     )
  //       .then((res) => (res.ok ? res : false))
  //       .then((res) => {
  //         if (res) {
  //           //res ok
  //           this.setState({
  //             isLoaded: true,
  //             currentWeather: [
  //               res.name,
  //               res.weather[0].main,
  //               res.main.temp,
  //               res.main.humidity,
  //               res.wind.speed,
  //             ],
  //             coord: [res.coord.lat, res.coord.lon],
  //           });
  //         }
  //       });
  //   }
  // }

  // componentDidUpdate() {
  //   // Typical usage (don't forget to compare props):
  //   console.log(this.state.textInput);
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${this.state.textInput}&appid=344b01fedf4f336e1535a4118f1c46df`
  //   )
  //     .then((res) => (res.ok ? res : false))
  //     .then((res) => {
  //       if (res) {
  //         //res ok
  //         this.setState({
  //           isLoaded: true,
  //           currentWeather: [
  //             res.name,
  //             res.weather[0].main,
  //             res.main.temp,
  //             res.main.humidity,
  //             res.wind.speed,
  //           ],
  //           coord: [res.coord.lat, res.coord.lon],
  //         });
  //       }
  //     });
  // }

  // componentDidMount() {
  //   console.log(this.state.textInput);
  //   console.log("WeatherCard textInput State updated");
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${this.state.textInput}&appid=344b01fedf4f336e1535a4118f1c46df`
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           currentWeather: [
  //             result.name,
  //             result.weather[0].main,
  //             result.main.temp,
  //             result.main.humidity,
  //             result.wind.speed,
  //           ],
  //           coord: [result.coord.lat, result.coord.lon],
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     )
  //     .catch((error) => {
  //       console.log("api call failed");
  //       console.log(this.state.textInput);
  //       this.setState({
  //         isLoaded: true,
  //         error,
  //       });
  //     });
  // }

  render() {
    var isLoaded = false;
    var currentWeather;
    var coord;
    var error;
    var htmlReturn;
    var textInput = this.props.textInput;

    console.log(textInput);

    async function f() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=f25075de1148c157d43cbd98dae55bed`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            window.isLoaded = true;
            currentWeather = [
              result.name,
              result.weather[0].main,
              result.main.temp,
              result.main.humidity,
              result.wind.speed,
            ];
            coord = [result.coord.lat, result.coord.lon];
            console.log(isLoaded);
            htmlReturn = (
              <ul>
                {currentWeather.map((item) => (
                  <li key={item.name}>{item}</li>
                ))}
              </ul>
            );
            // return (
            //   <div>
            //     <SimplePaper children={htmlReturn} />
            //     <SpacingGrid coord={coord} />
            //   </div>
            // );
          }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        )
        .catch((error) => {
          console.log("api call failed");
          console.log(textInput);
          let htmlReturn = <div>Error: {error.message}</div>;
          // return <SimplePaper children={htmlReturn} />;
        });
    }

    f();

    // const { error, isLoaded, currentWeather, coord } = this.state;
    console.log(isLoaded);
    if (error) {
      let htmlReturn = <div>Error: {error.message}</div>;
      console.log(error.message);
      return <SimplePaper children={htmlReturn} />;
    } else if (!isLoaded) {
      let htmlReturn = <div>Loading...</div>;
      console.log(error);
      console.log(textInput);
      return <SimplePaper children={htmlReturn} />;
    } else {
      console.log("returning html varible");
      let htmlReturn = (
        <ul>
          {currentWeather.map((item) => (
            <li key={item.name}>{item}</li>
          ))}
        </ul>
      );
      return (
        <div>
          <SimplePaper children={htmlReturn} />
          <SpacingGrid coord={coord} />
        </div>
      );
    }
  }
}
