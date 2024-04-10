import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import Icons from "react-native-vector-icons/Ionicons"

export default props => {

    function Class (props) {
        return(
            <View>
                <Image source={require("../image/StarIcon.png")}/>
                <Text>{props.points}</Text>
            </View>
        )
    }
    return(
        <View style={{flexDirection:"row"}}>
            <Image source={require("../image/HomemAranha.png")} width={10}/>
            <View>
                <Text>Before The Rain</Text>
                <Text>By: Me</Text>
                <Class/>
                <Text>Fiction</Text>
            </View>
            <View style={{flexDirection:"row", alignSelf: "center"}}>
                <Icons.Button name="eye"/>
                <Icons.Button name="play"/>
            </View>
        </View>
    )
}