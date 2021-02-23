
import React from "react";
import {
    Typography,
    makeStyles,
    Grid,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    footer: {
        height: '8rem',
        background: '#fafafa',
        borderRadius: '30px 30px 0 0',
        display: 'flex',
        margin: '-1.2em'
    },
    text: {
        fontSize: '18pt',
        fontWeight: "bold"
    }
}));
export default function Footer(props) {
    const { data } = props
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
                <Typography className={classes.text}>2 of 10 questions</Typography>
            </Grid>
        </div>
    );
}

