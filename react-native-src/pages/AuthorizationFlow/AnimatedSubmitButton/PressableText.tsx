import React, {FC} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {textStyles} from '../../../reusableStyles/textStyles';

interface IPressableText {
  onPressHandler: () => void;
  signUpButtonText: string;
}
export const PressableText: FC<IPressableText> = props => (
  <Pressable style={styles.submitButton} onPress={props.onPressHandler}>
    <Text style={[textStyles.commonText, styles.submitButtonText]}>
      {props.signUpButtonText}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: 'transparent',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  submitButtonText: {fontSize: 20, color: '#FFF'},
});
