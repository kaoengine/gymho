import React from 'react';
import {
    Container,
    Typography,
    CssBaseline,
    makeStyles,
    CardMedia,
    CardActionArea,
    Card,
} from '@material-ui/core';
import CustomImg from './CustomImg'
import ExerciceImg from './ExerciceImg'
import Timer from './Timer'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // background: white,
        // width: "100%",
    },
    text: {
        color: "#0D4DA1",
        fontWeight: 500,
    },
    media: {
        height: 200,
    },
    img: {
        height: "300px",
        width: "auto",
    }
}));

export default function ExerciseCounter() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography className={classes.text} align="center" variant="h5" gutterBottom>
                    Strides <br />
                    3x15
                </Typography>
            </Container>
            {/* <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card> */}
            <Container align="center">
                <CustomImg className={classes.img} />
            </Container>
            <Container align="center">
                <Footer data={<Timer></Timer>}>
                </Footer>
            </Container>
        </React.Fragment>
    );
}