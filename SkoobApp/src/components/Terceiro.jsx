import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default() => {
    const terceiroEstilo = StyleSheet.create(
        {
            bFundo:{
                backgroundColor: "red"
            }
        }
    )
    return (
        <View style={terceiroEstilo.bFundo}>
            <Text>Haha</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    )

}