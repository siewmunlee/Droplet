import React, { Component, Dimensions } from "react";
import { TouchableHighlight, StyleSheet, View, TouchableOpacity, Image, Alert, ScrollView, FlatList, Slider } from 'react-native';
import { Button, Container, H3, Text, Title, Header, Icon, Left, Body, Right, Content } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 45, age1: 45, age2: 45, age3: 45, age4: 45, age5: 45, isHidden: false,
      distance: 3,
      minDistance: 10,
      maxDistance: 100
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
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons
                name="ios-menu"
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
              <Text style={styles.bottomText}>Where do you stand between the following two categories? </Text>
              <Slider
                style={{ width: 300 }}
                step={1}
                minimumValue={0}
                maximumValue={5}
                onValueChange={val => this.setState({ distance: val })}
                value={this.state.distance}
                thumbTintColor='rgb(252, 228, 149)'
              />
              <View style={styles.textCon}>
                <Ionicons
                  name="ios-happy"
                  size={35}
                  color="green"
                  style={{
                    marginLeft: -10,
                    marginTop: -10
                  }}
                />
                <Text style={styles.value}>
                  {this.state.distance}
                </Text>
                <Ionicons
                  name="ios-sad"
                  size={35}
                  color="red"
                  style={{
                    marginRight: -10,
                    marginTop: -10
                  }}
                />
              </View>

              <View style={styles.textCon}>
                <Text style={styles.leftMarker}>Not Angry</Text>
                <Text style={styles.rightMarker}>Very Angry</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Button style={styles.nextButton} iconRight info onPress={() => this.props.navigation.navigate('Slider1')}>
                  <Text>Next</Text>
                  <Ionicons
                  name="ios-arrow-forward"
                  size={15}
                  color="white"
                  style={{
                    marginLeft: -10,
                    paddingRight: 15
                  }}
                />
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

