import React, { Component } from 'react'
import { Image, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.top_container_text}>EGZERSİZE</Text>
          <Image style={styles.top_container_image} source={require("../../../assets/profile/profile.jpeg")}/>
        </View>
        <View style={styles.bottom_container}>
          <Text style={styles.bottom_container_text}>HAZIR MISINIZ</Text>
          <View style={styles.bottom_container_icon_area}>
            <FontAwesome name={"bell"} size={20} color={"gray"}/>
          </View>
        </View>
      </View>
    )
  }
}
