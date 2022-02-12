import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigation} from './MainStackNavigation';
import {AuthorizationFlowStackNavigation} from './AuthorizationFlowStackNavigation';
import {
  ShareScreen,
  ShareScreenNavigationHeader,
  drawerShareIcon,
} from '../pages/ShareScreen/ShareScreen';

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
    <Drawer.Screen
      name="Share"
      options={{
        title: 'Share link to store',
        header: props => <ShareScreenNavigationHeader {...props} />,
        drawerIcon: drawerShareIcon,
      }}
      component={ShareScreen}
    />
  </Drawer.Navigator>
);
