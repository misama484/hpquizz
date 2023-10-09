//SCREEN QUE MUESTRA INFO DE HARRY POTTER DESDE UNA API
import { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import HPLogo from "../assets/logoHP.jpg"
import CharacterDetails from './CharacterDetails';



//conectamos a la API
const url = "https://harry-potter-api.onrender.com/db"

/** 
fetch(url)
	.then((res) => res.json())
	.then((data) => {
		
		//	Trae toda la info de la API y la deja dentro de la variable data
		//	También muestra la variable data por consola
		
		//console.log(data)
	})
	.catch((e) => console.log(e))
*/


const HpInfo = ({navigation}) => {
const [personajes, setPersonajes] = useState([]);
const [searchfeild, setSearchfeild] = useState('');
const [ modalVisible, setModalVisible] = useState(false);

useEffect(() => {
 fetchCharacters();
},[]);


const fetchCharacters = () => {
fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(personajes => setPersonajes(personajes));
};



  return(

    <View>
      {/*Modal con los detalles del personaje */}
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <CharacterDetails name = "Harry Potter" />

    </Modal>



      <TextInput
        mode='outlained'
        placeholder="Buscar Personaje"
        activeUnderlineColor='#f1c40f'
        underlineColor='#f1c40f'
        style={{height: 50, }}
        onChangeText={(value) => setSearchfeild(value)}
        >
      </TextInput>
      <View style = {{flexDirection: "row", justifyContent: "center", gap: 30, marginTop: 10, }}>
        <Button
          icon="account-search-outline"
          mode='outlined'
          buttonColor = "#f1c40f"
          textColor='#000'          
          onPress={() => {
            const filterPersonajes = personajes.filter((personaje) => {
              return personaje.name.toLowerCase().includes(searchfeild.toLowerCase());
            });
            setPersonajes(filterPersonajes);
          }}
          >Buscar</Button>
          <Button
            icon="notification-clear-all"
            mode='outlined'
            buttonColor = "#f1c40f"
            textColor='#000'
            onPress={() => {
              fetchCharacters();
              //TODO borrar campo textField

            }}
            >Mostrar todos</Button>

      </View>
     
        
      <ScrollView style={{marginTop: 10,}}>
        <View style={styles.container}>
          {personajes.map((personaje, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() => {setModalVisible(true)}}
                  >
                  <Image
                    style={{width: 150, height: 150}}
                    src={personaje.image}
                  />
                  <Text>{personaje.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
  buttonSearch: {
    borderRadius: 50,
    borderWidth: 3,
    color: "#fff"
  },

  //estilos de la modal
  centeredView: {
    flex: 1,
    height: 100,
    width: 100,
    marginTop: 22,
    borderWidth: 3,
    borderColor: '#000'
  },
});

export default HpInfo