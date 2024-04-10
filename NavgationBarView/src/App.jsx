import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octions from 'react-native-vector-icons/Octicons';

export default props => {
    const Tab = createBottomTabNavigator()
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home">
                   <Tab.Screen name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor: "#10353F"}, tabBarStyle:{backgroundColor:"#10353F"}, tabBarIcon:({size,color}) => <Octions name="home" size={size} color="#FFF" />}}/>
                   <Tab.Screen name="Details" component={HomeScreen} options={{headerStyle:{backgroundColor: "#10353F"}, tabBarStyle:{backgroundColor:"#10353F"}, tabBarIcon:({size,color}) => <Octions name="home" size={size} color="#FFF" />}}/>
                   <Tab.Screen name="Settings" component={HomeScreen} options={{headerStyle:{backgroundColor: "#10353F"}, tabBarStyle:{backgroundColor:"#10353F"}, tabBarIcon:({size,color}) => <Octions name="home" size={size} color="#FFF" />}}/>
                   <Tab.Screen name="More" component={HomeScreen} options={{headerStyle:{backgroundColor: "#10353F"}, tabBarStyle:{backgroundColor:"#10353F"}, tabBarIcon:({size,color}) => <Octions name="home" size={size} color="#FFF" />}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}