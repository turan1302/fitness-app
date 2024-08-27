import React, { Component } from "react";
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import bodyParts from "../../../data/bodyParts";
import Animated, { BounceInDown } from "react-native-reanimated";
import Header from "../Header";
import Slider from "../Slider";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

import * as NavigationService from '../../../routes/NavigationService'

export default class Exercises extends Component {

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
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View>
        <FlatList ListHeaderComponent={() => {
          return (
            <View>
              <Header />
              <Slider />
              <Text style={styles.exercises_text}>Egzersizler</Text>
            </View>
          );
        }} columnWrapperStyle={styles.flatlist_column_wrapper}
                  showsVerticalScrollIndicator={false}
                  numColumns={2} data={bodyParts} keyExtractor={(item, index) => item.id}
                  renderItem={({ item, index }) => {
                    return (
                      <Animated.View
                        entering={BounceInDown.duration(400).delay((index + 1) * 200).springify().damping(3)}
                        style={styles.animated_view_style}>
                        <TouchableOpacity onPress={()=>NavigationService.navigate("BodyPart",{item})} style={styles.button_area}>
                          <LinearGradient colors={["transparent", "#000000"]}
                                          start={{ x: 0, y: 0 }}
                                          end={{ x: 0, y: 1 }}
                                          style={styles.linear_gradient_area}>
                            <Image style={styles.image_style(width,height,position)}
                                   source={item.image} />
                            <Text style={styles.text_style}>{item.name}</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </Animated.View>
                    );
                  }} />
      </View>
    );
  }
}
