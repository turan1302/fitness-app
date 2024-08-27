import React, { Component } from "react";
import { ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import Animated, { BounceIn, BounceOut, FadeIn, FadeInDown, FadeOutDown } from "react-native-reanimated";

export default class Welcome extends Component {
  render() {
  const {navigation} = this.props;

    return (
      <ImageBackground
        source={require("../../assets/welcome/welcome.jpg")} // Arka plan resmi
        style={styles.container} resizeMode={"cover"}
      >
        <LinearGradient
          colors={["transparent", "#000000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.8 }}
          style={styles.gradient_container}
        >
          <View style={styles.bottom_container}>
            <Animated.Text style={{ textAlign: "center" }}
                           entering={FadeInDown.duration(400).delay(200).springify().damping(8)}>
              <Text style={styles.first_text}>Sizin İçin <Text
                style={styles.second_text}>En İyi Egzersizler</Text></Text>
            </Animated.Text>


            <Animated.View style={styles.animated_button_area}
                           entering={FadeInDown.duration(400).delay(400).springify().damping(8)}>
              <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={[styles.button_area]}>
                <Text style={styles.button_text}>Hemen Başlayın</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
