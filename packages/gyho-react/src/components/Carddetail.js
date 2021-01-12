import React, { Component } from "react";
import { Button, Header, Container, Image, Segment } from 'semantic-ui-react';
import Countdown from "./Countdown";

export default class CardDetail extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Segment.Group>
                    <Segment>
                        <Button circular floated="left" icon='arrow left' />
                        <Button circular floated="right" icon="setting" />
                        <Header>Video's title</Header>
                    </Segment>
                    <Segment>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped size="medium" />
                    </Segment>
                    <Segment>
                        <Countdown />
                    </Segment>
                </Segment.Group>
            </Container>
        );
    }
}
