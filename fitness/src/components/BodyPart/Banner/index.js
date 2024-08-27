import React, { Component } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export default class Banner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get('window'),
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const {closePage,item} = this.props;
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View>
        <Image style={styles.image(width,height,position)} source={item.item.image}/>
        <View style={styles.back_button_area}>
          <TouchableOpacity onPress={closePage}>
            <View style={styles.icon_view_area}>
              <AntDesign name={"caretleft"} size={20} color={"white"}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
