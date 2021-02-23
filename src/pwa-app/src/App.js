import React, { Component } from "react";

import ActivityPage from "./pages/Activity"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SurveyPage from "./pages/Survey"

import {
    BrowserRouter as Router
    ,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
    },
}));

export default function App() {
    const classes = useStyles();
    return (

        // <div className={classes.root}>
        //     <ActivityPage></ActivityPage>
        //     {/* <SurveyPage></SurveyPage> */}
        // </div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/activity">activity</Link>
                        </li>
                        <li>
                            <Link to="/process">process</Link>
                        </li>
                        <li>
                            <Link to="/survey">Survey</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/activity">
                        <ActivityPage />
                    </Route>
                    <Route path="/survey">
                        <SurveyPage />
                    </Route>
                    <Route path="/process">
                        Hello
                    </Route>
                    <Route path="/">
                        <ActivityPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}
