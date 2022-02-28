import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {MainStackNavigation} from './MainStackNavigation';
import {AuthorizationFlowStackNavigation} from './AuthorizationFlowStackNavigation';
import {drawerShareIcon, onShare} from './ShareScreen';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Share" icon={drawerShareIcon} onPress={onShare} />
  </DrawerContentScrollView>
);
const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => (
  <Drawer.Navigator drawerContent={CustomDrawerContent}>
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
