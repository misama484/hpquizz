import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, Image } from 'react-native';
import HPLogo from "../assets/LogoHP.png";

import Question from "./question";
import Home from"./Home";
import Marvel from './Marvel';
import HpInfo from './HpInfo';
import CharacterDetails from './CharacterDetails';

const Tab = createMaterialBottomTabNavigator();

function Menu(){
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor = '#fff'
      activateColor = '#000'
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
          component={Question}
          options={{
            tabBarLabel: 'Quizz',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

        <Tab.Screen
          name="Harry Potter Info"
          component={HpInfo}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

          <Tab.Screen
          name="InfoDetails"
          component={CharacterDetails}
          options={{
            tabBarLabel: 'Detalles',
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