import { View, StyleSheet, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import MarvelBG from '../assets/MarvelBG.jpg';

import ArrayPreguntas from "../Marvel.json"

/*
const shuffleArray = array => {  
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 10);
}*/


const Marvel = () => {
  
  
  const [score, setScore] = useState(0)
  const [incorrectScore, setincorrectScore] = useState(0)
  
  //funcion numero aleatorio entre 1 y 58 (preguntas en el array)
  const random = () => {
    return Math.floor(Math.random() * 25);
  }
  
  //asignamos las preguntas a una constante
  const questions = ArrayPreguntas.preguntas;
  //creamos estado para seleccionar la posicion de la pregunta en el array, pasando un numero random
  const [currentQuestion, setCurrentQuestion] = useState(random());
  //comprueba la respuesta correcta, en caso afirmativo actualiza el estado con una posicion random de pregunta
  const checkAnswer = (opcion) => {
    if (opcion === questions[currentQuestion]?.respuesta_correcta) {
      Alert.alert('Correcto');
      setCurrentQuestion(random())
      setScore(score + 1)
    } else {
      Alert.alert('Incorrecto!!');
      setCurrentQuestion(random())
      setincorrectScore(incorrectScore + 1)
    }
  }

  //TODO crear contador de preguntas y al llegar a X, finalizar partida
  //TODO crear boton de reinicio de partida
  //TODO crear boton de volver a menu principal
  
 


  return (
    <View style={styles.container}>
      <ImageBackground
        source={MarvelBG}
        style={{width: '100%', height: '100%'}}
      >
      {/**titulo de la pregunta */}
      <View style = {styles.titleQuestion}>
        <Text style = { styles.Pregunta}>{questions[currentQuestion].pregunta}</Text>
      </View>
      

      {/**opciones de la pregunta */}
      <View style={styles.titleQuestion}>
        {questions[currentQuestion]?.opciones.map((opcion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => checkAnswer(opcion)}>
              <Text>{opcion}</Text>
            </TouchableOpacity>
        ))}
      </View>
        
        {/**puntuacion */}
      <View style={styles.answerContainer}>
          <Text style = {styles.answerCounterText}>Preguntas acertadas: {score}</Text>
          <Text style = {styles.answerCounterText}>Preguntas falladas: {incorrectScore}</Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleQuestion:{
    alignItems: "center",
    paddingTop: 50,
  },
  button:{
    alignItems: "center",
    backgroundColor: "#f1c40f",
    borderRadius: 5,
    padding: 10,
    width: 300,
    marginTop: 16,
    borderWidth: 3,
    borderColor: '#000'
  },
  Pregunta: {
    fontWeight: "bold",
    color: "#000",
    borderWidth: 3,
    padding: 10,
    backgroundColor: "#f1c40f",
    borderRadius: 5,
  },
  answerContainer:{
    flex: 1,
    flexDirection: 'row',
    alignContent: "center",
    justifyContent: 'center',
    paddingTop: 50,
    gap: 50,
  },
  answerCounterText:{
    fontWeight: 'bold',
    borderWidth: 3,
    height: 40,
    padding: 10,
    backgroundColor: "#f1c40f",
    borderRadius: 5,
    
  }
  

})

export default Marvel