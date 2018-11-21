import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import App from "../App";

import Login from "../screens/login/"
import Home from "../screens/home/"
import Inbox from "../screens/inbox/"
import About from "../screens/about/"
import Profile from "../screens/profile/"

import Chat from "../screens/inbox/chat"

import SideBar from "../screens/sidebar";

// Drawer navigation here
const Drawer = createDrawerNavigator({
    Home: { screen: Home },
    Inbox: {screen: Inbox},
    About: {screen: About},
    Profile: {screen: Profile}
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

// Main navigation which includes drawers and other stuffs
const MainNavigator = createStackNavigator({
    Drawer: { screen: Drawer },

    Chat: {screen: Chat}
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

// Login navigation 
const AuthNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Home: MainNavigator
});

const AppNavigator = createAppContainer(AuthNavigator);

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <AppNavigator />
    );
  }
}
