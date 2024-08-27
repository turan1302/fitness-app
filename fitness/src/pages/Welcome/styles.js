import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  gradient_container : { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  bottom_container : { width: "85%", alignItems: "center" },
  first_text : { color: "white", fontSize: 30, textAlign: "center",fontWeight : "bold" },
  second_text : { color: "red", fontSize: 30, textAlign: "center",fontWeight : "bold" },
  button_area : {
    backgroundColor: "red",
    padding: 15,
    marginVertical: 30,
    flexDirection: "row",
    borderRadius: 35,
    borderWidth : 2,
    borderColor : "white",
    width : "100%",
    justifyContent : "center"
  },
  button_text : { color: "white", fontSize: 20,fontWeight : "bold" },
  animated_button_area : { width: "100%" }
});

export default styles;
