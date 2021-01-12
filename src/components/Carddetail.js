import React, { Component } from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import Countdown from "./Countdown";

export default class CardDetail extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Button circular floated="left" icon='x' />
                    <Button circular floated="right" icon="setting" />
                    <Card.Header textAlign="center">Video's title</Card.Header>
                </Card.Content>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content textAlign={"center"}>
                    <Countdown></Countdown>
                </Card.Content>
            </Card>
        );
    }
}
