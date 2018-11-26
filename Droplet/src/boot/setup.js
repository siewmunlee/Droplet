import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider, Root } from "native-base";
import { createStackNavigator, createDrawerNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'

import App from "../App";

import Login from "../screens/login/"
import Home from "../screens/home/"
import Inbox from "../screens/inbox/"
import Diary from "../screens/diary/"
import Profile from "../screens/profile/"
import Slider1 from "../screens/home/Slider1"
import Slider2 from "../screens/home/Slider2"
import Slider3 from "../screens/home/Slider3"
import Slider4 from "../screens/home/Slider4"
import Chat from "../screens/inbox/chat"
import NewNote from "../screens/diary/addNote"
import EditNote from "../screens/diary/editNote"
import AudioNote from "../screens/diary/audioNote"
import Slider5 from "../screens/home/Slider5"
import Slider6 from "../screens/home/Slider6"
import Slider7 from "../screens/home/Slider7"
import EndSlider from "../screens/home/EndSlider"
import SideBar from "../screens/sidebar";

import ApplicationStore from '../reducers'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'

async function getToken() {
  // Remote notifications do not work in simulators, only on device
  if (!Expo.Constants.isDevice) {
    return;
  }
  let { status } = await Expo.Permissions.askAsync(
    Expo.Permissions.NOTIFICATIONS,
  );
  if (status !== 'granted') {
    return;
  }
  let value = await Expo.Notifications.getExpoPushTokenAsync();
  console.log('Our token', value);
  /// Send this to a server
}

const reducer = storage.reducer(ApplicationStore);
const engine = createEngine('notes-app-store')
const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)


// Drawer navigation here
const Drawer = createDrawerNavigator({
  Home: { screen: Home },
  Inbox: { screen: Inbox },
  Diary: { screen: Diary },
  Profile: { screen: Profile }
},
  {
    initialRouteName: "Profile",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

// Main navigation which includes drawers and other stuffs
const MainNavigator = createStackNavigator({
  Drawer: { screen: Drawer },
  Slider1: { screen: Slider1 },
  Chat: { screen: Chat },
  NewNote: { screen: NewNote },
  EditNote: { screen: EditNote },
  AudioNote: { screen: AudioNote },
  Slider2: {screen: Slider2},
  Slider3: {screen: Slider3},
  Slider4: {screen: Slider4},
  Slider5: {screen: Slider5},
  Slider6: {screen: Slider6},
  Slider7: {screen: Slider7},
  EndSlider: {screen: EndSlider},
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
  componentDidMount() {
    getToken();

    this.listener = Expo.Notifications.addListener(this.handleNotification);
  }
  componentWillMount() {
    this.loadFonts();
    this.listener && this.listener.remove();
  }
  handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
    );
  };
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      Lato_Regular: require("../../assets/fonts/Lato-Regular.ttf")
    });
    this.setState({ isReady: true });
  }


  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}
