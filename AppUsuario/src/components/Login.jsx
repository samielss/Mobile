import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, Button, View } from "react-native";
import { TextInput } from "react-native-paper"
import Estilo from "./Estilo";

import Icon from 'react-native-vector-icons/FontAwesome'
const myIcon = <Icon name="rocket" size={30} color="#900" />

export default (props) => {
    const [email, setEmail] = useState(email)
    const [password, setPassword] = useState(password)
    const [aviso, setaviso] = useState(aviso)

    Check = () => {
       setaviso("Usuário correto!!")
    }

    return (
        <SafeAreaView>
            <Image source={require('../images/User.png')} style={Estilo.Img} />

            <View style={Estilo.Input}>
                <TextInput
                    placeholder="Insira seu e-mail"
                    placeholderTextColor={"#FFF"}
                    label="Email"
                    keyboardType="email-address"
                    maxLength={30}
                    style={Estilo.Font}
                    onChangeText={ value => setEmail(value)}
                    mode="outlined"
                    Icon name="rocket" size={30} color="#900" 
                />
                <TextInput
                    placeholder="Insira sua senha"
                    placeholderTextColor={"#FFF"}
                    style={Estilo.Font}
                    secureTextEntry={true}
                    label="Senha"
                    onChangeText={ value => setPassword(value)}
                />
                <Text style={Estilo.Text}>Não tem usuário? Clique aqui</Text>
            </View>

            <View style={Estilo.Button}>
                <Button title="Entrar" onPress={Check} color={"#FF204E"}/>
                <Button title="Sair" color={"#FF204E"} />
            </View>
            <Text style={Estilo.Text}>{aviso}</Text>
        </SafeAreaView>
    )
}