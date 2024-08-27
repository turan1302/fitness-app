import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, View, Text, Platform } from "react-native";
import { Component } from "react";
import styles from "./styles";

export default class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sliders : [
        {id : 1,image : require("../../../assets/sliders/slider1.jpeg")},
        {id : 2,image : require("../../../assets/sliders/slider2.jpg")},
        {id : 3,image : require("../../../assets/sliders/slider3.webp")},
        {id : 4,image : require("../../../assets/sliders/slider4.webp")},
      ],
      windowDimensions: Dimensions.get('window'),
    }

    this._renderItem = this._renderItem.bind(this);
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

  _renderItem ({item, index}, parallaxProps) {
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.item(width,height,position)}>
        <ParallaxImage
          source={item.image}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          { item.title }
        </Text>
      </View>
    );
  }

  render () {
    const {sliders} = this.state;
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={{marginTop : 20}}>
        <Carousel
          sliderWidth={(position==="PORTRAIT") ? width : width}
          sliderHeight={(position==="PORTRAIT") ? width : height}
          itemWidth={(position==="PORTRAIT") ? width - 60 : height - 60}
          data={sliders}
          renderItem={this._renderItem}
          hasParallaxImages={true}
          firstItem={2}
        />
      </View>
    );
  }
}
