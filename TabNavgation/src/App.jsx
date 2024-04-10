import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from "./components/HomeScreen";
import SearchBooks from "./components/SearchBooks";
import MyBooks from "./components/MyBooks";
import Favorites from "./components/Favorites";

export default props => {

    const Tab = createBottomTabNavigator()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'SearchBook') {
                                iconName = focused ? 'search' : 'search-outline';
                            }
                            else if (route.name === 'Favorites') {
                                iconName = focused ? 'heart' : 'heart-outline';
                            }
                            else if (route.name === 'MyBooks') {
                                iconName = focused ? 'book' : 'book-outline'                                
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#FFFAB7',
                        tabBarInactiveTintColor: '#D6DAC8',
                        tabBarStyle:{borderRadius: 60, backgroundColor: "#7EA1FF", height: 60, padding: 10}
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor: "#FFD1E3", borderBottomEndRadius: 20, borderBottomStartRadius: 20}, headerTintColor: "#7EA1FF", headerTitleAlign:"center"}} />
                    <Tab.Screen name="SearchBook" component={SearchBooks} options={{headerStyle:{backgroundColor: "#FFD1E3", borderBottomEndRadius: 20, borderBottomStartRadius: 20}, headerTintColor: "#7EA1FF", headerTitleAlign:"center"}} />
                    <Tab.Screen name="Favorites" component={Favorites} options={{headerStyle:{backgroundColor: "#FFD1E3", borderBottomEndRadius: 20, borderBottomStartRadius: 20}, headerTintColor: "#7EA1FF", headerTitleAlign:"center"}} />
                    <Tab.Screen name="MyBooks" component={MyBooks} options={{headerStyle:{backgroundColor: "#FFD1E3", borderBottomEndRadius: 20, borderBottomStartRadius: 20}, headerTintColor: "#7EA1FF", headerTitleAlign:"center"}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}