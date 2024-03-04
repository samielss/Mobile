import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";


export default () => {
    const FirstStyle = StyleSheet.create(
        {
            Fundo:{
                backgroundColor:"#A4CE95",
                flex:1,
                alignItems:"center",
                justifyContent:"center"
            },
            Font: {
                color: "#FFE6E6",
                fontSize:20
            }
        }
    )

    return (
        <SafeAreaView style={FirstStyle.Fundo}>
            <Text style={FirstStyle.Font}>
                Olá Mundo!
            </Text>
        </SafeAreaView>

    )
}