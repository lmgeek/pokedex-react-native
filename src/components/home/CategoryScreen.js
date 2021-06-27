import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

const pokeball = require('../../assets/poke-back.png')

const CategoryScreen = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={{...styles.category,backgroundColor:props.color}} >
            <Text style={styles.title} >{props.children}</Text>
                <Image source={pokeball} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    category: {
        height: 80,
        width: "100%",
        borderRadius: 20,
        marginBottom: 10,
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
    },
    title: {
        color: "#FFF",
        fontSize: 14,
        marginLeft: 20,
        fontWeight: "bold",
        zIndex: 10,
        textAlign: 'left',
    },
    image:{
        marginLeft: 20,
        width: 100,
        height: 80,
        zIndex: 0,
        alignSelf: 'flex-end',
    },
});

export default CategoryScreen;