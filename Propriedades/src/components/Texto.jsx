import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Estilo from "./Estilo";

export default (props)=>{
    return(
        <SafeAreaView>
            <Text style={Estilo.FonteTitulo}>
                {props.texto}
            </Text>
        </SafeAreaView>
    )
}