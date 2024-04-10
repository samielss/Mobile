import React from "react";
import { SafeAreaView, View, Image, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import ButtonDefault from "../components/ButtonDefault";

export default props => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Image source={require("../images/Vector2.png")} style={{ margin: 20 }} />
            <View>
                <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "left" }}>Login</Text>
                <View style={{ borderBottomColor: "#CCC", borderBottomWidth: 2 }}>
                    <TextInput placeholder="@ Email ID" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="lock-closed-outline" />
                    <TextInput placeholder="Password" />
                    <ButtonDefault />
                </View>
                <ButtonDefault
                    buttonText="Login"
                    ButtonStyle={{ backgroundColor: "#0D49B8", width: "100%", padding: 1, borderRadius: 10 }}
                    TextStyle={{ color: "#FFF", fontSize: 20, fontWeight: 500, textAlign:"center" }}
                    ButtonRoute={() => props.navigation.navigate("Login")}
                />
            </View>
            <Text style={{textAlign:"center"}}>Or, login with...</Text>
            <View style={{flexDirection:"row"}}>
                <Icon.Button name="logo-google"/>
                <Icon.Button name="logo-facebook"/>
                <Icon.Button name="logo-twitter"/>
            </View>
            <View>
                <Text>New to the app?</Text>
                <ButtonDefault buttonText="Registrer" ButtonRoute={()=>props.navigation.navigate("Registrer")}/>
            </View>
        </View>
    )
}