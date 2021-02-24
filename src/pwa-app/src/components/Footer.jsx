
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
    footer2: {
        // height: '8rem',
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
    const { data, allowStyle } = props
    const classes = useStyles();
    return (
        <div className={allowStyle?classes.footer:classes.footer2}>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
                <Typography className={classes.text}>{data} </Typography>
            </Grid>
        </div>
    );
}

