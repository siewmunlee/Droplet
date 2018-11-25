import React, { Component } from "react";
import {TouchableHighlight,StyleSheet,View,TouchableOpacity,Image,Alert,ScrollView,FlatList,Slider} from 'react-native';
import {Button, Container,  H3, Text, Title, Header, Icon, Left, Body, Right,Content} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

const splashscreen = require("../../../assets/arrow.png");
const sad = require("../../../assets/1.png");
const happy = require("../../../assets/2.png");
const datas =
    {
      route: "Slider1",
      text: "Counsellor"
    }
  ;

export default class Slider1 extends Component {
  constructor(props) {
     super(props);
      this.state = { age: 45 , age1:45,age2: 45 , age3:45,age4: 45 , age5:45,isHidden: false,
        distance: 30,
        minDistance: 10,
        maxDistance: 100}

   }
   getVal(val){
   //console.warn(val);
   }

   onClickListener = (viewId) => {
     Alert.alert("Alert", "Button pressed "+viewId);
   }

  clickEventListener(item) {
    Alert.Alert(item.title)
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
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
              <Text style={{textAlign: 'center', fontSize:30,marginBottom:20,fontWeight: 'bold',marginTop: 0,color: 'red',}}>Record Your Mood</Text>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              <View style={styles.box} hide={this.state.isHidden}>
<Text style={{textAlign: 'center', fontSize:15,marginBottom:20,fontWeight: 'bold',marginTop: 0,color: 'blue',}}>Where do you stand between the following two categories? </Text>
<Slider
style={{ width: 300}}
step={1}
minimumValue={18}
maximumValue={71}
thumbImage={true}
thumbTintColor='rgb(252, 228, 149)'

/>
<View style={styles.textCon}>
<Image
  source={sad}
  style={{width:50, height:50 }}
/>

<Image
  source={happy}
  style={{width:60, height:60 }}
/>
        </View>

        <View style={styles.textCon}>
        <Text>Anxious</Text>

        <Text>Peaceful</Text>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableHighlight style={[styles.button]} onPress={() => this.props.navigation.navigate('Slider2')}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/flat_round/50/000000/right.png'}}/>
                  </TouchableHighlight>


                </View>
      </View>


            </View>
          </ScrollView>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container:{
    padding:20,
  },
  textCon: {
    marginTop:10,
  width: 280,
  flexDirection: 'row',
  justifyContent: 'space-between'
},

  box: {
    marginTop:10,
    height:300,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2,
    paddingTop:10
  },
  profileImage:{
    width:300,
    height:300,
    marginBottom:20,
  },
  name:{
    fontSize:35,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },

  button: {
    width:90,
    height:90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,

    margin:10,
    elevation:4,
  },

  icon: {
    width:35,
    height:35,
  }
});
