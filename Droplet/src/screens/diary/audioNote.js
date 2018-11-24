import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Container, Title, Header, Icon, Left, Button, Body, Right } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AudioNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startAudio: false
        }
    }

    handleAudio = async () => {
        if (!this.state.startAudio) {
          this.setState({
            startAudio: true
          });
        } else {
          this.setState({ startAudio: false });
        }
      };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Add Voice Memo</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                        >
                            <Text>Done</Text>
                        </Button>
                    </Right>
                </Header>
                <View>
                    <Ionicons
                        name="ios-mic"
                        size={100}
                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                        color={this.state.startAudio ? "red" : "black"}
                        style={{
                            top: 200,
                            right: Dimensions.get("window").width / 2,
                            position: "absolute",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.5,
                            zIndex: 2,
                            backgroundColor: "transparent"
                        }}
                        onPress={this.handleAudio}
                    />
                </View>
            </Container>
        )
    }
}