// ------------------
//      TITLE
// ------------------
//      TAB(T|F)
// ------------------
//      TABPANEL(MAIN)

import React from '../../public/node_modules/react';
import CssBaseline from '../../public/node_modules/@material-ui/core/CssBaseline';
import Typography from '../../public/node_modules/@material-ui/core/Typography';

import SwipeableViews from '../../public/node_modules/react-swipeable-views';
import { makeStyles, useTheme } from '../../public/node_modules/@material-ui/core/styles';
import AppBar from '../../public/node_modules/@material-ui/core/AppBar';
import Tabs from '../../public/node_modules/@material-ui/core/Tabs';
import Tab from '../../public/node_modules/@material-ui/core/Tab';
import Box from '../../public/node_modules/@material-ui/core/Box'
import { white } from '../../public/node_modules/@material-ui/core/colors'

import PropTypes from '../../public/node_modules/prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    appBar: {
        top: 'auto',
        paddingTop: "1em",
        backgroundColor: white
    },
    tabs: {
        paddingTop: '1em',
    },
    decor_wrapper: {
        background: "#fafafa",
    },
    decor_curver: {
        borderBottomRightRadius: '179px 56px',
        background: "#3f51b5",
        height: "5em",
    }
}));


export default function ALayout(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const { main, title, nav } = props


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar style={{ boxShadow: "none" }} className={classes.appBar} position="relative">
                <Typography variant="h2" color="inherit" align="center" noWrap>
                    {title || 'ACTIVITY'}
                </Typography>
                <Tabs className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Activity" {...a11yProps(0)} />
                    <Tab label="News" {...a11yProps(1)} />
                    <Tab label="Goal" {...a11yProps(2)} />
                </Tabs>
                <CssBaseline />
                <div className={classes.decor_wrapper}>
                    <div className={classes.decor_curver}>
                    </div>
                </div>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <main>
                        {main}
                    </main>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item One
                </TabPanel>

                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>

        </div>
    );
}