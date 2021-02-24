import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  title: {
    color: "#3fc0c3",
    fontWeight: "bold",
  },
  detail: {
    fontWeight: "bold",
  }
}));

export default function CircularChart() {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ width: 250, height: 250 }}>
      <CircularProgressbarWithChildren
        value={80}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#3fc0c3",
          trailColor: "gold",
          rotation: 0.5 + (1 - 50 / 100) /2
        })}
        >
        <div style={{ marginTop: -41 }}>
          <h4 className={classes.title}>Time</h4>
          <p className={classes.detail}>120</p>
          <h4 className={classes.title}>Calories</h4>
          <p className={classes.detail}>85 kcal</p>
        </div>
      </CircularProgressbarWithChildren>
    </Container>
  );
}