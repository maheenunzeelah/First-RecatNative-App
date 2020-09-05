import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from '../ListItem/ListItem'

const PlaceOutput = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPress={()=>alert(`this has ID ${i}`)}/>
    ))
    return <View>
        {placesOutput}
    </View>
}
export default PlaceOutput;