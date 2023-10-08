import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import HowartsBG from "../assets/HowartsBG.png";


/*preparar fuente de harry potter*/


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>      
        <ImageBackground
          source={""}
          style={{width: '100%', height: '100%'}}
        >
          <View style = {styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Marvel')} 
            >
              <Text style={styles.buttonText}>Marvel</Text> 
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Harry Potter')} 
            >
              <Text style={styles.buttonText}>Harry Potter</Text> 
          </TouchableOpacity>
          </View>
        </ImageBackground>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
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
    marginTop: 240,
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
  },
});

export default Home;
