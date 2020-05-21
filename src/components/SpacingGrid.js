import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FiveDayForecast from "./FiveDayForecast"

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

  let forecastArray = props.forecastArray;
  let html

  if (forecastArray.length === 0) {
    html = <h1>Five Day Forcast here</h1>;
  } else {
    html = <Grid container className={classes.root} spacing={1}>
    <Grid item xs={12}>
      <Grid container justify="left" spacing={spacing}>
        {[0, 1, 2, 3, 4].map((value) => (
          <Grid key={value} item>
            <Paper elevation={3} className={classes.paper} children={<FiveDayForecast forecast={forecastArray[value]} value={value}/>}/>
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
  }


  return html
}