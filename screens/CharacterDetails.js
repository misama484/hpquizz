import { useEffect, useState } from 'react';
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
  const [student, SetStudent] = useState()
  const [ wizard, setWizard] = useState()
  const [ ancestry, setAncestry] = useState()

  const selectHouse = (personaje) => {
    if(personaje.house === "Gryffindor"){      
      setCasaImage(Gryffindor)
    }
    else if(personaje.house === "Slytherin"){
      setCasaImage(Slytherin)      
    }
    else if(personaje.house === "Ravenclaw"){
      setCasaImage(Ravenclaw)      
    }
    else if(personaje.house === "Hufflepuff"){
      setCasaImage(Hufflepuff)
    }
  }

  const showStudent = (personaje) => {
    if(personaje.hogwartsStudent === true){
      SetStudent("Estudiante")
    }
    else if(personaje.hogwartsStaff === true){
      SetStudent("Profesor")
    }
    else{
      SetStudent("")
    }
  }

  const showAncestry = (personaje) => {
    if(personaje.ancestry === "pure-blood"){
      setAncestry("Sangre Pura")
    }
    else if(personaje.ancestry === "half-blood"){
      setAncestry("Sangre Mestiza")
    }
    else if(personaje.ancestry === "muggleborn"){
      setAncestry("Muggle")
    }
    else{
      setAncestry("")
    }
  }
  const showWizard = (personaje) => {
    if(personaje.wizard === true){
      setWizard("Mago")
    }
    else if(personaje.wizard === false){
      setWizard("")
    }
  }

  useEffect(() => {
    selectHouse(personaje)
    showStudent(personaje)
    showAncestry(personaje)
    showWizard(personaje)
  })

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
        style = {{marginTop: 20, width:350, height:450, borderRadius:20}} 
        src={personaje.image}/>

        <View style = {styles.card}>
          <Image
          style = {{width:150, height:200, borderRadius: 20}} 
          source={casaImage}/>
          <View style = {styles.TextContent}>
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>Nombre: {personaje.name}</Text>
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>{student}</Text>
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>{ancestry}</Text>
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>{wizard}</Text>
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>F. Nacimiento: {personaje.dateOfBirth }</Text>           
            <Text style = {{paddingVertical: 1, fontWeight: 'bold', }}>Actor: {personaje.actor }</Text>           
          </View>
          
        </View>
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
    marginTop: 100,
    marginBottom: 90,
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
    marginVertical: 30,  
    minWidth: 350,
    backgroundColor: '#f1c40f',
    padding: 5, 
  },
  TextContent:{
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal: 10
  },
})
export default CharacterDetails;