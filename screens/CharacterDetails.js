import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-paper"

const CharacterDetails = (props) => {



  return(
    
    <ScrollView >
      <View style = {styles.centeredView}>
        <View style = { styles.imageContainer}>
          <Image
            style = {styles.image}
            source = {props.image}
          />
        </View>
        <Text>{props.name}</Text>
          
      </View>
    </ScrollView>
)}


const styles = StyleSheet.create({
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }
})
export default CharacterDetails;