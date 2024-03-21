import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper"
import Estilo from "./Estilo";

import Icon from 'react-native-vector-icons/FontAwesome'
const myIcon = <Icon name="rocket" size={30} color="#900" />

export default (props) => {
    const [email, setEmail] = useState(email)
    const [password, setPassword] = useState(password)
    const [aviso, setAviso] = useState(aviso)

    Check = () => {
        if (email == "samukinha@gmail.com" && password == 1234) {
            setAviso("Bem vindo!!")
            // código a ser executado se a condição for verdadeira
        } else {
            setAviso("Usuário ou senha incorretos!")
        }
    }

    return (
        <SafeAreaView style={{paddingTop: 60}}>
                {/* <Text style={Estilo.Text}>Não tem usuário? Clique aqui</Text> */}
                <Text style={Estilo.Titulo}>Clean Food</Text>
                <Image source={require('../images/Prato1.png')} style={Estilo.Img} />
                <Text style={Estilo.Titulo}>Login</Text>
                <View style={Estilo.Input}>
                    <TextInput
                        placeholder="Insira seu e-mail"
                        label="Email"
                        keyboardType="email-address"
                        maxLength={30}
                        style={Estilo.Font}
                        onChangeText={value => setEmail(value)}
                        textColor="#FFECD6"
                        underlineColor="#FFECD6"
                        activeUnderlineColor="#FFECD6"
                    />
                    <TextInput
                        placeholder="Insira sua senha"
                        placeholderTextColor={"#FFF"}
                        style={Estilo.Font}
                        secureTextEntry={true}
                        label="Senha"
                        onChangeText={value => setPassword(value)}
                        textColor="#FFECD6"
                        underlineColor="#FFECD6"
                        activeUnderlineColor="#FFECD6"
                    />
                </View>

                <View style={Estilo.Button}>
                    {/* <Button title="Entrar" onPress={Check} color={"#FFECD6"}/> */}
                    <Button mode="contained" onPress={Check} buttonColor="#FFECD6" textColor="#483F68">
                        Entrar
                    </Button>
                    <Button mode="text" onPress={Check} textColor="#483F68">
                        Criar uma nova conta
                    </Button>
                </View>
                <Text style={Estilo.Text}>{aviso}</Text>
        </SafeAreaView>
    )
}