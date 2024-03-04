import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";
import Style from "./components/Style";

export default () => {
  return(
    <SafeAreaView style={Style.Fundo}>
          <Primeiro/>
          <Segundo/>
          <Terceiro/>
    </SafeAreaView>
  )
}