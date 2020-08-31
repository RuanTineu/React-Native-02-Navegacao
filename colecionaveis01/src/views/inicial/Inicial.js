import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styleinicial from './styleinicial';

function Inicial({navigation}) {
    
    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }

    const abrirItem = () => {
        navigation.navigate('Item')
    }

    return(
    <View style={styleinicial.container}>
        <View style={styleinicial.borda}>

            <Text style={styleinicial.texto}>Inicial</Text>

            <TouchableOpacity 
            style={styleinicial.botaoContainer }
            onPress={abrirColecao}
            >
                <Text style={styleinicial.botaoTexto}>Coleção</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styleinicial.botaoContainer}
            onPress={abrirItem}
            >
                <Text style={styleinicial.botaoTexto}>Item</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Inicial;