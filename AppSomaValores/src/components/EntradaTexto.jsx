import React, {useState} from "react";
import { Text, SafeAreaView, View, Button, TextInput, StyleSheet } from "react-native";
import Style from "./Style";

export default props => {
    const [text, setText] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const Estilo = StyleSheet.create(
        {
            Input:{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: "#EEEEEE",
                borderColor: "#EEEEEE"
            }
        }
    )
    return(
        <View>
            <Text style={Style.Font}>Entrada de Texto</Text>
            <TextInput style={Estilo.Input} 
            keyboardType="email-address" 
            onChangeText={setText} 
            value={text} placeholder="Insira um e-mail" 
            placeholderTextColor={"#EEEEEE"}
            maxLength={20}
            />
            <TextInput style={Estilo.Input} 
            keyboardType="numeric" 
            onChangeText={setNumber} 
            value={number} placeholder="Insira um número" 
            placeholderTextColor={"#EEEEEE"}
            maxLength={1}
            />
            <TextInput style={Estilo.Input} 
            keyboardType="visible-password" 
            onChangeText={setPassword} 
            value={password} placeholder="Insira uma senha" 
            placeholderTextColor={"#EEEEEE"}
            maxLength={10}
            />
        </View>
    )
}