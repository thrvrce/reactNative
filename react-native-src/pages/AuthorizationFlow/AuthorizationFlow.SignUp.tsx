import React, {FC} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  View,
} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {textStyles} from '../../reusableStyles/textStyles';
import {TextInputWithPlaceholder} from '../../reusableComponents/TextInputWithPlaceholder/TextInputWithPlaceholder';

const AuthorizationFlowSignUp: FC<NativeStackHeaderProps> = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text
          style={{
            ...textStyles.commonText,
            ...styles.title,
          }}>
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
        <View style={styles.signUpButton}>
          <Button title="SIGN UP" color="#008ACE" onPress={undefined} />
        </View>
        <Text
          style={{
            ...textStyles.commonText,
            ...styles.signInText,
          }}
          onPress={undefined}>
          Already have account? Sign In
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthorizationFlowSignUp;

const styles = StyleSheet.create({
  contentContainerStyle: {
    display: 'flex',
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
  },
  signUpButton: {
    height: 40,
    minWidth: 335,
  },
  signInText: {
    color: '#00A8F3',
    marginTop: 25,
  },
});
