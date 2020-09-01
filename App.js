import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
  console.log("hello1")
    const placesOutput=this.state.places.map(place=>(
      <Text>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.placeInput} placeholder="Name" onChangeText={this.handleChange} value={this.state.input} />
          <Button title="Add" style={styles.placeButton} onPress={this.handleSubmit}/>
        </View>
        <View>
          
          {placesOutput}
        </View>
        <StatusBar style="auto" />
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
   width:'30%'
  }
});
