
import React from "react";
import {
    Typography,
    makeStyles,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    text: {
        fontSize: '22pt',
        fontWeight: "bold",
        fontFamily:"Heebo"
    },
    question: {
        marginBottom: '1em',
        fontWeight: 900,
    }
}));

export default function Question(props) {
    const { question } = props
    const classes = useStyles();
    return (
        <div className={classes.question}>
            <Grid container>
                <Typography align="center" className={classes.text}>{question}</Typography>
            </Grid>
        </div>
    );
}

