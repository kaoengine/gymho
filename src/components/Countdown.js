import React, { Component } from "react";
import { Button, Card, Container, Message } from "semantic-ui-react";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };
    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };
    adjustTimer = input => {
        const { timerTime, timerOn } = this.state;
        const max = 216000000;
        if (!timerOn) {
            if (input === "incHours" && timerTime + 3600000 < max) {
                this.setState({ timerTime: timerTime + 3600000 });
            } else if (input === "decHours" && timerTime - 3600000 >= 0) {
                this.setState({ timerTime: timerTime - 3600000 });
            } else if (input === "incMinutes" && timerTime + 60000 < max) {
                this.setState({ timerTime: timerTime + 60000 });
            } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                this.setState({ timerTime: timerTime - 60000 });
            }
        }
    };
    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

        return (
            <Card className="Countdown">
                <Container className="Up-button">
                    <Button color="green" icon='angle double up' onClick={() => this.adjustTimer("incHours")}></Button>
                    <Button color="green" icon='angle up' onClick={() => this.adjustTimer("incMinutes")}></Button>
                </Container>
                <Container>
                    {timerOn === false &&
                        (timerStart === 0 || timerTime === timerStart) && (
                            <Button onClick={this.startTimer}>Start</Button>
                        )}
                    {timerOn === true && timerTime >= 1000 && (
                        <Button onClick={this.stopTimer}>Stop</Button>
                    )}
                    {timerOn === false &&
                        (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                            <Button onClick={this.startTimer}>Resume</Button>
                        )}
                    {(timerOn === false || timerTime < 1000) &&
                        (timerStart !== timerTime && timerStart > 0) && (
                            <Button onClick={this.resetTimer}>Reset</Button>
                        )}
                </Container>
                <Container className="Countdown-time">
                    {hours} : {minutes} : {seconds}
                </Container>
                <Container className="Down-button">
                    <Button color="red" icon='angle double down' onClick={() => this.adjustTimer("decHours")}></Button>
                    <Button color="red" icon='angle down' onClick={() => this.adjustTimer("decMinutes")}></Button>
                </Container>
            </Card>
        );
    }
}
export default Countdown;