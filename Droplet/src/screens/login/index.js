import React, { Component } from "react"
import {
    Container, Header, Title, Content, Button, Item, Label, Input,
    Body, Left, Right, Icon, Form, Text, Spinner
} from "native-base";
import { StyleSheet, Image, ImageBackground } from "react-native"
import { NavigationActions, StackActions } from 'react-navigation';

const launchscreenLogo = require("../../../assets/icon.png");

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={styles.container}>

                <Content>
                    <Image source={launchscreenLogo} style={styles.logo} />
                </Content>
                <Content>
                    <Form>
                        <Item floatingLabel style={styles.input}>
                            <Label style={styles.label}>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label style={styles.label}>Password</Label>
                            <Input secureTextEntry />
                        </Item>
                    </Form>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        marginLeft: 20,
        marginRight: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#e9ecef',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#00bbe3',
        margin: 15,
        marginTop: 50
    },
    label: {
        color: '#6c6c6c'
    },
    logo: {
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 50,
        top: Platform.OS === "android" ? 35 : 20,
        width: 280,
        height: 300
      },
})
