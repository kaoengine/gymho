
import React from "react";
import {
    Typography,
    makeStyles,
    withStyles,
    Grid,
    Button
} from "@material-ui/core";

const mockData = ['Yes, I have', `No, I don't have`, 'Skip ▶']

const AnswerButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '3em',
        width: '15rem',
        padding: '6px 12px',
        border: '1px solid',
        borderRadius: '3em',
        lineHeight: 1.5,
        margin: 24,
        background: 'linear-gradient(45deg, #47b4c1 30%, #319dc8 90%)',
        // borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: 10
    },
    text: {
        fontSize: '24px',
        fontWeight: "900",
        margin: '3px',
        fontFamily: 'Heebo'
    }
}));
export default function Answers(props) {
    const { answers } = props
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
        >
            {(answers || mockData).map(answer =>
                <AnswerButton variant="contained" color="primary" className={classes.button}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <Typography className={classes.text}>{answer}</Typography>
                        </Grid>
                    </Grid>
                </AnswerButton>)}
        </Grid>
    );
}

