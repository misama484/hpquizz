//SCREEN QUE MUESTRA INFO DE HARRY POTTER DESDE UNA API
import { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image,  } from 'react-native'

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


const HpInfo = (props) => {
const [personajes, setPersonajes] = useState([]);
const [searchfeild, setSearchfeild] = useState('');

useEffect(() => {
 fetchData();
},[]);


const fetchData = () => {
fetch('https://harry-potter-api.onrender.com/db')
.then(response => response.json())
.then(personajes => setPersonajes(personajes));
};

  return(

    <View>
      <ScrollView>
        <View style={styles.container}>
          {personajes.map((id, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details')
                  }>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      
                    }}
                  />
                  <Text>{pokemon.name}</Text>
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
});

export default HpInfo