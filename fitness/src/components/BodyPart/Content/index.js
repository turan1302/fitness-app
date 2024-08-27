import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from "./styles";

export default class Content extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={styles.text_area}>
        <Text style={styles.text}> {item.item.name} </Text>
      </View>
    )
  }
}
