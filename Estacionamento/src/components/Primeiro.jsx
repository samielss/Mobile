import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";


export default () => {
    const FirstStyle = StyleSheet.create(
        {
            Fundo:{
                backgroundColor:"#5F5D9C",
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
                Hello World!
            </Text>
        </SafeAreaView>

    )
}