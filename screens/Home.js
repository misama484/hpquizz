import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HarryPotter Quizz</Text> {/*preparar fuente de harry potter*/}
        <Icon name="logo-harry-potter" size={30} color="#fff" /> {/*preparar logo Harry Potter,no icon, img */}
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Question')} //TODO reparar navegacion para iniciar el juego (question)
        >
          <Text style={styles.buttonText}>Start Quiz</Text> {/*fuente de harry potter */}
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2021 HarryPotter Quizz</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 40,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Home;
