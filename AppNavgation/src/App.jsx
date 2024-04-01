import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";

const Stack = createNativeStackNavigator();

export default () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}