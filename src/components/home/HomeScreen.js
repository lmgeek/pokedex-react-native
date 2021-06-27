import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import SearchScreen from '../search/SearchScreen';

import CategoryScreen from '../home/CategoryScreen';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons:[],
            loading: false,
            offset: 0,
            size: 20
        }
    }

    goPokedex = (name) => {
        // Navigation.push(props.componentId,{
        //     component: {
        //         name: 'Pokedex',
        //     },
        // });
        console.log("Goto Details", name)

        // this.props.navigation.navigate('Detail')
    }
    render () {
        return (
            <View>
                <Text style={styles.title}>What Pokemon{'\n'}are you looking for?</Text>
                <SearchScreen />
                <View style={styles.containerCategory} >
                    <View style={styles.groupCategory} >
                        <CategoryScreen onPress={() => { this.props.navigation.navigate('Pokemons') }} color="#4FC1A6">Pokedex</CategoryScreen>
                        <CategoryScreen color="#77C4FE">Abilities</CategoryScreen>
                        <CategoryScreen color="#C8A2C8">Locations</CategoryScreen>
                    </View>
                    <View style={styles.groupCategory} >
                        <CategoryScreen color="#F7786B">Moves</CategoryScreen>
                        <CategoryScreen color="#FFCE4B">Items</CategoryScreen>
                        <CategoryScreen color="#B1736C">Type Charts</CategoryScreen>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold"
    },
    groupCategory: {
        width: "45%",
        marginLeft: 5,
        marginRight: 5,
    },
    containerCategory: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default Home;