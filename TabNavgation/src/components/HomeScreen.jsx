import React from "react";
import { SafeAreaView, View } from "react-native";
import CardBook from "../helpers/CardBook";

export default props => {
    return(
        <View style={{flex: 1, backgroundColor: "#FBF9F1"}}>
            <CardBook/>
        </View>
    )
}