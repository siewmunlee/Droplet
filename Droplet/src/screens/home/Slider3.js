import React, { Component } from 'react';
import {StyleSheet,View,Slider} from 'react-native';
import { Container, Header, H3, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Text } from "native-base";
export default class Slider3 extends React.Component  {
  constructor(props) {
   super(props)
   this.state = { age: 45 , age1:45,age2: 45 , age3:45,age4: 45 , age5:45}
  }
  getVal(val){
  //console.warn(val);
  }
  render() {

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title><H3>General Well-Being</H3></Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age}
           onValueChange={val => this.setState({ age: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age}
          </Text>
          <Text style={styles.instructions}>
            Sad -------- Happy
          </Text>

      <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age1}
           onValueChange={val => this.setState({ age1: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age1}
          </Text>
        <Text style={styles.instructions}>
            Tired -------- Energetic
          </Text>

      <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age2}
           onValueChange={val => this.setState({ age2: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age2}
          </Text>
        <Text style={styles.instructions}>
           Worried -------- Calm
          </Text>

      <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age3}
           onValueChange={val => this.setState({ age3: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age3}
          </Text>
        <Text style={styles.instructions}>
            Tense -------- Relaxed
          </Text>

      <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age4}
           onValueChange={val => this.setState({ age4: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age4}
          </Text>
        <Text style={styles.instructions}>
            Pessimistic -------- Optimistic
          </Text>

      <Slider
           style={{ width: 300 }}
           step={1}
           minimumValue={18}
           maximumValue={71}
           value={this.state.age5}
           onValueChange={val => this.setState({ age5: val })}
           onSlidingComplete={ val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.age5}
          </Text>
        <Text style={styles.instructions}>
            Hopeless -------- Hopeful
          </Text>



        </View>
      </Container>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
