import React,{useState} from "react";
import { Text, SafeAreaView, StyleSheet, Button, Image } from "react-native";
import Estilo from "./Estilo";

export default props => {
// let numero = props.inicial

const [numero, setNumero] = useState(props.inicial)

const inc = () => {
    setNumero(numero + 1)
};
const desc = () => {
    setNumero(numero - 1) 
};

  return(
    <SafeAreaView style={Estilo.Fundo}>
      <Image source={require('../images/Count.png')}/>
      <Text style={Estilo.Title}>Contador</Text>
      <Text>{numero}</Text>
      <Button title="+" onPress={inc}/>
      <Button title="-" onPress={desc}/>
    </SafeAreaView>
  )
}