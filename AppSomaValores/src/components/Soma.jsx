import React, {useState} from "react";
import { Text, SafeAreaView, View, Button } from "react-native";
import Style from "./Style";

export default props => {
    const number1 = props.number1

    const number2 = props.number2

    
    const [result, setResult] = useState(result)

     soma = () =>{
        setResult(number1+number2)
    }
     sub = () =>{
        setResult(number1-number2)
    }

    return(
        <View>
        <Text style={Style.TitleFont}>Soma Valores</Text>
        <Text style={Style.Font}>Primeiro valor: {number1}</Text>
        <Text style={Style.Font}>Segundo Valor: {number2}</Text>
        <View style={Style.buttonStyle}>
        <Button title="Somar" onPress={soma} color="#76ABAE"/>
        <Button title="Subtrair" onPress={sub} color="#76ABAE"/>
        </View>
        <Text style={Style.Font}>Resultado: {result}</Text>
        </View>
    )
}