import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, Image, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#C6EBC5" }}>
            <Text style={{ fontSize: 30, color: "#FA7070" }}>Menu</Text>
            <Pressable onPress={() => props.navigation.navigate('Products')} style={Style.ButtonMenu}>
                <Image source={require('../images/Menu_Icon.png')} />
                <Text style={{ fontSize: 20, color: "#FEFDED", marginStart: 6 }}>Menu</Text>
            </Pressable>
        </View>
    )
}
const Style = StyleSheet.create(
    {
        ButtonMenu: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FA7070",
            margin: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30
        }
    }
)