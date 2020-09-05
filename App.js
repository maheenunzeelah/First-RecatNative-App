import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceOutput from './src/component/PlaceOutput/PlaceOutput';
import PlaceItem from './src/component/PlaceItem/PlaceItem';
import PlaceImage from './assets/download.jpg';
import PlaceDetail from './src/component/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    input: "",
    places: [],
    selectedItem: null
  }
  handleChange = (val) => {

    this.setState({
      input: val
    })
  }
  handleSubmit = () => {

    if (this.state.input.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          {
            key: Math.random(),
            name: prevState.input,
            image: {
              uri: 'https://www.fortywinks.com.au/getmedia/f4614e1e-9b00-476b-bdcd-e28afa3d34db/jackson_bed_frame-front.jpg?width=1000'
            }
          })
      }
    })
  }
  itemSelectedMethod = (key) => {
    this.setState(prevState => {
      return {
        selectedItem: prevState.places.find((place) => {
          return place.key === key
        })
      }
    })

  }
  ItemDeleted = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedItem.key
        }),
        selectedItem:null
      }
    })
  }
  modalClose=()=>{
    this.setState(
      {selectedItem:null}
    )
  }
  render() {


    return (
      <View style={styles.container}>
        <PlaceDetail selectedItem={this.state.selectedItem}
          onItemDeleted={this.ItemDeleted}
          onModalClosed={this.modalClose}
        />
        <PlaceItem handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          input={this.state.input} />

        <View style={styles.listContainer}>
          <PlaceOutput places={this.state.places}
           onItemSelected={this.itemSelectedMethod} />
        </View>
      </View>
    );
  }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#c8d5e8',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listContainer: {
    width: "100%",

  }
})