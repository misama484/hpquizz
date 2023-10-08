import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from 'react-native';

import Question from "./question";
import Home from"./Home";
import Marvel from './Marvel';
import HpInfo from './HpInfo';

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
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
          name="Marvel"
          component={Marvel}
          options={{
            tabBarLabel: 'Marvel',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

        <Tab.Screen
          name="Harry Potter"
          component={Question}
          options={{
            tabBarLabel: 'Harry Potter',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

        <Tab.Screen
          name="Harry Potter Info"
          component={HpInfo}
          options={{
            tabBarLabel: 'Harry Potter Info',
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
})

export default Menu;