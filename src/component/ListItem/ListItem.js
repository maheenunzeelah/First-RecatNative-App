import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TouchableNativeFeedback } from 'react-native';


const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.textInp} >
        <Text>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    textInp: {
        backgroundColor: '#FFFF00',
        width: '100%',
        padding: 10,
        margin:5
    }
})
export default ListItem;

