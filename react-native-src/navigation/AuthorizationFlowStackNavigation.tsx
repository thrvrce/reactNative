import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthorizationFlowNavigationHeader} from '../pages/AuthorizationFlow/AuthorizationFlowNavigationHeader';
import AuthorizationFlowSignUp from '../pages/AuthorizationFlow/AuthorizationFlow.SignUp';

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  SkipAuthorization: undefined;
  AlreadyAuthorized: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
// todo add sign in screen
// todo add skip login screen
export const AuthorizationFlowStackNavigation = () => (
  <Stack.Navigator initialRouteName="SignUp">
    <Stack.Screen
      name="SignUp"
      component={AuthorizationFlowSignUp}
      options={{
        header: props => <AuthorizationFlowNavigationHeader {...props} />,
      }}
    />
  </Stack.Navigator>
);
