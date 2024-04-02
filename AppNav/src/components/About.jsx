import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, Image, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#22092C" }}>
            <Text style={Style.textFox}>{foxText}</Text>
            <Pressable onPress={() => props.navigation.navigate('Home')} style={Style.ButtonMenu}>
                <Image source={require('../images/Home_Icon.png')} />
                <Text style={{ fontSize: 20, color: "#22092C", marginStart: 6 }}>Return to de begin</Text>
            </Pressable>
        </View>
    )
}
const foxText = "Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright, triangular ears, a pointed, slightly upturned snout, and a long bushy tail (brush)."
const Style = StyleSheet.create(
    {
        ButtonMenu: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F05941",
            margin: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30
        },
        textFox:{
            textAlign: "justify",
            fontSize: 20, 
            color: "#F05941",
            margin: 10 
        }
    }
)