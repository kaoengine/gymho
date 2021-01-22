import React, { Component } from "react";
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import CardItem from "./CardItem"
import 'semantic-ui-css/semantic.min.css'

export default class CardList extends Component {
  render() {
    const exeList =[1, 2, 3, 4];
    return (
      <Item.Group divided>
        {
        exeList.map(exe =>
            <CardItem name={exe} key={exe} />)
    }
      </Item.Group>
    );
  }
}
