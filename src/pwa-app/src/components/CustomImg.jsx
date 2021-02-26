import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  media: {
    height: "400px",
    width: "auto"
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomImg(props) {
  const classes = useStyles(props);

console.log('aa');
  return (
        <CardMedia className={classes.media}
          image="/custom2.png"
        />
);
}
