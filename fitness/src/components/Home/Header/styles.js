import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {paddingTop : 15,paddingHorizontal : 10},
  top_container : {flexDirection : "row",justifyContent : "space-between",alignItems :"center"},
  top_container_text : {fontSize : 30,color : "black",fontWeight :"bold"},
  top_container_image : {width : 40,height : 40,borderRadius : 30,objectFit : "cover"},

  bottom_container : {flexDirection : "row",justifyContent : "space-between",alignItems :"center",marginTop : 10},
  bottom_container_text : {fontSize : 30,color : "red",fontWeight :"bold"},
  bottom_container_icon_area : {backgroundColor : "#cdcdcd",justifyContent : "center",alignItems : "center",padding : 10,borderRadius  :25,borderWidth  :2,borderColor : "#949494"}
});

export default styles;
