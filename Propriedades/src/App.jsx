import React from "react";

import { View, Text } from "react-native";
import Estilo from "./components/Estilo";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Texto from "./components/Texto";

export default () => {
  return(
    <View style={Estilo.Fundo}>
      <Texto texto="Aleatório"></Texto>
      <View>
      <Aleatorio min={1} max={60}/>
      <Aleatorio min={1} max={60}/>
      <Aleatorio min={1} max={60}/>
      <Aleatorio min={1} max={60}/>
      <Aleatorio min={1} max={60}/>
      <Aleatorio min={1} max={60}/>
      </View>
    </View>
  )
} 