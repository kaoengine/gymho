// -----------------------------
//   NAV[] | TITLE | BUTTON
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
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import  Settings from '@material-ui/icons/Settings';

import {
    Link
} from "react-router-dom";


import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
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
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default function BLayout(props) {
    const classes = useStyles();
    const { main, title, nav } = props

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['activity', 'process', 'excercise', 'survey'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={`/${text}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" color="transparent" className={classes.appBar} style={{ boxShadow: "none" }}>
                <Toolbar>
                    <Grid container justify="space-around" spacing={5}>
                        <Grid key={1} item>
                            {['left'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <IconButton onClick={toggleDrawer(anchor, true)} edge="start" color="inherit" aria-label="open drawer">
                                        <MenuIcon style={{ color: "#0D4DA1" }} />
                                    </IconButton>
                                    <SwipeableDrawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                        onOpen={toggleDrawer(anchor, true)}
                                    >
                                        {list(anchor)}
                                    </SwipeableDrawer>
                                </React.Fragment>
                            ))}
                        </Grid>
                        <Grid key={2} item>
                            <Typography className={classes.text} align="center" variant="h5" gutterBottom>
                                <Box textAlign="center" fontWeight="fontWeightBold" m={1}>
                                    {title}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid key={3} item>
                            <IconButton edge="end" color="inherit">
                                <Settings style={{ color: "#fff", stroke: "#0D4DA1", strokeWidth: "1.5" }} />
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