import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Bar,
  Line,
  Pie,
} from 'react-chartjs-2'
import { Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function BarChart() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container>
      <Container>
        <Bar
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                // label: '# of votes',
                data: [12, 19, 3, 5, 6, 3, 10, 9, 7, 16, 17, 6],
                pointStyle: 'circle',
                barThickness: '15',
                backgroundColor: '#3fc0c3',
                borderSkipped: '',
                borderColor: '#000',
                borderWidth: '2',
                borderRadius: '5'
              },
            ],
          }}
          height={200}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
              },],
            },
          }}
        />
      </Container>
      <Container>
        <Button align="center">
          Week
                </Button>
        <Button align="center">
          Month
                </Button>
        <Button align="center">
          Year
                </Button>
      </Container>
    </Container>
  );
}