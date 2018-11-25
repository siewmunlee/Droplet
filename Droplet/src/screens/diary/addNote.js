import React, { Component } from 'react'
import { Text, View, TextInput, BackAndroid, StatusBar, StyleSheet, ListView, Alert } from 'react-native'
import { Container, Title, Header, Icon, Left, Body, Right, Button, ActionSheet } from "native-base";
import { connect } from 'react-redux'
import Ionicons from "react-native-vector-icons/Ionicons";
import { addNote } from '../../actions'

var BUTTONS = ["Attach Image", "Record Audio", "Cancel"];

class AddNewNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            desc: ''
        }
    }

    add() {
        this.props.addNote({
            title: this.state.title,
            description: this.state.desc,
            datetime: new Date().toDateString()
        })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Ionicons
                                name="ios-arrow-back"
                                size={25}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Journal Entry</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: 2,
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                }
                            )}
                        >
                            <Ionicons
                                name="md-add-circle-outline"
                                size={25}
                            />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.add()}
                        >
                            <Ionicons
                                name="md-checkmark"
                                size={25}
                            />
                        </Button>
                    </Right>
                </Header>
                <View>
                    <TextInput
                        style={styles.inputTitleStyle}
                        autoFocus={true}
                        placeholder='Enter Title Here'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ title: text })}
                        value={this.state.title}
                    />

                    <TextInput
                        style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Type Out Your Journal Here'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ desc: text })}
                        value={this.state.desc}
                    />
                </View>
            </Container>
        )
    }
}

export default connect(null, { addNote })(AddNewNote)


const styles = StyleSheet.create({
    inputTitleStyle: {
        height: 60,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        fontFamily: 'Lato_Regular',
        fontSize: 20
    },
    inputDescriptionStyle: {
        //flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 60,
        fontFamily: 'Lato_Regular',
        fontSize: 16,
        textAlignVertical: 'top'
    }
});