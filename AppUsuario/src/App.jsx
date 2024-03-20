import React from "react";
import { StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import Login from "./components/Login";
import Estilo from "./components/Estilo";

export default () => {
  return (
    <ImageBackground source={require('./images/Background_Mobile.png')} resizeMode="cover" style={Estilo.Img} >
    <SafeAreaView style={Estilo.Main}>
            <Login />
    </SafeAreaView>
    </ImageBackground>
  )
}