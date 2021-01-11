import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'




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
            <Item.Meta>
              <span className="cinema">IFC</span>
            </Item.Meta>
            <Item.Description>KaoItems</Item.Description>
            <Button primary floated="right">
              Start
              <Icon name="right chevron" />
            </Button>
          </Item.Content>
        </Item>
    );
  }
}
