import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImgMediaCard from "./ForecastCard";
import SpacingGridClass from "./SpacingGridClass"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 280,
  },
  control: {
    padding: theme.spacing(2),
    margin: 1,
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(1);
  

  const classes = useStyles();

  let lat = props.coord[0];
  let lon = props.coord[1];

  let fiveDayForecast = [];

  // fetch(
  //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly,daily&appid=344b01fedf4f336e1535a4118f1c46df&units=imperial`
  // ).then(
  //   (res) => res.json()
  //   ).then((res) => {
  //     console.log(res);
  //     let apiList = [];
  //     for (let i = 0; i < 5; i++) {
  //       console.log(res.daily[i])
  //       console.log(res.daily[i].clouds)
  //       fiveDayForecast.push(res.daily[i]);
  //     }
  //   });

    console.log(fiveDayForecast[1])
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper elevation={3} className={classes.paper} children={<SpacingGridClass coord={props.coord} value={value}/>}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
