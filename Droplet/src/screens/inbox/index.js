import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class Inbox extends Component {
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
                        <Title>Chat Inbox</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}