import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Header, H3, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form, Text} from "native-base";

class FloatingLabel extends Component {
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
            <Title><H3>Chat</H3></Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default FloatingLabel;