import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Header, H3, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Text } from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";
import { AudioRecorder, AudioUtils } from "react-native-audio";
import { RNS3 } from "react-native-aws3";
import Sound from "react-native-sound";

import Fire from './Fire';

const useracc = {
  name: "Fam"
}

class Chat extends Component {
  state = {
    messages: [],
    startAudio: false,
    playAudio: false,
    audioSettings: {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      MeteringEnabled: true,
      IncludeBase64: true,
      AudioEncodingBitRate: 32000
    }
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
          // renderActions={() => {
          //   return (
          //     <Ionicons
          //       name="ios-mic"
          //       size={35}
          //       hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          //       color={this.state.startAudio ? "red" : "black"}
          //       style={{
          //         bottom: 50,
          //         right: Dimensions.get("window").width / 2,
          //         position: "absolute",
          //         shadowColor: "#000",
          //         shadowOffset: { width: 0, height: 0 },
          //         shadowOpacity: 0.5,
          //         zIndex: 2,
          //         backgroundColor: "transparent"
          //       }}
          //       onPress={this.handleAudio}
          //     />
          //   );
          // }}
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

  handleAudio = async () => {
    const { user } = this.props;
    if (!this.state.startAudio) {
      this.setState({
        startAudio: true
      });
      await AudioRecorder.startRecording();
    } else {
      this.setState({ startAudio: false });
      await AudioRecorder.stopRecording();
      const { audioPath } = this.state;
      const fileName = `${this.messageIdGenerator()}.aac`;
      const file = {
        uri: Platform.OS === "ios" ? audioPath : `file://${audioPath}`,
        name: fileName,
        type: `audio/aac`
      };
      const options = {
        keyPrefix: AwsConfig.keyPrefix,
        bucket: AwsConfig.bucket,
        region: AwsConfig.region,
        accessKey: AwsConfig.accessKey,
        secretKey: AwsConfig.secretKey,
      };
      RNS3.put(file, options)
        .progress(event => {
          console.log(`percent: ${event.percent}`);
        })
        .then(response => {
          console.log(response, "response from rns3 audio");
          if (response.status !== 201) {
            alert("Something went wrong, and the audio was not uploaded.");
            console.error(response.body);
            return;
          }
          const message = {};
          message._id = this.messageIdGenerator();
          message.createdAt = Date.now();
          message.user = {
            _id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            avatar: user.avatar
          };
          message.text = "";
          message.audio = response.headers.Location;
          message.messageType = "audio";

          this.chatsFromFB.update({
            messages: [message, ...this.state.messages]
          });
        })
        .catch(err => {
          console.log(err, "err from audio upload");
        });
    }
  };
}

export default Chat;