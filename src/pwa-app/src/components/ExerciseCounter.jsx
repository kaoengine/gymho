import React from 'react';
import {
    Container,
    Typography,
    CssBaseline,
    makeStyles,
    Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // background: white,
        // width: "100%",
    },
    text: {
        color: "#0D4DA1",
        fontWeight: 500,
    },
}));

export default function ExerciseCounter() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography className={classes.text} align="center" variant="h5" gutterBottom>
                    Strides <br />
                        3x15
                </Typography>
            </Container>
        </React.Fragment>
    );
}