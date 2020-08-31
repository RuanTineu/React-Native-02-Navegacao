import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styleinicial from './styleitem';

function Item({navigation}) {

    const voltarInicial = () => {
        navigation.goBack()
    }

    return(
    <View style={styleinicial.container}>
        <View style={styleinicial.borda}>

            <Text style={styleinicial.texto}>Item</Text>

            <TouchableOpacity 
            style={styleinicial.botaoContainer}
            onPress={voltarInicial}
            >
                <Text style={styleinicial.botaoTexto}>Voltar</Text>
            </TouchableOpacity>

        </View>
    </View>
    )
}

export default Item;