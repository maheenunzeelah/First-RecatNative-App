import React from 'react';
import { Modal, View, Button ,Image,Text, StyleSheet} from 'react-native';


const PlaceDetail = (props) => {
    let modalContent=null
    if(props.selectedItem){
        modalContent=(<View>
            <Image source={props.selectedItem.image} style={styles.imgStyle}/>
            <Text style={styles.txt}>{props.selectedItem.name}</Text>
        </View>)
    }
    return (
        <Modal 
        onRequestClose={props.onModalClosed}
        visible={props.selectedItem!=null} 
        animationType="slide">
        <View>
           {modalContent}
            <View style={styles.buttons}>
                <Button title="Delete" color='red'onPress={props.onItemDeleted  }/>
                <Button title="close"onPress={props.onModalClosed}/>
            </View>
        </View>
        </Modal>
    )
}
const styles={
imgStyle:{
    width:'100%',
    height:200,
    margin:10
},
txt:{
    fontWeight:'bold',
    textAlign:'center'
},
buttons:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
   justifyContent:'space-around',
   marginTop:50,
   }
}
export default PlaceDetail;