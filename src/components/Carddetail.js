import React, { Component } from "react";
import { Button, Header, Container, Image } from 'semantic-ui-react';
import Countdown from "./Countdown";

export default class CardDetail extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Container>
                    <Button circular floated="left" icon='arrow left' />
                    <Button circular floated="right" icon="setting" />
                    <Header>Video's title</Header>
                </Container>
                <Container>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped size="medium" />
                </Container>
                <Container>
                    <Countdown />
                </Container>
            </Container>
        );
    }
}
