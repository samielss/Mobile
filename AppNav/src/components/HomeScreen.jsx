import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, Image, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#22092C" }}>
            <Text style={{ fontSize: 30, color: "#F05941" }}>This App is about Foxys :)</Text>
            <Pressable onPress={()=> props.navigation.navigate('About')} style={Style.ButtonMenu}>
                <Image source={require('../images/Fox_Icon.png')}/>
                <Text style={{fontSize: 20, color: "#22092C", marginStart: 6}}>Type of Foxes</Text>
            </Pressable>
        </View>
    )
}
const Style = StyleSheet.create(
    {
        ButtonMenu:{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F05941",
            margin: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30
        },

    }
)