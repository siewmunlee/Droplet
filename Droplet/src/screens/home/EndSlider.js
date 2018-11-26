import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView, FlatList, Slider } from 'react-native';
import { Button, Container, H3, Text, Title, Header, Icon, Left, Body, Right, Content } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles"

const splashscreen = require("../../../assets/arrow.png");
const sad = require("../../../assets/1.png");
const happy = require("../../../assets/2.png");
const moodCover = require("../../../assets/mood.png");
const datas =
  {
    route: "Slider1",
    text: "Counsellor"
  }
  ;

export default class EndSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 45, age1: 45, age2: 45, age3: 45, age4: 45, age5: 45, isHidden: false,
      distance: 30,
      minDistance: 10,
      maxDistance: 100,
      date1: date = new Date().getDate(),
      month1: new Date().getMonth() + 1,
      year1: year = new Date().getFullYear()
    }

  }

  getVal(val) {
    //console.warn(val);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }
  render() {
    return (
      <Container style={styles.containerBackground}>
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
          <Title>Mood Tracker</Title>
        </Body>
        <Right />
      </Header>
      <Image source={moodCover} style={styles.moodCover} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box} hide={this.state.isHidden}>
            <Text style={styles.endText}>You have completed Entry for:{this.state.date1}/{this.state.month1}/{this.state.year1}!</Text>
            <View style={{flexDirection: 'row'}}>
              <Button style={{marginTop: 20}} block info onPress={() => this.props.navigation.navigate('Profile')}>
                <Text>View Result</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
    );
  }
}
