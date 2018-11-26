import React, { Component } from "react";
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right, Content, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import { TouchableHighlight, ImageBackground, StatusBar, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import PureChart from 'react-native-pure-chart';
import Ionicons from "react-native-vector-icons/Ionicons";
const splashscreen = require("../../../assets/chatbot.png");

export default class Profile extends Component {
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
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />

                <Text style={styles.name}>
                  John Doe
                           </Text>
              </View>
            </View>
            {/* <TouchableHighlight onPress={() => this.props.navigation.navigate('Chat')}>
              <Image
                source={splashscreen}
                style={{
                  width: 100, height: 100, marginLeft: 130,
                  marginRight: 100
                }}
              />
            </TouchableHighlight> */}
            <Button full warning onPress={() => this.props.navigation.navigate('Inbox')}>
              <Text style={{ fontSize: 15 }}>
                Your anxiety meter level is high, click here for some advice on managing your anxiety from our bot!
              </Text>
            </Button>

            <Card style={styles.card}>
              <CardItem header>
                <Text style={styles.cardHeader}>
                  Anxiety
                </Text>
              </CardItem>
              <View style={styles.bodyContent}>
                <PureChart data={sampleData} type='line' />
              </View>
            </Card>

            <Card style={styles.card}>
              <CardItem header>
                <Text style={styles.cardHeader}>
                  Depression
                </Text>
              </CardItem>
              <View style={styles.bodyContent}>
                <PureChart data={sampleData1} type='line' />
              </View>
            </Card>

            <Card style={styles.card}>
              <CardItem header>
                <Text style={styles.cardHeader}>
                  General Well-Being
                </Text>
              </CardItem>
              <View style={styles.bodyContent}>
                <PureChart data={sampleData} type='line' />
              </View>
            </Card>

            <Card style={styles.card}>
              <CardItem header>
                <Text style={styles.cardHeader}>
                  Stress
                </Text>
              </CardItem>
              <View style={styles.bodyContent}>
                <PureChart data={sampleData1} type='line' />
              </View>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}
let sampleData = [
  {
    seriesName: 'Anxiety',
    data: [
      { x: '2018-02-01', y: 30 },
      { x: '2018-02-02', y: 200 },
      { x: '2018-02-03', y: 170 },
      { x: '2018-02-04', y: 270 },
      { x: '2018-02-05', y: 10 },
      { x: '2018-02-04', y: 250 },
      { x: '2018-02-05', y: 10 }
    ],
    color: '#297AB1',
  }
]

let sampleData1 = [
  {
    seriesName: 'series2',
    data: [
      { x: '2018-02-01', y: 20 },
      { x: '2018-02-02', y: 100 },
      { x: '2018-02-03', y: 140 },
      { x: '2018-02-04', y: 550 },
      { x: '2018-02-05', y: 40 },
      { x: '2018-02-04', y: 250 },
      { x: '2018-02-05', y: 10 }
    ],
    color: 'red'
  }
]


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1E90FF",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  bodyContent: {

    alignItems: 'center',
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingRight: 20
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 20
  }
});
