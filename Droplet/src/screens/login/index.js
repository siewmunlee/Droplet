import React, { Component } from "react"
import {
    Container, Header, Title, Content, Button, Item, Label, Input,
    Body, Left, Right, Icon, Form, Text, Spinner
} from "native-base";
import { StyleSheet, Image } from "react-native"
import { NavigationAction } from 'react-navigation';


export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    {/* <Image /> */}
                </Content>
                <Content>
                    <Form>
                        <Item floatingLabel style={styles.input}>
                            <Label style={styles.label}>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label style={styles.label}>Password</Label>
                            <Input secureTextEntry/>
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
        backgroundColor: '#336699',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#ff3300',
        margin: 15,
        marginTop: 50
    },
    label: {
        color: '#ccffff'
    }
})