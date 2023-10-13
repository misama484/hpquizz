import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Modal } from "react-native"
import { Button } from "react-native-paper"


const [modalVisible, setModalVisible] = useState(False)

const CharacterDetails = (props) => {


setModalVisible(props.visible)
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(False);
      }}
      >
    <ScrollView >
      <View style = {styles.centeredView}>
        <Text>{props.name}</Text>
          
      </View>
    </ScrollView>
    </Modal>
)}


const styles = StyleSheet.create({
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }
})
export default CharacterDetails;