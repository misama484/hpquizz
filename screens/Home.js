import React, { useEffect, useState }from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import HowartsBG from "../assets/HowartsBG.png";
import LogoHP from "../assets/LogoHP.png";
import * as Font from 'expo-font'; 



/*preparar fuente de harry potter*/


const Home = ({ navigation }) => {
/*
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        'HarryPotter': require('../assets/fonts/HarryPotter.TTF'),
      });
      setFontsLoaded(true);
    }
    loadFontsAsync();
  })

*/
  return (
    
    <View style={styles.container}> 
        
      <View>
        <ImageBackground source={HowartsBG} style={{width: '100%', height: '100%'}}>
          <View style = {styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Harry Potter')} 
            >
              <Text style={styles.buttonText}>Quizz</Text> 
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Characters')} 
            >
              <Text style={styles.buttonText}>Personajes</Text> 
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Spells')} 
            >
              <Text style={styles.buttonText}>Hechizos</Text> 
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
          
    </View>
        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 70,
    backgroundColor: '#f1c40f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },

  imageLogo:{
    height: 90,
    width: 270,
    padding: 20,
    
  },

  buttonContainer:{
    flex: 1,
    justifyContent:'center',
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

});

export default Home;
