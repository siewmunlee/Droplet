import React, { Component } from "react";
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right,Content } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import {ImageBackground, StatusBar, StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import PureChart from 'react-native-pure-chart';
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
                            <Icon name="menu" />
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
                             source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                           <Text style={styles.name}>
                             John Doe
                           </Text>
                       </View>
                     </View>

           			  <View style={styles.bodyContent}>
           			   <PureChart data={sampleData} type='line' />
                   <Text >
                     Anxiety
                   </Text>
           			   </View>

                   <View style={styles.bodyContent}>
                    <PureChart data={sampleData1} type='line' />
                    <Text >
                      Depression
                    </Text>
                    </View>

                    <View style={styles.bodyContent}>
                      <PureChart data={sampleData} type='line' />
                     <Text >
                       General Well-Being
                     </Text>
                      </View>

                   <View style={styles.bodyContent}>
                    <PureChart data={sampleData1} type='line' />
                    <Text >
                      Stress
                    </Text>
                    </View>
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
      {x: '2018-02-01', y: 30},
      {x: '2018-02-02', y: 200},
      {x: '2018-02-03', y: 170},
      {x: '2018-02-04', y: 250},
      {x: '2018-02-05', y: 10}
    ],
    color: '#297AB1',

  }

]

let sampleData1 = [
  {
    seriesName: 'series2',
    data: [
      {x: '2018-02-01', y: 20},
      {x: '2018-02-02', y: 100},
      {x: '2018-02-03', y: 140},
      {x: '2018-02-04', y: 550},
      {x: '2018-02-05', y: 40}
    ],
    color: 'red'

  }

]






const styles = StyleSheet.create({
header:{
  backgroundColor: "#1E90FF",
},
headerContent:{
  padding:30,
  alignItems: 'center',
},
avatar: {
  width: 130,
  height: 130,
  borderRadius: 63,
  borderWidth: 4,
  borderColor: "white",
  marginBottom:10,
},
name:{
  fontSize:22,
  color:"#FFFFFF",
  fontWeight:'600',
},
bodyContent: {

  alignItems: 'center',
  padding:30,
},
textInfo:{
  fontSize:18,
  marginTop:20,
  color: "#696969",
}
});
