import React, { Component } from "react";

import ActivityPage from "./pages/Activity"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SurveyPage from "./pages/Survey"
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
    },
}));

export default function App() {
        const classes = useStyles();

        return (
            <div className={classes.root}>
                {/* <ActivityPage></ActivityPage> */}
                <SurveyPage></SurveyPage>
            </div>
        )
}

// export default App;