import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Contador from "./components/Contador";
import Estilo from "./components/Estilo";

export default () => {
  return(
      <Contador inicial={20}/>
  )
}