import React from "react";
import { StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import Login from "./components/Login";
import Estilo from "./components/EstiloLogin";
import CadastroCliente from "./components/CadastroCliente";

export default () => {
  return (
    <SafeAreaView style={Estilo.Main}>
      <ImageBackground source={require('./images/Background_Mobile.png')} resizeMode="cover" style={{width: '100%', height: '100%', flex: 1}} >
        <CadastroCliente/>
      </ImageBackground>
    </SafeAreaView>
  )
}