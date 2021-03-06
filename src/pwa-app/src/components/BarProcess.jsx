import { Chart as ChartJS } from 'react-chartjs-2';

ChartJS.elements.Rectangle.prototype.draw = function () {
  const ctx = this._chart.ctx;
  const vm = this._view;
  let left, right, top, bottom, signX, signY, borderSkipped;
  let borderWidth = vm.borderWidth;

  // If radius is less than 0 or is large enough to cause drawing errors a max
  // radius is imposed. If cornerRadius is not defined set it to 0.
  let cornerRadius = this._chart.config.options.cornerRadius;
  if (cornerRadius < 0) {
    cornerRadius = 0;
  }
  if (typeof cornerRadius == 'undefined') {
    cornerRadius = 0;
  }

  if (!vm.horizontal) {
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  }

  // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line
  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    const halfStroke = borderWidth / 2;
    // Adjust borderWidth when bar top position is near vm.base(zero).
    const borderLeft =
      left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    const borderRight =
      right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    const borderBottom =
      bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
    // not become a vertical line?
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    // not become a horizontal line?
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;

  // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |
  const corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom]
  ];

  // Find first (starting) corner with fallback to 'bottom'
  const borders = ['bottom', 'left', 'top', 'right'];
  let startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  // Draw rectangle from 'startCorner'
  let corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (let i = 1; i < 4; i++) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;
    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    const width = corners[2][0] - corners[1][0];
    const height = corners[0][1] - corners[1][1];
    const x = corners[1][0];
    const y = corners[1][1];

    let radius = cornerRadius;

    // Fix radius being too large
    if (radius > Math.abs(height) / 1.5) {
      radius = Math.floor(Math.abs(height) / 1.5);
    }
    if (radius > Math.abs(width) / 1.5) {
      radius = Math.floor(Math.abs(width) / 1.5);
    }

    if (height < 0) {
      // Negative values in a standard bar chart
      const x_tl = x;
      const x_tr = x + width;
      const y_tl = y + height;
      const y_tr = y + height;

      const x_bl = x;
      const x_br = x + width;
      const y_bl = y;
      const y_br = y;

      // Draw
      ctx.moveTo(x_bl + radius, y_bl);
      ctx.lineTo(x_br - radius, y_br);
      ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);
      ctx.lineTo(x_tr, y_tr + radius);
      ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr);
      ctx.lineTo(x_tl + radius, y_tl);
      ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);
      ctx.lineTo(x_bl, y_bl - radius);
      ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    } else {
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  button: {
    backgroundColor: "#3fc0c3",
    color: "#FFF",
    height: "34px",
    width: "50px",
    borderRadius: "25%",
    fontWeight: "bold",
  },
}));

export default function BarChart() {
  const classes = useStyles();
  const theme = useTheme();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(300, 0, 300, 300);
  const gradient2 = ctx.createLinearGradient(300, 0, 300, 300);
  gradient.addColorStop(0, '#189fd0');
  gradient2.addColorStop(1, '#189fd0');
  gradient.addColorStop(1, '#3fc0c3');
  gradient2.addColorStop(0, '#3fc0c3');

  return (
    <Container>
      <Container>
        <Bar
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
            datasets: [
              {
                // label: '# of votes',
                data: [12, 19, 3, 5, 6, 3, 10, 9, 7, 16, 17, 6],
                pointStyle: 'circle',
                barThickness: '15',
                backgroundColor: gradient,
                borderColor: gradient2,
                borderWidth: '2.5',
              }
            ]
          }}
          height={200}
          width={275}
          options={{
            cornerRadius: 8,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false,
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </Container>
      <Container>
        <Button>Week</Button>
        <Button className={classes.button}>Month</Button>
        <Button>Year</Button>
      </Container>
    </Container>
  );
}
