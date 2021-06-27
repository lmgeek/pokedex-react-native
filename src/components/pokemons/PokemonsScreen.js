import React, { Component} from 'react';
import { Text, FlatList, View, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http'
import PokemonItem from './pokemonsItem';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


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
            <View style={styles.container}>
                <Text style={styles.title} >Pokedex</Text>

                <Pressable onPress={this.handlePress}>
                    <Text>Show Detail</Text>
                </Pressable>

                <ActionButton buttonColor="rgba(108,70,1176,1)" style={styles.actionButton}>
                    <Icon name="ios-ellipsis-horizontal-sharp" />
                    <ActionButton.Item
                        buttonColor="#9b59b6"
                        title="My favorites pokemons"
                        onPress={() => console.log('notes tapped!')}>
                        <Icon name="ios-heart" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor="#3498db"
                        title="All types"
                        onPress={() => {}}>
                        <Icon
                        name="ios-earth"
                        style={styles.actionButtonIcon}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor="#1abc9c"
                        title="Search"
                        onPress={() => {}}>
                        <Icon name="ios-search" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
                
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    actionButton: {
        zIndex: 9999
    }
});


export default PokemonsScreen;