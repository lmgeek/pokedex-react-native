import React, { Component} from 'react';
import { Text, FlatList, View, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http'
import PokemonItem from './pokemonsItem';

class PokemonsScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons:[],
            loading: false,
            offset: 0,
            size: 20
        }
    }

    componentDidMount(){
        this.loadMorePokemons();
    }

    loadMorePokemons = async () => {
        const res = await Http.instance.get(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=${this.state.size}`)

        let pokemons = [...this.state.pokemons,...res.results];

        this.setState({
            pokemons,
            loading: false,
            offset: this.state.offset + this.state.size

        })
    }

    handlePress = () => {
        console.log("Goto Details", this.props)

        this.props.navigation.navigate('Detail')
    }

    render () {

        const  { pokemons } = this.state;
        console.log("POKE", pokemons)
        return (
            <View>
                <Text style={styles.title} >Pokedex</Text>
                <FlatList
                    data={pokemons}
                    //renderItem={({ item }) => <PokemonItem item={item}/>}
                    renderItem={({ item, index}) => {
                        return <View style={{marginLeft:(index%2)*10,flex:1}} ><PokemonItem /*onPress={this.goPokemon.bind(this)}*/ url={item.url}/></View>
                    }}
                    keyExtractor={item => item.name}
                    numColumns={2}
                    onEndReached={this.loadMorePokemons}
                    onEndReachedThreshold={0.1}
                />
                <Text>
                    Pokemons Screen
                </Text>
                <Pressable onPress={this.handlePress}>
                    <Text>Show Detail</Text>
                </Pressable>
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
    loading:{
        marginTop: 10,
    }
});


export default PokemonsScreen;