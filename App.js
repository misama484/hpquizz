import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Question from './screens/question';
import Menu from './screens/Menu';


export default function App() {

  const stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{
            title:"The Harry Potter Quizz",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f1c40f",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            }
          }}
          />

          <stack.Screen
            name="Siguiente"
            component=""
          />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
