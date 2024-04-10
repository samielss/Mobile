import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrerScreen from "./screens/RegistrerScreen";

export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false, statusBarColor:"#0D49B8"}}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false, statusBarColor:"#0D49B8"}}/>
                    <Stack.Screen name="Registrer" component={RegistrerScreen} options={{ statusBarColor:"#0D49B8"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}