import React from "react";
import { SafeAreaView, Text, Image, View, TextInput, Pressable } from "react-native";
import Login from "./components/Login";
import Estilo from "./components/Estilo"

export default () => {
    return (
        <SafeAreaView style={Estilo.Main}>
            <Login/>
        </SafeAreaView>
    )
}