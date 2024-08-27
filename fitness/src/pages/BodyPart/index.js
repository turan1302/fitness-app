import React, { Component } from "react";
import { Dimensions, Text, View, Animated, TouchableOpacity, Image, FlatList } from "react-native";
import * as NavigationService from "../../routes/NavigationService";
import Banner from "../../components/BodyPart/Banner";
import Content from "../../components/BodyPart/Content";
import exerciseData from "../../data/exerciseData";
import ListItem from "../../components/BodyPart/ListItem";
import styles from "./styles";

const {height} = Dimensions.get("window");
export default class BodyPart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideAnim: new Animated.Value(height),
      item: this.props.route.params,

      windowDimensions: Dimensions.get('window'),
    };
  }

  componentDidMount() {
    this.setState({
      slideAnim : new Animated.Value(this.state.windowDimensions.height)
    },()=>{
      Animated.timing(this.state.slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();

      this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
    });
  }

  close = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: height,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  closePage = () => {
    this.close();
    setTimeout(() => {
      NavigationService.back();
    }, 350);
  };

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({
      windowDimensions: window,
    });
  }

  render() {
    const { slideAnim, item } = this.state;
    const animatedStyle = {
      transform: [{ translateY: slideAnim }],
    };

    const exercies = exerciseData.filter(data => data.body_id === item.item.id);

    return (
      <Animated.View style={[animatedStyle, styles.animated_container]}>
        <FlatList
          ListHeaderComponent={()=>(
            <View>
              <Banner closePage={this.closePage} item={item} />
              <Content item={item} />
            </View>
          )}
          ListHeaderComponentStyle={styles.list_header_style}
          contentContainerStyle={styles.content_container} showsVerticalScrollIndicator={false} numColumns={2}
          columnWrapperStyle={styles.column_wrapper} data={exercies}
          keyExtractor={(item, index) => item.id} renderItem={({ item, index }) => {
          return (
            <ListItem index={index} item={item}/>
          );
        }} />
      </Animated.View>
    );
  }
}
