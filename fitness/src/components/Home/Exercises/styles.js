import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  exercises_text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  flatlist_column_wrapper: { justifyContent: "space-between" },
  animated_view_style: { marginBottom: 20, paddingHorizontal: 10 },
  button_area: { alignItems: "center" },
  linear_gradient_area: { borderRadius: 20, alignItems: "center", paddingBottom: 12 },
  image_style: (width,height,position) => ({
    width: (position==="PORTRAIT") ? width * 0.45 : width*0.45,
    height: (position==="PORTRAIT") ? width * 0.45 : width*0.25,
    borderRadius: 20,
    zIndex: -1
  }),
  text_style: {
    marginTop: -40,
    color: "white",
    justifyContent: "flex-end",
    fontSize: 20,
  },
});

export default styles;
