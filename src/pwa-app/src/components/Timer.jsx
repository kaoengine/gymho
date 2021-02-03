import React from "react";
import {
    IconButton,
    Button,
    Container,
    Typography,
} from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp, ExpandLess, ExpandMore } from "@material-ui/icons";

export default function Timer() {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    return (
        <div className="Timers">
            <Container id="buttons">
                {!timerOn && time === 0 && (
                    <Button onClick={() => setTimerOn(true)}>Start</Button>
                )}
                {timerOn && <Button onClick={() => setTimerOn(false)}>Stop</Button>}
                {!timerOn && time > 0 && (
                    <Button onClick={() => setTime(0)}>Reset</Button>
                )}
                {!timerOn && time > 0 && (
                    <Button onClick={() => setTimerOn(true)}>Resume</Button>
                )}
            </Container>

            <Container id="display">
                <Typography align="center" variant="h5" gutterBottom>
                    Timer
                </Typography>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Container>
        </div>
    );
};

// export default function Countdown() {
//     state = {
//         timerOn: false,
//         timerStart: 0,
//         timerTime: 0
//     };
//     startTimer = () => {
//         setState({
//             timerOn: true;
//             timerTime: state.timerTime;
//             timerStart: state.timerTime
//         };
//         timer = setInterval(() => {
//             const newTime = state.timerTime - 10;
//             if (newTime >= 0) {
//                 setState({
//                     timerTime: newTime
//                 });
//             } else {
//                 clearInterval(timer);
//                 setState({ timerOn: false });
//                 alert("Countdown ended");
//             }
//         }, 10);
//     };
//     stopTimer = () => {
//         clearInterval(timer);
//         setState({ timerOn: false });
//     };
//     resetTimer = () => {
//         if (state.timerOn === false) {
//             setState({
//                 timerTime: state.timerStart
//             });
//         }
//     };
//     adjustTimer = input => {
//         const { timerTime, timerOn } = state;
//         const max = 216000000;
//         if (!timerOn) {
//             if (input === "incHours" && timerTime + 3600000 < max) {
//                 setState({ timerTime: timerTime + 3600000 });
//             } else if (input === "decHours" && timerTime - 3600000 >= 0) {
//                 setState({ timerTime: timerTime - 3600000 });
//             } else if (input === "incMinutes" && timerTime + 60000 < max) {
//                 setState({ timerTime: timerTime + 60000 });
//             } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
//                 setState({ timerTime: timerTime - 60000 });
//             }
//         }
//     };

//     const { timerTime, timerStart, timerOn } = state;
//     let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
//     let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
//     let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

//     return (
//         <div>
//             <Container className="Countdown">
//                 {timerOn === false &&
//                     (timerStart === 0 || timerTime === timerStart) && (
//                         <Button onClick={startTimer}>Start</Button>
//                     )}
//                 {timerOn === true && timerTime >= 1000 && (
//                     <Button onClick={stopTimer}>Stop</Button>
//                 )}
//                 {timerOn === false &&
//                     (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
//                         <Button onClick={startTimer}>Resume</Button>
//                     )}
//                 {(timerOn === false || timerTime < 1000) &&
//                     (timerStart !== timerTime && timerStart > 0) && (
//                         <Button onClick={resetTimer}>Reset</Button>
//                     )}
//                 <Container className="Up-button">
//                     <IconButton onClick={() => adjustTimer("incHours")}>
//                         <ExpandLess />
//                     </IconButton>
//                     <IconButton onClick={() => adjustTimer("incMinutes")}>
//                         <ArrowDropUp />
//                     </IconButton>
//                 </Container>
//                 <Container>

//                 </Container>
//                 <Container className="Countdown-time">
//                     {hours} : {minutes}
//                     {/* : {seconds} */}
//                 </Container>
//                 <Container className="Down-button">
//                     <IconButton onClick={() => adjustTimer("decHours")}>
//                         <ExpandMore />
//                     </IconButton>
//                     <IconButton onClick={() => adjustTimer("decMinutes")}>
//                         <ArrowDropDown />
//                     </IconButton>
//                 </Container>
//             </Container>
//         </div>
//     )
// }
