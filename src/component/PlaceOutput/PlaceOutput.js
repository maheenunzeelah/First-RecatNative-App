import React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,ScrollView,FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem'

const PlaceOutput = (props) => {
   
    return <FlatList 
    data={props.places}
    renderItem={(info)=>{
    
      return  <ListItem placeName={info.item.name} placeImage={info.item.image} onItemPress={()=>props.onItemSelected(info.item.key)}/>
    }}

    />
           

}
export default PlaceOutput;