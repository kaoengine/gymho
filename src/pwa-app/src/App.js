import React, { Component } from "react";

import ActivityPage from "./pages/Activity"
import ExcercisePage from './pages/Excercise'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SurveyPage from "./pages/Survey"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
    },
}));

export default function App() {
    const classes = useStyles();
    return (

        <Router>
            <div>
                <Switch>
                    <Route path="/activity">
                        <div className={classes.root}>
                            <ActivityPage></ActivityPage>
                        </div>
                    </Route>
                    <Route path="/excercise">
                        <div className={classes.root}>
                            <ExcercisePage></ExcercisePage>
                        </div>
                    </Route>
                    <Route path="/survey">
                        <div className={classes.root}>
                            <SurveyPage></SurveyPage>
                        </div>
                    </Route>
                    <Route path="/process">
                        Hello
                    </Route>
                    <Route path="/">
                        <div className={classes.root}>
                            <ActivityPage></ActivityPage>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}
