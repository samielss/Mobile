import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./components/Menu";
import Products from "./components/Products";
import About from "./components/About";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome", headerStyle:{backgroundColor: "#F05941"}, headerTintColor: "#22092C", headerTitleAlign: "center"}} />
                    <Stack.Screen name="Menu" component={Menu} options={{ title: "Types of Foxes" }} />
                    <Stack.Screen name="Products" component={Products} options={{ title: "Products" }} />
                    <Stack.Screen name="About" component={About} options={{ title: "About", headerStyle:{backgroundColor: "#F05941"}, headerTintColor: "#22092C", headerTitleAlign: "center"}} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const MenuStyles = StyleSheet.create(
    {
        AboutMenu:{
            tintColor: "#F05941"
        }
    }
)