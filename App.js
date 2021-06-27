/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsStack from './src/components/pokemons/PokemonsStack';
import AppStack from './src/AppStack';

const App = () => {

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
    
  );
};



export default App;
