import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";


export default () => {
    const FirstStyle = StyleSheet.create(
        {
            Fundo:{
                backgroundColor:"#F4EDCC",
                flex:1,
                alignItems:"center",
                justifyContent:"center"
            },
            Font: {
                color: "#5F5D9C",
                fontSize:20
            }
        }
    )

    return (
        <SafeAreaView style={FirstStyle.Fundo}>
            <Text style={FirstStyle.Font}>
            こんにちは世界!
            </Text>
        </SafeAreaView>

    )
}