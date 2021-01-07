import React, { Component } from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


export default class Carddetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // change code below this line

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };

    reset() {
        this.setState({
            count: 0
        });
    };


    render() {
        return (
            <Card>
                <Card.Content>
                    <Button circular floated='left' icon='x' />
                    <Card.Header textAlign={"right"}>Video's title</Card.Header>
                </Card.Content>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content textAlign={"center"}>
                    <Card.Description>
                        Current Count: {this.state.count}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button color='red' floated="left" icon='minus' onClick={(e) => this.decrement(e)} />
                    <Button color='green' floated="right" icon='plus' onClick={(e) => this.increment(e)} />
                </Card.Content>
            </Card>
        );
    }
}
