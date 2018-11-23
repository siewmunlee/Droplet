import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right, Content } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: []
        };
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Diary</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("Audio")}>
                            <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>
                <Content>

                </Content>
            </Container>
        );
    }
}