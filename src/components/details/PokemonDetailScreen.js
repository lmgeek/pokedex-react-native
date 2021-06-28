import React, { Component, Fragment} from 'react';
import {  View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import PokemonUtil from '../../utils/PokemonUtils';
import CardScreen from '../card/CardScreen';

class PokemonDetailScreen extends Component {

    pokeball = require('../../assets/poke-back2.png')

    constructor(props) {
        super(props);
        
        this.state = {
            specie:{},
            evolution_chain: []
        }
    }


    componentDidMount(){
        this.getPokemonSpecies();
    }

    getListTypes = () => {
        if(this.props.route.params.pokemon.types !== undefined){
            return this.props.route.params.pokemon.types.map(typeAux => {
                return (
                    <Text key={`${this.props.route.params.pokemon.name}-${typeAux.type.name}`} style={styles.type} >
                        {PokemonUtil.upperCaseFirstLetter(typeAux.type.name)}
                    </Text>);
            });
        }
    }

    getPokemonSpecies = () => {
        fetch(this.props.route.params.pokemon.species.url)
        .then(res => res.json())
        .then(res => {
            this.setState({specie:res});
        });
    }

    getEvlotuinChain = () => {
        if(this.state.specie.evolution_chain !== undefined){
            return (
                <Fragment>
                    <Text style={styles.title} >Evolution Chain</Text>
                    {/* <EvolutionChain urlEvolutionChain={this.state.specie.evolution_chain.url} /> */}
                </Fragment>
            );
        }
    }


    render () {

        // const { pokemon } = this.props;
        const pokemon = this.props.route.params.pokemon;
        const { specie } = this.state;

        console.log("PROPS==> ", pokemon.sprites.other.dream_world.front_default)
        return (
            <ScrollView contentContainerStyle={styles.container} >
                <View style={{ ...styles.header, backgroundColor: PokemonUtil.getColor(pokemon.types) }} >
                    <ImageBackground 
                        source={this.pokeball}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.info} >
                            <Text style={styles.name} >{PokemonUtil.upperCaseFirstLetter(pokemon.name)}</Text>
                            <View style={styles.types} >
                                {this.getListTypes()}
                            </View>
                            <View style={styles.teste} >
                                <Image style={styles.image} source={PokemonUtil.getImagePokemon(pokemon)} />
                                {/* <Image style={styles.image} source={pokemon.sprites.other.dream_world.front_default} /> */}
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.body} >
                    <Fragment>
                        <Text style={styles.title} >About</Text>
                        <Text style={styles.description} >{PokemonUtil.getDescriptionPokemon(specie.flavor_text_entries)}</Text>

                        <CardScreen>
                            <View style={styles.viewHeightWeight} >
                                <View style={styles.dataHeightWeight} >
                                    <Text style={styles.titleHeightWeight} >Height</Text>
                                    <Text>{PokemonUtil.getHeightPokemon(pokemon.height)}</Text>
                                </View>
                                <View style={styles.dataHeightWeight} >
                                    <Text style={styles.titleHeightWeight} >Weight</Text>
                                    <Text>{PokemonUtil.getWeightPokemon(pokemon.weight)}</Text>
                                </View>
                            </View>
                        </CardScreen>
                    </Fragment>
                    {this.getEvlotuinChain()}
                </View>

                <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="New Task"
                    onPress={() => console.log('notes tapped!')}>
                    <Icon name="back" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#3498db"
                    title="Notifications"
                    onPress={() => {}}>
                    <Icon
                    name="android-notifications-none"
                    style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1abc9c"
                    title="All Tasks"
                    onPress={() => {}}>
                    <Icon name="android-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                </ActionButton>
            </ScrollView>


            // <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //     Basic Example
            //     </Text>
            //     <ActionButton buttonColor="rgba(231,76,60,1)">
            //     <ActionButton.Item
            //         buttonColor="#9b59b6"
            //         title="New Task"
            //         onPress={() => console.log('notes tapped!')}>
            //         <Icon name="back" style={styles.actionButtonIcon} />
            //     </ActionButton.Item>
            //     <ActionButton.Item
            //         buttonColor="#3498db"
            //         title="Notifications"
            //         onPress={() => {}}>
            //         <Icon
            //         name="android-notifications-none"
            //         style={styles.actionButtonIcon}
            //         />
            //     </ActionButton.Item>
            //     <ActionButton.Item
            //         buttonColor="#1abc9c"
            //         title="All Tasks"
            //         onPress={() => {}}>
            //         <Icon name="android-done-all" style={styles.actionButtonIcon} />
            //     </ActionButton.Item>
            //     </ActionButton>
            // </View>

            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },

    header: {
        height: 250,
    },
    body: {
        flex: 0.3,
        marginTop:-20,
        paddingLeft:15,
        paddingRight:15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
    },
    title:{
        fontSize: 20,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold",
    },
    name: {
        fontSize: 30,
        color: "#303943",
        lineHeight: 42,
        fontFamily: "Circular Std",
        fontWeight: "bold",
        color: 'white'
    },
    info: {
        marginLeft: 15,
        height: "100%"
    },
    image: {
        height: 200,
        width: 200
    },
    types: {
        flexDirection: "row",
        marginTop: 5
    },
    type: {
        backgroundColor: "rgba(255,255,255,0.2)",
        fontSize: 11,
        color: "white",
        padding: 3,
        borderRadius: 15,
        marginRight: 5,
        textAlign: "center",
        width: 50
    },
    teste: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    description:{
        marginRight:15
    },
    card:{
        flexDirection:'row',
    },
    viewHeightWeight:{
        flexDirection:"row"
    },
    dataHeightWeight:{
        flex: 1,
        alignItems: "center",
        marginBottom:12,
        marginTop: 12,
        fontSize: 14,
    },
    titleHeightWeight: {
        color: "#acb0b4",
        marginBottom: 5
    },
    backgroundImage:{
        width:'100%',
        height: '100%',
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
    }
  });


export default PokemonDetailScreen;