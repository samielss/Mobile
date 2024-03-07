import React from "react";
import { SafeAreaView, Text } from "react-native";
import Estilo from "./components/Estilo";
import Soma from "./components/Soma";

export default ()=>{
  return(
    <SafeAreaView style={Estilo.Body}>
      <Soma num1={2} num2={1}/>
    </SafeAreaView>
  )
}