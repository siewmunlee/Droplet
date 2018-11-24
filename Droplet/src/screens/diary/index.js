import React, { Component } from "react";
import { ImageBackground, View, StatusBar, ListView } from "react-native";
import { Container, Button, Text, Title, Header, Icon, Left, Body, Right, Fab, IconNB, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux'
import { deleteNote } from '../../actions'

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
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
                            {/* <Icon name="menu" /> */}
                            <Text>Menu</Text>
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
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <IconNB name="md-share" />
                        <Button
                            style={{ backgroundColor: "#34A34F" }}
                            onPress={() => this.props.navigation.navigate("NewNote")}
                        >
                            <IconNB name="logo-whatsapp" />
                        </Button>
                        <Button disabled style={{ backgroundColor: "#DD5144" }}>
                            <IconNB name="ios-mail" />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }



    renderList() {
        if (this.props.notes.length <= 0) {
            return (
                <View>
                    <Text>Add some notes...</Text>
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
                            //   <NotesViewCard
                            //     title={note.title}
                            //     description={note.description}
                            //     id={note.id}
                            //     keys={rowID}
                            //     onPressBtn={this.goToNote.bind(this)}
                            //     onLongPressBtn={this.longPressNote.bind(this)}
                            //   />
                            <Card>
                                <CardItem header>
                                    <Text>{note.title}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {note.description}
                                        </Text>
                                    </Body>
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