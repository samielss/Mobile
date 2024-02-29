import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Janela from './components/Janela';
import Segunda from './components/Segunda';
import Terceiro from './components/Terceiro';
import Estilo from './components/Estilo';

export default ()=>{
    return(
        <View style={Estilo.Fundo}>
            <Janela style={Estilo.Fonte}/>
            <Segunda/>
            <Terceiro/>
        </View>
    )
};