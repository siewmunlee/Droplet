import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import App from "../App";
import Login from "../screens/login/"
import Home from "../screens/home/"
import SideBar from "../screens/sidebar";

const Drawer = DrawerNavigator({
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

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
