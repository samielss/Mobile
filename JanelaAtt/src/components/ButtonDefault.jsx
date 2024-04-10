import React from "react";
import { Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons"

export default props => {
    return (
        <Pressable onPress={props.ButtonRoute} style={props.ButtonStyle}>
            <Text style={props.TextStyle}>{props.buttonText}</Text>
            <Icon name={props.name} size={props.size} color={props.color}/>
        </Pressable>
    )
}