import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Modal, Image, TouchableOpacity } from "react-native"
import { Button } from "react-native-paper"
import HPLogo from "../assets/logoHP.jpg"
import Gryffindor from "../assets/gryffindor.jpg"
import Slytherin from "../assets/slytherin.jpg"
import Ravenclaw from "../assets/ravenclaw.jpg"
import Hufflepuff from "../assets/hufflepuff.jpg"


//const [modalVisible, setModalVisible] = useState("")



const CharacterDetails = ({
  modalVisible,
  setModalVisible,
  personaje
}) => {

  const [casaImage, setCasaImage] = useState()

  const selectHouse = (personaje) => {
    if(personaje.house === "Gryffindor"){
      console.log(personaje.house)
      setCasaImage("Gryffindor")
    }

  }

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        
      }}
      >
    <ScrollView style = {styles.scrollStyle} >
      <View style = {styles.centeredView}>
        <Image
        style = {{marginTop: 50, width:350, height:450, borderRadius:20}} 
        src={personaje.image}/>

        <View style = {styles.card}>
          <Image
          style = {{width:150, height:200, borderRadius: 20,}} 
          source={Gryffindor}/>
          <View style = {styles.TextContent}>
            <Text style = {{paddingVertical: 0, fontWeight: 'bold', textDecorationLine: 'underline' }}>Nombre: {personaje.name}</Text>
            <Text style = {{paddingVertical: 0, fontWeight: 'bold', textDecorationLine: 'underline' }}>F. Nacimiento: {personaje.dateOfBirth }</Text>
            
            <Text style = {{paddingVertical: 0, fontWeight: 'bold', textDecorationLine: 'underline' }}>Actor: {personaje.actor }</Text>
          </View>
          
        </View>

        <Text>Nombre: {personaje.name}</Text>
        <Text>Casa: {personaje.house}</Text>
        <Text>Fecha de nacimiento: {personaje.dateOfBirth}</Text>
        <Text>Interpretado: {personaje.actor}</Text>
        <Text>Mago: {personaje.wizzard ? "No" : "Si"}</Text>
        <Text>{personaje.hogwartsStudent ? "Estudiante" : ""}</Text>
        <Text>{personaje.hogwartsStaff ? "Profesor" : ""}</Text>
        <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)} 
            >
              <Text style={styles.buttonText}>Cerrar</Text> 
          </TouchableOpacity>         
      </View>
    </ScrollView>
    </Modal>
)}


const styles = StyleSheet.create({
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollStyle: {
    marginTop: 50,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#f1c40f",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#f1c40f'
  },
  buttonText: {
    color: '#f1c40f',
    fontSize: 18,
    fontWeight: 'bold',
    //fontFamily: 'HarryPotter',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginHorizontal: 60,
    marginVertical: 10,  
    minWidth: 350,
    backgroundColor: '#f1c40f',    
  },
  TextContent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CharacterDetails;