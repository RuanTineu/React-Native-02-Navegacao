import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicial from './src/views/inicial/Inicial';
import Colecao from './src/views/colecao/Colecao';
import Item from './src/views/items/Item';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>

    <StatusBar barStyle="light-content" backgroundColor="#o81a31" />

    <Stack.Navigator>

        <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={
            {
                cardStyle: styles.screenInicial,
                headerStyle: {backgroundColor: '#14417b'},
                headerTintColor:'#FFFFFF',
            }
        }
        />
        <Stack.Screen
        name="Colecao"
        component={Colecao}
        options={
            {
                cardStyle: styles.screenColecao,
                headerStyle: {backgroundColor: '#14417b'},
                headerTintColor:'#FFFFFF',
            }
        }
        />

        <Stack.Screen
        name="Item"
        component={Item}
        options={
            {
                cardStyle: styles.screenItem,
                headerStyle: {backgroundColor: '#14417b'},
                headerTintColor:'#FFFFFF',
            }
        }
        />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenInicial: {
    backgroundColor: '#92afd7'
},
  screenColecao: {
    backgroundColor: '#d0f4ea'
},
  screenItem: {
    backgroundColor: '#d1d1d1'
}
});


