import React from "react";
import { StyleSheet } from "react-native";

export default Style = StyleSheet.create(
    {
        Main:{
            flex: 1,
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#222831"
        },
        TitleFont:{
            fontSize:20,
            textAlign: "center",
            color: "#EEEEEE",
            backgroundColor: "#76ABAE"
        },
        Font:{
            fontSize:30,
            color: "#EEEEEE",
            textAlign:"center",
            margin: 15
        },
        buttonStyle:{
            flexGrow: 2,
            flexDirection: "row",
            justifyContent: "space-evenly"
        }
    }
)