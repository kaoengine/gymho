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
    height: "100px",
    width: "100px"
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function ExerciceImg(props) {
  const classes = useStyles(props);

console.log('aa');
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CardMedia
          className={classes.media}
          image="https://react.semantic-ui.com/images/wireframe/image.png"
        />
      </ThemeProvider>
    </div>
  );
}
