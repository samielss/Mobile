import React from "react";

import { View, Text } from "react-native";
import Estilo from "./Estilo";

export default (props) => {
    console.warn(props)
  return(
    <View style={Estilo.Fundo}>
        <Text style={Estilo.Fonte}>Aleatório</Text>
    </View> 
  )
}