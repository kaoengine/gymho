import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { 
  Bar, 
  Line,
  Pie,
} from 'react-chartjs-2'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function BarChart() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Bar 
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 6, 3, 10, 9, 7, 16, 17, 6]
            },
          ],
        }}
        height={200}
        width={600}
        options={{
          maintainAspectRatio: false
        }}
        />
    </div>
    
  );
}