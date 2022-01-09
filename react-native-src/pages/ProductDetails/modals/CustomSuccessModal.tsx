import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {CustomModal} from '../../../reusableComponents/CustomModal/CustomModal';
import SuccessIcon from '../../../reusableComponents/CustomModal/icons/SuccessIcon.svg';

interface ICustomSuccessModal {
  navigation: {
    navigate: (page: string) => void;
  };
}
export const CustomSuccessModal: FC<ICustomSuccessModal> = props => {
  return (
    <CustomModal
      icon={<SuccessIcon />}
      title="Product added to your cart"
      description=""
      controls={
        <View style={{width: 125, height: 40}}>
          <Button
            title="OK"
            color="#008ACE"
            onPress={() => props.navigation.navigate('ProductDetailsView')}
          />
        </View>
      }
    />
  );
};
