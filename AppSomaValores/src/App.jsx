import React from "react";
import { SafeAreaView } from "react-native";
import Soma from "./components/Soma";
import Style from "./components/Style";

export default () =>{
    return <SafeAreaView style={Style.Main}>
      <Soma number1={1} number2={2}/>
    </SafeAreaView>
}