import React, { Component, Platform, Dimensions } from "react";
import { Image, StyleSheet } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

// Navigation items
// Remember to change the icons
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "ios-home",
    bg: "#C5F442"
  },
  {
    name: "Profile",
    route: "Profile",
    icon: "ios-person",
    bg: "#C5F442"
  },
  {
    name: "Chat Inbox",
    route: "Inbox",
    icon: "ios-chatboxes",
    bg: "#477EEA"
  },
  {
    name: "Diary",
    route: "Diary",
    icon: "ios-book",
    bg: "#DA4437"
  },
  {
    name: "Logout",
    route: "Login",
    icon: "ios-undo",
    bg: "#4DCAE0"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image style={styles.drawerCover} />
          <Image square style={styles.drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >

                <Left>
                  <Ionicons
                    name={data.icon}
                    color="#777"
                    size={25}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
