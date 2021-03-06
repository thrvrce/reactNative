import React, {FC} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {CustomModal} from '../../../reusableComponents/CustomModal/CustomModal';
import ErrorIcon from '../../../reusableComponents/CustomModal/icons/ErrorIcon.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TProductDetailsStack} from '../TProductDetailsStack';

type ICustomErrorModal = NativeStackScreenProps<
  TProductDetailsStack,
  'ErrorModal'
>;

export const CustomErrorModal: FC<ICustomErrorModal> = props => {
  return (
    <CustomModal
      icon={<ErrorIcon />}
      title="Select color"
      description="Please select your color to add this item in your cart"
      controls={
        <View style={styles.controlsWrapper}>
          <Button
            title="OK"
            color="#008ACE"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  controlsWrapper: {width: 125, height: 40},
});
