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
  }
}));

export default function CircularChart() {
  const classes = useStyles();
  return (
    <Container className={classes.root} style={{ width: 250, height: 250 }}>
      <CircularProgressbarWithChildren
        value={55}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#3fc0c3",
          trailColor: "gold"
        })}
        >
        <div style={{ marginTop: -41, alignItems: 'center' }}>
          <h4>Time</h4>
          <p>120</p>
          <h4>Calories</h4>
          <p>85 kcal</p>
        </div>
      </CircularProgressbarWithChildren>
    </Container>
  );
}