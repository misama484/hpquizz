import { View, StyleSheet, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import HowartsBG from "../assets/HowartsBG.png"; 

import ArrayPreguntas from "../HP.json"

/*
const shuffleArray = array => {  
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 10);
}*/

//TODO En caso de respuesta erronea, mostrar respuesta correcta
const Quizz = () => {
  
  
  const [score, setScore] = useState(0)
  const [incorrectScore, setincorrectScore] = useState(0)
  
  //funcion numero aleatorio entre 1 y 58 (preguntas en el array)
  const random = () => {
    return Math.floor(Math.random() * 58) + 1;
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
      Alert.alert("Incorrecto, espabila Muggle!! la respuesta correcta es:" + questions[currentQuestion]?.respuesta_correcta); // TODO formatear
      setCurrentQuestion(random())
      setincorrectScore(incorrectScore + 1)
    }
  }

  //TODO crear contador de preguntas y al llegar a X, finalizar partida
  //TODO crear boton de reinicio de partida
  //TODO crear comodin 50%, que elimina 2 opciones erroneas y solo se podra usar 2 veces y se suma 1 vez cada 10 aciertos
  
  //si quito los corchetes, no suma resultados, si los mantengo, no resetea al cargar desde home
  useEffect(() => {
    setincorrectScore(0)
    setScore(0)
  },[])


  return (
    <View style={styles.container}>
      <ImageBackground
        source={HowartsBG}
        style={{width: '100%', height: '100%'}}
      >

      {/**titulo de la pregunta */}
      <View style = {styles.titleQuestion}>
        <Text style = { styles.pregunta}>{questions[currentQuestion].pregunta}</Text>
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
  pregunta: {
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

export default Quizz