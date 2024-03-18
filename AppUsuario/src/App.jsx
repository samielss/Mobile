import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Login from "./components/Login";
import Estilo from "./components/Estilo";

export default () => {
  return (
    <SafeAreaView style={Estilo.Main}>
      <Login/>
    </SafeAreaView>
  )
}