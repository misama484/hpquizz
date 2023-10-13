import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import HPLogo from "../assets/LogoHP.png";
import HowartsBG from '../assets/HowartsBG.png';

import Quizz from "./Quizz";
import Home from"./Home";
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';
import Spells from "./Spells";

const Tab = createMaterialBottomTabNavigator();

function Menu(){
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor = '#fff'
      activateColor = '#95a5a6'
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
      >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icons name="home" color={color} size={26} />
              ),
            }}
          />

        <Tab.Screen
          name="Harry Potter"
          component={Quizz}
          options={{
            tabBarLabel: 'Quizz',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

        <Tab.Screen
          name="Characters"
          component={Characters}
          options={{
            tabBarLabel: 'Personajes',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

          <Tab.Screen
          name="Spells"
          component={Spells}
          options={{
            tabBarLabel: 'Hechizos',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />


      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#f1c40f',
    shadowOpacity: 0,
    elevation: 0,

  },
  header: {
    height: 80,
    backgroundColor: '#f1c40f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
})

export default function Navigation() {
  return (
    <NavigationContainer>

        <View style={styles.header}>
          <Image
          source={HPLogo}
          style={{width:220, height:70,}}
          />
        </View>
      
      <Menu/>

    </NavigationContainer>
  );
};