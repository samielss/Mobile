import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CentralText from "./components/CentralText";

export default (props) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#C6EBC5" }}>
      <View style={{ flexDirection: "row", flexGrow: 1 }}>
        <CentralText children="音" backgroundColor="#FA7070" />
        <CentralText children="訓" textColor="#FA7070" backgroundColor="#FEFDED" />
      </View>
      <View style={{ flexDirection: "row", flexGrow: 1 }}>
        <CentralText children="画数" textColor="#FA7070" backgroundColor="#FEFDED" />
        <CentralText children="意味" backgroundColor="#FA7070" />
      </View>
      <View style={{ flexDirection: "row", flexGrow: 1 }}>
        <CentralText children="意味" backgroundColor="#FA7070" />
        <CentralText children="成り立ち" textColor="#FA7070" backgroundColor="#FEFDED" />
      </View>
      <View style={{ flexDirection: "row", flexGrow: 1 }}>
        <CentralText children="成り立ち" textColor="#FA7070" backgroundColor="#FEFDED" />
        <CentralText children="画数" backgroundColor="#FA7070" />
      </View>
    </SafeAreaView>
  )
}