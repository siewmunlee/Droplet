import React, { Component } from "react";
import { ImageBackground, View, StatusBar, ListView, Alert, StyleSheet } from "react-native";
import { Container, Button, Text, Title, Header, Icon, Left, Body, Right, Fab, IconNB, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux'
import Ionicons from "react-native-vector-icons/Ionicons";

import { deleteNote } from '../../actions'

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    pressNote(noteId) {
        Alert.alert(
            'Delete Journal',
            'Do you want to delete this journal?',
            [
                { text: 'YES', onPress: () => this.deleteNote(noteId) },
                { text: 'No' }
            ]
        )
    }

    deleteNote(noteId) {
        this.props.deleteNote(noteId)
    }

    goToNote(Id, Title, Description) {
        this.props.navigation.navigate("EditNote", {
            noteId: Id,
            title: Title,
            description: Description
        });
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
                            <Ionicons
                                name="ios-menu"
                                size={25}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Diary</Title>
                    </Body>
                    <Right />
                </Header>
                {this.renderList()}
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: "#5067FF" }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate("NewNote")}
                    >
                        <IconNB name="md-add" />
                    </Fab>
                </View>
            </Container>
        );
    }



    renderList() {
        if (this.props.notes.length <= 0) {
            return (
                <View style={styles.emptyListContainer}>
                    <Text style={styles.emptyList}>You do not have any journal entries in your diary</Text>
                </View>
            )
        } else {
            var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            var dataSource = ds.cloneWithRows(this.props.notes) || []

            return (
                <ListView
                    dataSource={dataSource}
                    renderRow={(note, sectionID, rowID) => {
                        return (
                            <Card>
                                <CardItem header button onPress={() => this.goToNote(note.id, note.title, note.description)}>
                                    <Body>
                                        <Text>{note.title}</Text>
                                        <Text note>{note.datetime}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem button onPress={() => this.goToNote(note.id, note.title, note.description)}>
                                    <Body>
                                        <Text>
                                            {note.description}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={{ paddingVertical: 0 }}>
                                    <Left>
                                        <Ionicons
                                            name="ios-trash"
                                            size={25}
                                            color="black"
                                            onPress={() => this.pressNote(note.id)}
                                        />
                                    </Left>
                                </CardItem>
                            </Card>
                        )
                    }}
                />
            )
        }
    }
}

function mapStateToProps(state) {
    return { notes: state.allNotes }
}

export default connect(mapStateToProps, { deleteNote })(Diary)

const styles = StyleSheet.create({
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 56,
        marginTop: 100
    },
    emptyList: {
        fontFamily: 'Lato_Regular',
        fontSize: 16
    },
});