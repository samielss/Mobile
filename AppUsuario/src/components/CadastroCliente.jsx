import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper"
import EstiloCadastro from "./EstiloCadastro";

export default props => {
    return (
        <SafeAreaView style={{ backgroundColor: "#00224D", flex: 1 }}>
            <View style={EstiloCadastro.Header}>
                <Image source={require("../images/SecurityIcon.png")} />
                <Text style={EstiloCadastro.Titulo}>Cadastro Usuário</Text>
            </View>
            <View style={EstiloCadastro.Main}>
                <TextInput style={EstiloCadastro.Input}
                    placeholder="Nome"
                    placeholderTextColor={"#FF204E"}
                    maxLength={50}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
                <TextInput style={EstiloCadastro.Input}
                    placeholder="Email"
                    placeholderTextColor={"#FF204E"}
                    keyboardType="email-address"
                    maxLength={30}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
                <TextInput style={[EstiloCadastro.Input, { width: "70%" }]}
                    placeholder="Telefone"
                    placeholderTextColor={"#FF204E"}
                    keyboardType="phone-pad"
                    maxLength={11}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
                <TextInput style={EstiloCadastro.Input}
                    placeholder="Endereço"
                    placeholderTextColor={"#FF204E"}
                    maxLength={30}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
                <View style={EstiloCadastro.Divisao}>
                    <TextInput style={[EstiloCadastro.Input, { width: "40%" }]}
                        placeholder="Número"
                        placeholderTextColor={"#FF204E"}
                        keyboardType="number-pad"
                        maxLength={6}
                        textColor="#FF204E"
                        underlineColor="#FF204E"
                        activeUnderlineColor="#FF204E"
                        outlineColor="#FF204E"
                        mode="outlined"
                    ></TextInput>
                    <TextInput style={[EstiloCadastro.Input, { width: "50%" }]}
                        placeholder="CEP"
                        placeholderTextColor={"#FF204E"}
                        keyboardType="number-pad"
                        maxLength={9}
                        textColor="#FF204E"
                        underlineColor="#FF204E"
                        activeUnderlineColor="#FF204E"
                        outlineColor="#FF204E"
                        mode="outlined"
                    ></TextInput>
                </View>
                <TextInput style={EstiloCadastro.Input}
                    placeholder="Cidade"
                    placeholderTextColor={"#FF204E"}
                    maxLength={30}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
                <TextInput style={EstiloCadastro.Input}
                    placeholder="Estado"
                    placeholderTextColor={"#FF204E"}
                    maxLength={10}
                    textColor="#FF204E"
                    underlineColor="#FF204E"
                    activeUnderlineColor="#FF204E"
                    outlineColor="#FF204E"
                    mode="outlined"
                ></TextInput>
            </View>
            <View style={[EstiloCadastro.Divisao, { justifyContent: "center", alignItems: "center" }]}>
                <Button style={EstiloCadastro.Button}
                    mode="outlined"
                    outlineColor="#FF204E"
                    underlineColor="#FF204E"
                    buttonColor="transparent"
                    textColor="#FF204E"
                >Cadastrar</Button>
                <Button style={EstiloCadastro.Button}
                    mode="outlined"
                    outlineColor="#FF204E"
                    underlineColor="#FF204E"
                    textColor="#FF204E"
                >Alterar</Button>
            </View>
            <View style={[EstiloCadastro.Divisao, { justifyContent: "center", alignItems: "center" }]}>
                <Button style={EstiloCadastro.Button}
                    mode="outlined"
                    outlineColor="#FF204E"
                    underlineColor="#FF204E"
                    textColor="#FF204E"
                >Excluir</Button>
                <Button style={EstiloCadastro.Button}
                    mode="outlined"
                    outlineColor="#FF204E"
                    underlineColor="#FF204E"
                    textColor="#FF204E"
                >Pesquisar</Button>
            </View>
        </SafeAreaView>
    )
}