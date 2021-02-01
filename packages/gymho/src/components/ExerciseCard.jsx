import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExerciceImg from "./ExerciceImg";
import StartButton from "./StartButton";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ExerciceCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <ExerciceImg
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Grid container spacing={1}>
            <Grid container item xs={11} spacing={3}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
            </Grid>
            <Grid container item xs={1} spacing={1}>
              <div className={classes.controls}>
                <StartButton />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
}
