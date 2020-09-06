import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceOutput from './src/component/PlaceOutput/PlaceOutput';
import PlaceItem from './src/component/PlaceItem/PlaceItem';
import PlaceImage from './assets/download.jpg';
import PlaceDetail from './src/component/PlaceDetail/PlaceDetail';
import { addPlace, handleChange, deletePlace, selectPlace, unselectPlace } from './src/store/actions';

class App extends React.Component {
 
  handleChange = (val) => {
    this.props.handleChange(val)
  }
  handleAddPlace = () => {

   this.props.addPlaces();

  }
  ItemDeleted = () => {
   this.props.deletePlace()
  }
  modalClose = () => {
    this.props.unselectPlace()
  }
  itemSelectedMethod=(key)=>{
  this.props.selectPlace(key)
  }
  render() {


    return (
      <View style={styles.container}>
        <PlaceDetail selectedItem={this.props.selectedPlace}
          onItemDeleted={this.ItemDeleted}
          onModalClosed={this.modalClose}
        />
        <PlaceItem handleSubmit={this.handleAddPlace}
          handleChange={this.handleChange}
          input={this.props.input} />

        <View style={styles.listContainer}>
          <PlaceOutput places={this.props.places}
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
const mapStateToProps = (state) => {
  console.log(state.places.selectedItem)
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedItem,
    input:state.places.input
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange:(val) => dispatch(handleChange(val)) ,
    addPlaces:() =>  dispatch(addPlace()) ,
    deletePlace:() => { dispatch(deletePlace()) },
    selectPlace:(key) => { dispatch(selectPlace(key)) },
    unselectPlace:() => { dispatch(unselectPlace()) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App) 