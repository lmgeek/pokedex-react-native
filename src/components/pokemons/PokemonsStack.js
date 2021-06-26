import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonsScreen from './PokemonsScreen';
import PokemonDetailScreen from '../details/PokemonDetailScreen';

const Stack = createStackNavigator();

const PokemonsStack = () => {

    return (
        <Stack.Navigator>
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

export default PokemonsStack;