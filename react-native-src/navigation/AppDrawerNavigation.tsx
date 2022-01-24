import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigation} from './MainStackNavigation';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={MainStackNavigation}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);
