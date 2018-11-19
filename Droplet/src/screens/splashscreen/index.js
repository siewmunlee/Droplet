import React, { Component } from "react";
import { Image } from "react-native";

const splashscreen = require("../../../assets/splash.png");

export default class SplashPage extends Component {
  render() {
    // CHANGE SPLASH SCREEN IMAGE PLS
    return (
      <Image
        source={splashscreen}
        style={{ flex: 1, height: null, width: null }}
      />
    );
  }
}