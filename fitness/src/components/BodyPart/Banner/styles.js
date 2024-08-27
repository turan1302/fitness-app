import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: (width,height,position) => ({
    width: (position==="PORTRAIT") ? width : width,
    height: (position==="PORTRAIT") ? height * 0.40 : width * 0.40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  }),
  back_button_area: { position: "absolute", paddingHorizontal: 10, marginTop: 10 },
  icon_view_area: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
