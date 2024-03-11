import React, {useState} from "react";
import { Text, SafeAreaView, View, Button } from "react-native";
import Style from "./Style";

export default props => {
    const [number1, setNumber1] = useState(props.number1)

    const [number2, setNumber2] = useState(props.number2)
    
    const [result, setResult] = useState(result)

    const soma = () =>{
        setResult({setNumber1}+{setNumber2})
    }

    return(
        <View>
        <Text style={Style.Font}>Soma Valores</Text>
        <Text style={Style.Font}>Primeiro valor:</Text>
        <Text style={Style.Font}>{number1}</Text>
        <Text style={Style.Font}>Segundo Valor:</Text>
        <Text style={Style.Font}>{number2}</Text>
        <Button title="Somar" onPress={soma}/>
        <Text style={Style.Font}>{result}</Text>
        </View>
    )
}