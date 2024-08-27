import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import BodyPart from "../pages/BodyPart";
import { navigationRef } from "./NavigationService";


const Stack = createNativeStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={"Welcome"} screenOptions={({route})=>{
          return {
            headerShown : false
          }
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BodyPart" options={({route,navigation})=>{

          }} component={BodyPart} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
