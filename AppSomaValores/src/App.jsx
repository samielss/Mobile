import React from "react";
import { SafeAreaView } from "react-native";
import Soma from "./components/Soma";
import Style from "./components/Style";
import EntradaTexto from "./components/EntradaTexto";

export default () =>{
    return <SafeAreaView style={Style.Main}>
      <EntradaTexto/>
    </SafeAreaView>
}