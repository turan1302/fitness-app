import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  item_area: { marginBottom: 20, alignItems: "center" },
  button_area: { elevation: 3, borderWidth: 1, borderRadius: 20, borderColor: "#f1f1f1" },
  image: (width, height, position) => ({
    width: (position === "PORTRAIT") ? width * 0.45 : width * 0.45,
    height: (position === "PORTRAIT") ? width * 0.45 : width * 0.45,
    borderRadius: 20,
  }),
  text: { marginTop: 13, color: "black", fontWeight: "bold", fontSize: 15 },

  rbsheet_style: {
    container: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
  },
  rbsheet_scroll_area: (width, height, position) => ({ flex: 1, height: (position === "PORTRAIT") ? height : width }),
  rbsheet_image_area: { elevation: 5, borderBottomWidthWidth: 1, borderColor: "gray", borderRadius: 30 },
  rbsheet_image: (width, height, position) => ({
    width: (position === "PORTRAIT") ? width : width,
    height: (position === "PORTRAIT") ? height * 0.50 : width,
    objectFit: "fill",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  }),
  rbsheet_detail_area: { paddingHorizontal: 10, paddingVertical: 10 },
  rbsheet_title: { color: "black", fontSize: 20, fontWeight: "bold" },
  rbsheet_text_area: { marginTop: 30, color: "black", fontSize: 15 },
});

export default styles;
