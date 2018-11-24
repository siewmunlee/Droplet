import React, { Component } from 'react'
import { Text, View, TextInput, BackAndroid, StatusBar, StyleSheet, ListView, Alert } from 'react-native'
import { Container, Title, Header, Icon, Left, Body, Right, Button } from "native-base";
import { connect } from 'react-redux'
import { addNote } from '../../actions'

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
            description: this.state.desc
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
                            <Text>lel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Note</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.add()}
                        >
                            <Text>Done</Text>
                        </Button>
                    </Right>
                </Header>
                <View>
                    <TextInput
                        //style={styles.inputTitleStyle}
                        autoFocus={true}
                        placeholder='Note Title...'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        // selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({ title: text })}
                        value={this.state.title}
                    />

                    <TextInput
                        //style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Note Description...'
                        placeholderTextColor='#aaa'
                        returnKeyType='return'
                        underlineColorAndroid="transparent"
                        //selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({ desc: text })}
                        value={this.state.desc}
                    />
                </View>
            </Container>
        )
    }
}

export default connect(null, { addNote })(AddNewNote)