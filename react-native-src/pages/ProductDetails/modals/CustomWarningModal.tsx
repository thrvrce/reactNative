import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {CustomModal} from '../../../reusableComponents/CustomModal/CustomModal';
import WarningIcon from '../../../reusableComponents/CustomModal/icons/WarningIcon.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TProductDetailsStack} from '../TProductDetailsStack';

type ICustomWarningModal = NativeStackScreenProps<
  TProductDetailsStack,
  'WarningModal'
>;

export const CustomWarningModal: FC<ICustomWarningModal> = props => {
  return (
    <CustomModal
      icon={<WarningIcon />}
      title="Login To Continue"
      description="Please login to add product in your cart"
      controls={
        <View
          style={{
            width: 270,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 125,
              height: 40,
            }}>
            <Button
              title="LOGIN"
              color="#008ACE"
              onPress={() => props.navigation.navigate('Login')}
            />
          </View>
          <View
            style={{
              width: 125,
              height: 40,
            }}>
            <Button
              title="SIGN UP"
              color="#008ACE"
              onPress={() => props.navigation.navigate('ProductDetails')}
            />
          </View>
        </View>
      }
    />
  );
};
