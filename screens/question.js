import { View, StyleSheet, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import ArrayPreguntas from "../HP.json"


const shuffleArray = array => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
}

const Question = () => {

  const [questions, setquestions] = useState();
 
  useEffect(() => {
    const newQuestions = shuffleArray(ArrayPreguntas);
    setquestions(newQuestions);
  }, []);
 


  return (
    <View style={styles.container}>

      {/**titulo de la pregunta */}
      <View style = {styles.titleQuestion}>
        <Text>Pregunta: </Text>
        <Text>{questions.pregunta}</Text>
      </View>
      

      {/**opciones de la pregunta */}
      <View style={styles.titleQuestion}>
        {questions.opciones.map((opcion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => checkAnswer(opcion)}>
              <Text>{opcion}</Text>
            </TouchableOpacity>
        ))}
      </View>

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
    padding: 10,
    width: 300,
    marginTop: 16,
  }

})

export default Question