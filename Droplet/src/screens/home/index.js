import React, { Component } from "react";
import {StyleSheet,View,TouchableOpacity,Image,Alert,ScrollView,FlatList} from 'react-native';
import { Container, Button, H3, Text, Title, Header, Icon, Left, Body, Right,Content} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';


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
      data: [
        {id:1, title: "Anxiety",      color:"#FF4500",   image:"https://img.icons8.com/color/70/000000/name.png",route: "Slider1"},
        {id:1, title: "Depression",     color:"#87CEEB",   image:"https://img.icons8.com/office/70/000000/home-page.png",route: "Slider2"},
        {id:2, title: "General Well-Being",     color:"#4682B4",  image:"https://img.icons8.com/color/70/000000/two-hearts.png",route: "Slider3"} ,
        {id:3, title: "Stress",   color:"#6A5ACD",   image:"https://img.icons8.com/color/70/000000/family.png",route: "Slider4"} ,

      ]
    };
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
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>


                <View style={styles.container}>
                  <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor= {(item) => {
                      return item.id;
                    }}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() =>  this.props.navigation.navigate(item.route)}>
                          <View style={styles.cardHeader}>
                            <Text style={styles.title}>{item.title}</Text>
                          </View>
                          <Image style={styles.cardImage} source={{uri:item.image}}/>
                          <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}></Text>
                          </View>
                        </TouchableOpacity>
                      )
                    }}/>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20,
  }
});
