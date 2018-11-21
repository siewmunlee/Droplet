import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from './Fire';
import { Container, Header, H3, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Text } from "native-base";

const useracc = {
  name: "Fam"
}

class Chat extends Component {
  state = {
    messages: []
  };

  get user() {
    return {
      name: useracc.name,
      _id: Fire.shared.uid,
    };
  }


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
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      </Container>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;