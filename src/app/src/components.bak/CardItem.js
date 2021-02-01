import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import './card-item.css'
export default class CardItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Item>
        <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content>
          <Item.Header as="a">Dumbell {this.props.name}</Item.Header>
          <Button style={{ height: "50%" }} circular primary floated="right">
            Start
          </Button>
        </Item.Content>
      </Item>
    );
  }
}
