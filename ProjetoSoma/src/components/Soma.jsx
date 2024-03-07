import React from "react";
import { SafeAreaView, Text } from "react-native";
import Estilo from "./Estilo";

export default (props)=>{
    const Soma = props.num1 + props.num2
  return(
    <SafeAreaView>
      <Text style={Estilo.Fonte}>{Soma}</Text>
    </SafeAreaView>
  )
}