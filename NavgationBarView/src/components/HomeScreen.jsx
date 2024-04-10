import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";

export default props => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#10353F"}}>
            <Pressable onPress={()=> props.navigation.navigate('Details')} style={{backgroundColor: "#2B4648", width: "90%", height: "25%", borderRadius: 24, flexDirection: "row", padding: 13}}>
                <View style={{justifyContent: "flex-end"}}>
                    <Image source={require('../images/CloudRain.png') } style={{width: 250, height: 250, position: "absolute", top: "-100%", left: "-10%"}}/>
                    <Text style={{color:"#FFF", fontSize: 30, fontWeight: "bold"}}>Heavy Rain</Text>
                    <Text style={{color:"#FFF", fontSize: 16, fontWeight: 400}}>Tonight</Text>
                </View>
                <View style={{position: "absolute", right: 0, padding: 10}}>
                    <Text style={{color:"#FFF", fontSize: 70, fontWeight: 900}}>26°</Text>
                    <Text style={{color:"#FFF", fontSize: 20, fontWeight: 500}}>Feels like 32°</Text>
                </View>
            </Pressable>
        </View>
    )
}