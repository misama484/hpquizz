import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from 'react-native';

import Question from "./question";
import Home from"./Home";

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
          name="Question"
          component={Question}
          options={{
            tabBarLabel: 'Menu Principal',
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
    backgroundColor: '#fff',
    shadowOpacity: 0,
    elevation: 0,
    borderTopWidth: 1,
    borderColor: '#95a5a6',
  },
})

export default Menu;