// -----------------------------
//   NAV  | TITLE | BUTTON
// -----------------------------
//           MAIN
// -----------------------------
//      

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';
import { Settings } from '@material-ui/icons';
import white from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "white",
        // width: "100%",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    text: {

    },
    appBar: {
        top: 'auto',
        paddingTop: "2em"
    },
    main: {
        paddingTop: "10em",
    },
}));

export default function BLayout(props) {
    const classes = useStyles();
    const { main, title, nav } = props
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" color="transparent" className={classes.appBar} style={{ boxShadow: "none" }}>
                <Toolbar>
                    <Grid container justify="space-around" spacing={5}>
                        <Grid key={1} item>
                            <IconButton edge="start" color="inherit" aria-label="open drawer">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid key={2} item>
                            <Typography className={classes.text} align="center" variant="h5" gutterBottom>
                                <Box textAlign="center" fontWeight="fontWeightBold" m={1}>
                                    Dumbbell <br></br> workout
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid key={3} item>
                            <IconButton edge="end" color="inherit">
                                <Settings />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container className={classes.main} maxWidth="sm">
                <main>
                    {main}
                </main>
            </Container>
        </div>
    );
}