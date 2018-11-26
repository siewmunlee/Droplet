import React, { Component } from "react";
import { ImageBackground, View, StatusBar, StyleSheet } from "react-native";
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right, Content, List, ListItem, Thumbnail } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import Ionicons from "react-native-vector-icons/Ionicons";

const counsellor = require("../../../assets/counsellor.png");

const datas = [
    {
        img: counsellor,
        route: "Chat",
        text: "Bob"
    }
];

export default class Inbox extends Component {
    render() {
        return (
            <Container style={styles.containerBackground}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Ionicons
                                name="ios-menu"
                                size={25}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Chat Inbox</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <List
                        style={styles.List}
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem thumbnail
                                button
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Thumbnail square size={55} source={data.img} />
                                </Left>
                                <Body>
                                    <Text>
                                        {data.text}
                                    </Text>
                                    <Text numberOfLines={1} note>
                                        Hello, this is a bot!
                                    </Text>
                                </Body>
                                <Right>
                                    <Ionicons
                                        name="ios-arrow-forward"
                                        color="#999"
                                        size={25}
                                    />
                                </Right>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerBackground: {
        backgroundColor: '#F0F0F0'
    },
    List: {
        backgroundColor: '#FFFFFF'
    }
});