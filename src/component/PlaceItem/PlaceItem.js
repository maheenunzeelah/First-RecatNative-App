import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const PlaceItem=(props)=>(
 <View style={styles.inputContainer}>
 <TextInput style={styles.placeInput} placeholder="Name" onChangeText={props.handleChange} value={props.input} />
 <Button title="Add" style={styles.placeButton} onPress={props.handleAddPlace}/>
</View>
)

const styles = StyleSheet.create({
    
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%'
  
    },
    placeInput:{
      width:'70%',
      marginRight:2
    },
    placeButton:{
     width:'30%',
     color:'black'
    },
    ListContainer:{
      backgroundColor:'#FFFF00'
  }
  });
export default PlaceItem;
