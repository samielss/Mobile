import React from "react";
import { View, Text } from "react-native";

export default props => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.backgroundColor || '#000'
        }}>
            <Text 
            style={{ 
                fontSize: 20,
                color: props.textColor || '#FFF'
             }}>{props.children}</Text>
        </View>
    )
}
