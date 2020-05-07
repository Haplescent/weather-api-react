import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ImgMediaCard from './ForecastCard';

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

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(1);
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper elevation={3} className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
