import React, { Component } from "react";

import SplashScreen from "./screens/splashscreen/"
import Login from "./screens/login/"

export default class Main extends Component {
    constructor(props) {
      super(props);
      this.state = { currentScreen: 'Splash' }
      setTimeout(() => {
        this.setState({currentScreen: 'Login'})
      }, 3000)
    }
    render() {
      const {currentScreen} = this.state
      let mainScreen = currentScreen == 'Splash' ? <SplashScreen /> : <Login />
      return mainScreen
    }
}
