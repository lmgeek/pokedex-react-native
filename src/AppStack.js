import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home/HomeScreen';
import PokemonsScreen from './components/pokemons/PokemonsScreen';
import PokemonDetailScreen from './components/details/PokemonDetailScreen';

const Stack = createStackNavigator();

const AppStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="Pokemons"
                component={PokemonsScreen}
                options={{
                    title: 'Pokemons',
                }}
            />

            <Stack.Screen
                name="Detail"
                component={PokemonDetailScreen}
                options={{
                    title: 'Pokemon Detail',
                }}
            />
        </Stack.Navigator>
    );
}

export default AppStack;