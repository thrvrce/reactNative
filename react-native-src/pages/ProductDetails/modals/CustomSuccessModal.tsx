import React, {FC} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {CustomModal} from '../../../reusableComponents/CustomModal/CustomModal';
import SuccessIcon from '../../../reusableComponents/CustomModal/icons/SuccessIcon.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TProductDetailsStack} from '../TProductDetailsStack';

type ICustomSuccessModal = NativeStackScreenProps<
  TProductDetailsStack,
  'SuccessModal'
>;

export const CustomSuccessModal: FC<ICustomSuccessModal> = props => {
  return (
    <CustomModal
      icon={<SuccessIcon />}
      title="Product added to your cart"
      description=""
      controls={
        <View style={styles.controlsWrapper}>
          <Button
            title="OK"
            color="#008ACE"
            onPress={() => props.navigation.navigate('ProductDetails')}
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  controlsWrapper: {width: 125, height: 40},
});
