import React from "react";
import { Image, Pressable, TextInput, View, Text } from "react-native";
import Estilo from "./Estilo";

export default () => {
    return(
    <View style={{marginTop: 60, marginHorizontal: 20}}>
        <Image source={require('../../Image/FOXHUB_Icon.png')}/>

        <View style={{marginVertical: 60}}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: "black"}}>Welcome Back,</Text>
            <Text style={{fontSize:18}}>Sing in to continue</Text>
        </View>

        <View style={Estilo.Input}>
            <Image source={require('../../Image/Email_Icon.png')} style={{marginRight:"4%"}}/>
            <TextInput placeholder="E-mail" keyboardType="email-address" />
        </View>

        <View style={Estilo.Input}>
            <Image source={require('../../Image/Password_Icon.png')} style={{marginRight:"4%"}}/>
            <TextInput placeholder="Password"  secureTextEntry={true}/>
        </View>

        <Pressable style={Estilo.Button}>
            <Text style={{color:"#FFF"}}>Sing in</Text>
        </Pressable>

        <Text>Or</Text>
    <View>
        <Pressable>
            <Text>Sing in with</Text>
            <Image source={require('../../Image/Facebook_Icon.png')}/>
        </Pressable>
        <Pressable>
            <Text>Sing in with</Text>
            <Image source={require('../../Image/Google_Icon.png')}/>
        </Pressable>
        </View>
    </View>
    )
}