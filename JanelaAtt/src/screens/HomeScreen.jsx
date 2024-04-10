import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import ButtonDefault from "../components/ButtonDefault";
import Icon from "react-native-vector-icons/"

export default props => {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center", justifyContent: "space-between", padding:20 }}>
            <Text style={{ fontSize: 40, textAlign: "center", color: "#202F48", fontWeight: "bold" }}>GAMEON</Text>
            <Image source={require("../images/GameVector.png")} />
            <ButtonDefault
                buttonText="Let's Begin"
                name="arrow-right" size={20} color="#FFF"
                ButtonStyle={{ backgroundColor: "#0D49B8", width: "100%", flexDirection: "row", justifyContent: "space-between", padding: 14, borderRadius: 10, alignItems:"center"}}
                TextStyle={{ color: "#FFF", fontSize:20, fontWeight:500}}
                ButtonRoute={()=> props.navigation.navigate("Login")}
                 />
        </View>
    )
}