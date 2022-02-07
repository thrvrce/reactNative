import React, {FC, useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {textStyles} from '../../reusableStyles/textStyles';
import {TextInputWithPlaceholder} from '../../reusableComponents/TextInputWithPlaceholder/TextInputWithPlaceholder';
import {AnimatedSubmitButton} from './AnimatedSubmitButton/AnimatedSubmitButton';
import {AnimatedSubmitButtonState} from './AnimatedSubmitButton/AnimatedSubmitButtonTypes';

const AuthorizationFlowSignUp: FC<NativeStackHeaderProps> = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  // mock
  const [submitButtonState, changeSubmitButtonState] =
    useState<AnimatedSubmitButtonState>(AnimatedSubmitButtonState.initial);

  const submitHandler = () => {
    changeSubmitButtonState(AnimatedSubmitButtonState.pending);
    setTimeout(() => {
      changeSubmitButtonState(AnimatedSubmitButtonState.error);
    }, 3000);
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Text style={[textStyles.commonText, styles.title]}>
          Ecomerce Store
        </Text>
        <TextInputWithPlaceholder
          placeholder="Full Name"
          wrapperStyles={{marginBottom: 25}}
        />
        <TextInputWithPlaceholder
          placeholder="Email Address"
          wrapperStyles={{marginBottom: 25}}
        />
        <TextInputWithPlaceholder
          placeholder="Password"
          wrapperStyles={{marginBottom: 25}}
        />
        <TextInputWithPlaceholder
          placeholder="Confirm Password"
          wrapperStyles={{marginBottom: 30}}
        />
      </KeyboardAvoidingView>

      <AnimatedSubmitButton
        state={submitButtonState}
        initialStateText="sign up"
        errorStateText="Oops! Try Again"
        submitHandler={submitHandler}
      />
      <Text
        style={[textStyles.commonText, styles.signInText]}
        onPress={undefined}>
        Already have account? Sign In
      </Text>
    </ScrollView>
  );
};

export default AuthorizationFlowSignUp;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 40,
    color: '#00A8F3',
    textAlign: 'center',
    width: 180,
    marginTop: 70,
    marginBottom: 70,
    alignSelf: 'center',
  },
  signInText: {
    color: '#00A8F3',
    marginTop: 25,
  },
});
