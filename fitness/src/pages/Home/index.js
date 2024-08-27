import React, { Component } from 'react'
import { View } from 'react-native'
import Exercises from "../../components/Home/Exercises";

export default class Home extends Component {
  render() {
    return (
      <View style={{backgroundColor : "white"}}>
       <Exercises/>
      </View>
    )
  }
}
