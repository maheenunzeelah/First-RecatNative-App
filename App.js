import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceOutput from './src/component/PlaceOutput/PlaceOutput';
import PlaceItem from './src/component/PlaceItem/PlaceItem';

export default class App extends React.Component {
  state = {
    input: "",
    places:[]
  }
  handleChange = (val) => {
    
    this.setState({
      input: val
    })
  }
  handleSubmit=()=>{
    
    if(this.state.input.trim()===''){
       return
    }
    
     this.setState(prevState=>{
       return {
         places:prevState.places.concat(prevState.input)
        }
     })  
  }
  render() {
  
   
    return (
      <View style={styles.container}>
       
       <PlaceItem handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.input} />
       <View style={styles.listContainer}>
       <PlaceOutput places={this.state.places}/>
       </View>
      </View>
    );
  }

  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listContainer:{
    width:"100%",
    
  }
})