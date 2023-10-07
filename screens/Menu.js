import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from 'react-native';

import Question from './question';

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
            tabBarLabel: 'Tareas',
            tabBarIcon: ({ color }) => (
              <Icons name="list" color={color} size={26} />
            ),
          }}
          />

      </Tab.Navigator>
  );
}