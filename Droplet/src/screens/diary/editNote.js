import React, { Component } from 'react'
import { Text, View, TextInput, BackAndroid, StatusBar, StyleSheet, ListView, Alert } from 'react-native'
import { Container, Title, Header, Icon, Left, Body, Right, Button } from "native-base";
import { connect } from 'react-redux'
import { updateNote } from '../../actions'

class editNewNote extends Component {
    constructor(props) {
        super(props)

        const { navigation } = this.props;
        const noteId = navigation.getParam('noteId', 'NO-ID');
        const noteTitle = navigation.getParam('title', 'some default value');
        const noteDesc =  navigation.getParam('description', 'some default value');

        this.state = {
            changed: false,
            id: noteId,
            title: noteTitle,
            desc: noteDesc
        }
    }
    update() {
        this.props.updateNote({
            id: this.state.id,
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
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Edit Note</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.update()}
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
                        onChangeText={(text) => this.setState({ title: text, changed: true })}
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
                        onChangeText={(text) => this.setState({ desc: text, changed: true })}
                        value={this.state.desc}
                    />
                </View>
            </Container>
        )
    }
}

export default connect(null, { updateNote })(editNewNote)