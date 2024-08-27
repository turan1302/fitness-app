import {Platform, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  item: (width,height,position)=>({
    width: (position==="PORTRAIT") ? width - 60 : height - 60,
    height: (position==="PORTRAIT") ? width - 60 : height - 60,
  }),
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default styles;
