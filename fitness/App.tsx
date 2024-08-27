import React, { Component } from 'react'
import { SafeAreaView, Text, View } from "react-native";
import Routes from "./src/routes";
import 'react-native-gesture-handler';
import 'react-native-reanimated';

export default class App extends Component {
  render() {
    return (
        <SafeAreaView style={{flex : 1}}>
          <Routes/>
        </SafeAreaView>

    )
  }
}
