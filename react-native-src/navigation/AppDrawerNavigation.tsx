import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigation} from './MainStackNavigation';
import {AuthorizationFlowStackNavigation} from './AuthorizationFlowStackNavigation';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={MainStackNavigation}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Authorization"
      options={{
        title: 'Authorization',
        headerShown: false,
      }}
      component={AuthorizationFlowStackNavigation}
    />
  </Drawer.Navigator>
);
