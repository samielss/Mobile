import React from "react";
import {SafeAreaView, SafeAreaViewBase, Text } from "react-native";
import Estilo from "./Estilo";

export default (props) => {
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta * props.min)  
    return(
        <SafeAreaView>
            <Text style={Estilo.Fonte}>
                Número aleatório {aleatorio}
            </Text>
        </SafeAreaView>
    )
}