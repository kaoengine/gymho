import React from 'react';
import {
    Container,
    makeStyles, 
    Typography,
} from '@material-ui/core';
import CircularChart from './CircleProcess';
import BarChart from './BarProcess';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: "#0d4da1",
        fontWeight: 900,
        fontSize: '17pt',
    },
}));

export default function YourProgress() {
    const classes = useStyles();
    return (
        <div align="center">
            <Typography className={classes.title} align='center'>Great work <br /> for today</Typography>
            <CircularChart />
            <BarChart />
        </div>
    );
}