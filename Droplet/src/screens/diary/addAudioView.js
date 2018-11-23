import React, { Component } from "react";
import { Container, Header, H3, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class addAudioView extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title><H3>Add a new voice memo</H3></Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default addAudioView;