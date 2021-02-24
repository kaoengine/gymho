import React from 'react';
import {
    Container,
    Grid,
    makeStyles, 
    Typography,
} from '@material-ui/core';
import CircularChart from './CircleProcess';
import BarChart from './BarProcess';
import Footer from './Footer';

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
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className={classes.title} align='center'>Great work <br /> for today</Typography>
            <CircularChart />
            <Footer allowStyle={false} data={<div id='quang2'><BarChart /></div>}></Footer>
            </Grid>
        </div>
    );
}