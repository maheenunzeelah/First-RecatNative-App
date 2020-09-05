import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TouchableNativeFeedback ,Image} from 'react-native';


const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.textInp} >
        <Image source={props.placeImage} style={styles.imageStyle}/>
        <Text >{props.placeName}</Text>
    </View>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    textInp: {
        backgroundColor: '#ebeef2',
        width: '100%',
        padding: 10,
        margin:5,
        flexDirection:'row',
        alignItems:'center'
    },
    imageStyle:{
        width:30,
        height:30,
        marginRight:8
    }
})
export default ListItem;

