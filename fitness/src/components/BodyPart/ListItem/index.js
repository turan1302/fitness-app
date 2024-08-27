import React, { Component, createRef } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Animated, { LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";
import RBSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get("window");

export default class ListItem extends Component {

  constructor() {
    super();

    this.state = {
      windowDimensions: Dimensions.get('window'),
    },

    this.RBSheet = [];
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
    const { item, index } = this.props;
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <Animated.View
        entering={(index % 2 === 0) ? LightSpeedInLeft.duration(400).delay((index + 1) * 200) : LightSpeedInRight.duration(400).delay((index + 1) * 200)}
        style={styles.item_area}>
        <TouchableOpacity onPress={() => this.RBSheet[index].open()} style={styles.button_area}>
          <Image style={styles.image(width,height,position)} source={item.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>

        <RBSheet
          ref={ref => (this.RBSheet[index] = ref)}
          height={height * 0.80}
          openDuration={200}
          closeDuration={200}
          draggable={true}
          customStyles={styles.rbsheet_style}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={styles.rbsheet_scroll_area(width,height,position)}>
            <View style={styles.rbsheet_image_area}>
              <Image style={styles.rbsheet_image(width,height,position)} source={item.image} />
            </View>
            <View style={styles.rbsheet_detail_area}>
              <Text style={styles.rbsheet_title}>{item.name}</Text>
              <Text style={styles.rbsheet_text_area}>
                {item.description}
              </Text>
              <Text style={styles.rbsheet_text_area}>
                Set: <Text style={{ fontWeight: "bold" }}>{item.set}</Text>
              </Text>
              <Text style={styles.rbsheet_text_area}>
                Tekrar: <Text style={{ fontWeight: "bold" }}>{item.repeat}</Text>
              </Text>
            </View>
          </ScrollView>
        </RBSheet>
      </Animated.View>
    );
  }
}
