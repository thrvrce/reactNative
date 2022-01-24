import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {BackButton} from '../../reusableComponents/BackButton/BackButton';
import HeartIcon from '../../../icons/HeartIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';

export const ProductDetailsNavigationHeader: FC<
  NativeStackHeaderProps
> = props => (
  <TopBar
    leftBlock={<BackButton goBackFn={props.navigation.goBack} />}
    rightBlock={
      <>
        <HeartIcon style={styles.heartIcon} />
        <BucketIcon />
      </>
    }
  />
);

const styles = StyleSheet.create({
  heartIcon: {marginRight: 25},
});
